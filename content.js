// Content script for screenshot preparation and page information
(function() {
    'use strict';
    
    // Listen for messages from popup
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
        switch (message.action) {
            case 'prepareCapture':
                preparePageForCapture()
                    .then(() => sendResponse({ success: true }))
                    .catch(error => sendResponse({ success: false, error: error.message }));
                return true; // Keep message channel open for async response
                
            case 'getPageInfo':
                sendResponse({
                    title: document.title,
                    url: window.location.href,
                    domain: window.location.hostname
                });
                break;
                
            default:
                sendResponse({ error: 'Unknown action' });
        }
    });
    
    async function preparePageForCapture() {
        return new Promise((resolve, reject) => {
            try {
                // Scroll to top of page
                window.scrollTo(0, 0);
                
                // Wait for any lazy-loaded content
                setTimeout(() => {
                    // Remove fixed/sticky elements that might interfere
                    removeProblematicElements();
                    
                    // Ensure all images are loaded
                    waitForImagesToLoad()
                        .then(() => {
                            // Wait a bit more for any final rendering
                            setTimeout(resolve, 500);
                        })
                        .catch(reject);
                }, 100);
                
            } catch (error) {
                reject(error);
            }
        });
    }
    
    function removeProblematicElements() {
        // Temporarily hide elements that might cause issues
        const problematicSelectors = [
            '[style*="position: fixed"]',
            '[style*="position: sticky"]',
            '.cookie-banner',
            '.notification-bar',
            '.popup-overlay',
            '.modal-overlay'
        ];
        
        problematicSelectors.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(el => {
                if (el.style.position === 'fixed' || el.style.position === 'sticky') {
                    el.style.visibility = 'hidden';
                    // Store original value to restore later
                    el.dataset.originalVisibility = el.style.visibility;
                    
                    // Restore after capture
                    setTimeout(() => {
                        el.style.visibility = el.dataset.originalVisibility || '';
                        delete el.dataset.originalVisibility;
                    }, 2000);
                }
            });
        });
    }
    
    function waitForImagesToLoad() {
        return new Promise((resolve) => {
            const images = Array.from(document.images);
            let loadedCount = 0;
            
            if (images.length === 0) {
                resolve();
                return;
            }
            
            const checkComplete = () => {
                loadedCount++;
                if (loadedCount === images.length) {
                    resolve();
                }
            };
            
            images.forEach(img => {
                if (img.complete) {
                    checkComplete();
                } else {
                    img.addEventListener('load', checkComplete);
                    img.addEventListener('error', checkComplete);
                    
                    // Timeout fallback
                    setTimeout(checkComplete, 2000);
                }
            });
            
            // Overall timeout
            setTimeout(resolve, 5000);
        });
    }
    
    // Helper function to get page dimensions
    function getPageDimensions() {
        return {
            width: Math.max(
                document.body.scrollWidth,
                document.body.offsetWidth,
                document.documentElement.clientWidth,
                document.documentElement.scrollWidth,
                document.documentElement.offsetWidth
            ),
            height: Math.max(
                document.body.scrollHeight,
                document.body.offsetHeight,
                document.documentElement.clientHeight,
                document.documentElement.scrollHeight,
                document.documentElement.offsetHeight
            )
        };
    }
    
    // Check if page allows screenshots (basic check)
    function checkScreenshotPermissions() {
        // Check for common screenshot blocking indicators
        const metaTags = document.querySelectorAll('meta[name*="screenshot"], meta[name*="capture"]');
        const hasRestrictiveMeta = Array.from(metaTags).some(meta => 
            meta.content && meta.content.toLowerCase().includes('deny')
        );
        
        if (hasRestrictiveMeta) {
            console.warn('Page may restrict screenshots');
        }
        
        return !hasRestrictiveMeta;
    }
    
    // Initialize content script
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            checkScreenshotPermissions();
        });
    } else {
        checkScreenshotPermissions();
    }
})();