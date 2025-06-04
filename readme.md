# Full Page Screenshot Extension

A Chrome Manifest V3 extension for capturing high-quality full-page screenshots with support for PNG, JPG, and PDF formats.

## Features

- 🖼️ **HD Quality Screenshots** - Capture screenshots in high definition
- 📄 **Multiple Formats** - Save as PNG, JPG, or PDF
- 🎛️ **Quality Control** - Adjustable quality settings for JPG format
- 🔒 **Privacy Compliant** - Minimal permissions, no data collection
- ⚡ **Fast & Lightweight** - Optimized for performance
- 🎨 **Modern UI** - Beautiful, user-friendly interface

## Installation

1. Download or clone this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right
4. Click "Load unpacked" and select the extension folder
5. The extension icon will appear in your toolbar

## Usage

1. **Navigate** to the webpage you want to capture
2. **Click** the extension icon in the toolbar
3. **Select** your preferred format (PNG, JPG, or PDF)
4. **Adjust** quality settings if using JPG format
5. **Click** "Capture Full Page" button
6. The screenshot will be automatically downloaded

## File Structure

```
extension/
├── manifest.json          # Extension manifest
├── popup.html            # Extension popup interface
├── popup.js              # Popup functionality
├── background.js         # Background service worker
├── content.js            # Content script for page preparation
├── pdf-viewer.html       # PDF preview and conversion page
├── icons/                # Extension icons (16x16, 32x32, 48x48, 128x128)
└── README.md            # This file
```

## Permissions & Privacy

### Permissions Used:
- **`activeTab`** - Required to capture screenshots of the current tab
- **`downloads`** - Required to save screenshots to the user's device
- **`host_permissions`** - Required to access web pages for screenshot capture

### Privacy Compliance:
- ✅ No data collection or tracking
- ✅ No external server communication
- ✅ All processing happens locally
- ✅ Minimal permissions requested
- ✅ Respects website screenshot policies
- ✅ No persistent storage of user data

## Google Policy Compliance

This extension follows Google's Chrome Web Store policies:

1. **Minimal Permissions** - Only requests necessary permissions
2. **Privacy First** - No data collection or user tracking
3. **Secure** - Uses Manifest V3 with service workers
4. **Functional** - Provides clear value to users
5. **Transparent** - Open source with clear documentation

## Limitations & Cautions

⚠️ **Important Limitations:**

- Cannot capture Chrome internal pages (`chrome://`, `chrome-extension://`)
- Some websites may block screenshots for security reasons
- Captures visible content only (not full scrollable height in current implementation)
- PDF conversion uses browser's print functionality