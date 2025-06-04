// Background service worker for Chrome Extension
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'convertToPDF') {
        handlePDFConversion(message.dataUrl, message.filename, message.title);
    }
});

async function handlePDFConversion(dataUrl, filename, title) {
    try {
        // Create a simple PDF with the screenshot
        // Note: This is a basic implementation. For production, consider using a proper PDF library
        
        // Convert data URL to blob
        const response = await fetch(dataUrl);
        const blob = await response.blob();
        
        // Create a new canvas to prepare the image
        const canvas = new OffscreenCanvas(1920, 1080);
        const ctx = canvas.getContext('2d');
        
        // Create image from blob
        const imageBitmap = await createImageBitmap(blob);
        
        // Draw image on canvas (resize to fit)
        const scale = Math.min(canvas.width / imageBitmap.width, canvas.height / imageBitmap.height);
        const x = (canvas.width - imageBitmap.width * scale) / 2;
        const y = (canvas.height - imageBitmap.height * scale) / 2;
        
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(imageBitmap, x, y, imageBitmap.width * scale, imageBitmap.height * scale);
        
        // Convert canvas to blob
        const pdfBlob = await canvas.convertToBlob({ type: 'image/png', quality: 0.9 });
        const pdfUrl = URL.createObjectURL(pdfBlob);
        
        // For actual PDF creation, we'll use the print API
        // This will open a print dialog where user can save as PDF
        chrome.tabs.create({
            url: chrome.runtime.getURL('pdf-viewer.html') + '?data=' + encodeURIComponent(dataUrl) + '&title=' + encodeURIComponent(title)
        });
        
    } catch (error) {
        console.error('PDF conversion error:', error);
    }
}

// Handle extension installation
chrome.runtime.onInstalled.addListener((details) => {
    if (details.reason === 'install') {
        console.log('Screenshot Extension installed');
    }
});

// Handle toolbar icon click
chrome.action.onClicked.addListener((tab) => {
    // This will be handled by the popup
});