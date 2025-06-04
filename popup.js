document.addEventListener('DOMContentLoaded', function() {
    const formatButtons = document.querySelectorAll('.format-btn');
    const qualitySlider = document.getElementById('qualitySlider');
    const qualityValue = document.getElementById('qualityValue');
    const captureBtn = document.getElementById('captureBtn');
    const loading = document.getElementById('loading');
    const status = document.getElementById('status');
    
    let selectedFormat = 'png';
    let quality = 0.9;
    
    // Format selection
    formatButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            formatButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            selectedFormat = this.dataset.format;
            
            // Hide quality slider for PNG (lossless) and PDF
            const qualityGroup = document.querySelector('.quality-group');
            if (selectedFormat === 'png' || selectedFormat === 'pdf') {
                qualityGroup.style.display = 'none';
            } else {
                qualityGroup.style.display = 'block';
            }
        });
    });
    
    // Quality slider
    qualitySlider.addEventListener('input', function() {
        quality = parseFloat(this.value);
        qualityValue.textContent = Math.round(quality * 100) + '%';
    });
    
    // Capture button
    captureBtn.addEventListener('click', async function() {
        try {
            setLoading(true);
            
            // Get current active tab
            const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
            
            if (!tab) {
                throw new Error('No active tab found');
            }
            
            // Check if URL is capturable
            if (tab.url.startsWith('chrome://') || tab.url.startsWith('chrome-extension://') || tab.url.startsWith('edge://') || tab.url.startsWith('about:')) {
                throw new Error('Cannot capture browser internal pages');
            }
            
            // Send message to content script to prepare page
            await chrome.tabs.sendMessage(tab.id, { action: 'prepareCapture' });
            
            // Capture screenshot
            const dataUrl = await chrome.tabs.captureVisibleTab(null, {
                format: selectedFormat === 'jpg' ? 'jpeg' : 'png',
                quality: selectedFormat === 'jpg' ? Math.round(quality * 100) : undefined
            });
            
            // Get page info for filename
            const pageInfo = await chrome.tabs.sendMessage(tab.id, { action: 'getPageInfo' });
            
            if (selectedFormat === 'pdf') {
                await convertToPDF(dataUrl, pageInfo.title);
            } else {
                await downloadImage(dataUrl, pageInfo.title, selectedFormat);
            }
            
            setStatus('✅ Screenshot captured successfully!', 'success');
            
        } catch (error) {
            console.error('Capture error:', error);
            setStatus('❌ Error: ' + error.message, 'error');
        } finally {
            setLoading(false);
        }
    });
    
    function setLoading(isLoading) {
        loading.style.display = isLoading ? 'block' : 'none';
        captureBtn.disabled = isLoading;
        status.textContent = '';
    }
    
    function setStatus(message, type) {
        status.textContent = message;
        status.style.color = type === 'error' ? '#ff6b6b' : '#4ecdc4';
        
        // Clear status after 3 seconds
        setTimeout(() => {
            status.textContent = '';
        }, 3000);
    }
    
    async function downloadImage(dataUrl, title, format) {
        const filename = sanitizeFilename(title) + '_' + formatDate(new Date()) + '.' + format;
        
        // Convert to blob for download
        const response = await fetch(dataUrl);
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        
        // Download using Chrome downloads API
        await chrome.downloads.download({
            url: url,
            filename: filename,
            saveAs: false
        });
        
        // Clean up object URL
        setTimeout(() => URL.revokeObjectURL(url), 1000);
    }
    
    async function convertToPDF(dataUrl, title) {
        // For PDF conversion, we'll use a simpler approach
        // In a production environment, you might want to use a proper PDF library
        const filename = sanitizeFilename(title) + '_' + formatDate(new Date()) + '.pdf';
        
        // Send to background script for PDF processing
        chrome.runtime.sendMessage({
            action: 'convertToPDF',
            dataUrl: dataUrl,
            filename: filename,
            title: title
        });
    }
    
    function sanitizeFilename(filename) {
        return filename
            .replace(/[^a-z0-9\-_\s]/gi, '')
            .replace(/\s+/g, '_')
            .substring(0, 100) || 'screenshot';
    }
    
    function formatDate(date) {
        return date.getFullYear() + 
               String(date.getMonth() + 1).padStart(2, '0') + 
               String(date.getDate()).padStart(2, '0') + '_' +
               String(date.getHours()).padStart(2, '0') + 
               String(date.getMinutes()).padStart(2, '0') + 
               String(date.getSeconds()).padStart(2, '0');
    }
    
    // Initialize quality display
    qualityValue.textContent = Math.round(quality * 100) + '%';
});