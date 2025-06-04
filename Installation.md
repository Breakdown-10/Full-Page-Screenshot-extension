# Installation Guide - Full Page Screenshot Extension

## Quick Start

### Option 1: Developer Mode Installation (Recommended for Testing)

1. **Download the Extension**
   - Download all files to a local folder
   - Ensure all files are in the same directory

2. **Open Chrome Extensions Page**
   - Open Google Chrome
   - Navigate to `chrome://extensions/`
   - Or click Menu (⋮) → More Tools → Extensions

3. **Enable Developer Mode**
   - Toggle "Developer mode" switch in the top-right corner
   - Additional options will appear

4. **Load the Extension**
   - Click "Load unpacked" button
   - Select the folder containing the extension files
   - The extension should appear in your extensions list

5. **Verify Installation**
   - Look for the screenshot icon in your toolbar
   - If not visible, click the extensions icon (puzzle piece) and pin it

### Option 2: Chrome Web Store (Future)
Once approved by Google, the extension will be available on the Chrome Web Store for easy one-click installation.

## Required Files

Ensure your extension folder contains these files:

```
screenshot-extension/
├── manifest.json          ✅ Required
├── popup.html            ✅ Required
├── popup.js              ✅ Required
├── background.js         ✅ Required
├── content.js            ✅ Required
├── pdf-viewer.html       ✅ Required
├── icons/                📁 Create this folder
│   ├── icon16.png        🖼️ Create 16x16 icon
│   ├── icon32.png        🖼️ Create 32x32 icon
│   ├── icon48.png        🖼️ Create 48x48 icon
│   └── icon128.png       🖼️ Create 128x128 icon
└── README.md             📖 Documentation
```

## Creating Extension Icons

You need to create 4 icon files in the `icons/` folder:

### Icon Specifications
- **Format:** PNG with transparent background
- **Design:** Simple camera or screenshot symbol
- **Colors:** Use blue/purple theme to match the UI
- **Sizes Required:**
  - `icon16.png` - 16x16 pixels (toolbar)
  - `icon32.png` - 32x32 pixels (windows)
  - `icon48.png` - 48x48 pixels (extension management)
  - `icon128.png` - 128x128 pixels (Chrome Web Store)

### Quick Icon Creation
1. **Use Online Tools:**
   - Canva, Figma, or similar design tools
   - Search for "camera icon" or "screenshot icon"
   - Export in required sizes

2. **Use Icon Libraries:**
   - Download from IconFinder, Flaticon, or Icons8
   - Ensure proper licensing for distribution

3. **Simple Design Example:**
   ```
   📷 - Camera emoji style
   📱 - Phone with screenshot
   🖼️ - Picture frame
   📸 - Camera with flash
   ```

## Browser Compatibility

### Supported Browsers
| Browser | Version | Status |
|---------|---------|---------|
| Google Chrome | 88+ | ✅ Fully Supported |
| Microsoft Edge | 88+ | ✅ Fully Supported |
| Opera | 74+ | ✅ Fully Supported |
| Brave | Latest | ✅ Should Work |

### Unsupported Browsers
- Firefox (uses different manifest format)
- Safari (different extension system)
- Internet Explorer (deprecated)

## Troubleshooting Installation

### Common Issues

**"Manifest file is missing or unreadable"**
- Ensure `manifest.json` is in the root folder
- Check JSON syntax for errors
- Verify file encoding is UTF-8

**"Extension failed to load"**
- Check all required files are present
- Verify file permissions are correct
- Look for syntax errors in JavaScript files

**Icons not displaying**
- Create the `icons/` folder
- Add all required icon sizes
- Check file paths in manifest.json

**Extension not visible in toolbar**
- Click the extensions icon (puzzle piece)
- Find "Full Page Screenshot Capture"
- Click the pin icon to keep it visible

### Error Resolution

1. **Check Chrome Console**
   - Right-click extension icon → Inspect popup
   - Look for JavaScript errors
   - Fix any reported issues

2. **Reload Extension**
   - Go to `chrome://extensions/`
   - Click reload button for the extension
   - Test functionality again

3. **Clear Browser Data**
   - Clear Chrome cache and cookies
   - Restart browser
   - Reload extension

## Security Considerations

### Safe Installation Practices
- Only install from trusted sources
- Review code before installation (it's open source!)
- Understand requested permissions
- Regular security updates

### Permission Warnings
Chrome may show permission warnings:
- "Read and change all your data on websites" - Required for screenshot capture
- "Manage your downloads" - Required for saving files

These are normal and necessary for the extension to function.

## Post-Installation Setup

### First Use
1. Navigate to any website
2. Click the extension icon
3. Select preferred format (PNG recommended)
4. Click "Capture Full Page"
5. Screenshot will download automatically

### Recommended Settings
- **Format:** PNG for best quality
- **Quality:** 90% for JPG (if used)
- **Browser Downloads:** Set to ask where to save files

## Updating the Extension

### Manual Updates
1. Download new version files
2. Replace old files in extension folder
3. Go to `chrome://extensions/`
4. Click reload button for the extension

### Automatic Updates (Chrome Web Store)
Once published, updates will be automatic through the Chrome Web Store.

## Uninstallation

### Complete Removal
1. Go to `chrome://extensions/`
2. Find "Full Page Screenshot Capture"
3. Click "Remove" button
4. Confirm removal

### Data Cleanup
- All extension data is automatically removed
- Downloaded screenshots remain in your downloads folder
- No residual data or settings

## Support and Help

### Getting Help
- Check the troubleshooting section above
- Review GitHub issues for similar problems
- Create new issue with detailed information

### Required Information for Support
- Chrome version
- Operating system
- Error messages (if any)
- Steps to reproduce the issue
- Extension version number

## Advanced Installation

### Enterprise Deployment
For organizations wanting to deploy this extension:

1. **Group Policy**
   - Use Chrome Enterprise policies
   - Deploy through Active Directory
   - Centralized management

2. **Force Installation**
   - Add to ExtensionInstallForcelist policy
   - Automatic installation for all users
   - No user interaction required

### Development Setup
For developers wanting to modify the extension:

1. **Clone Repository**
   ```bash
   git clone [repository-url]
   cd screenshot-extension
   ```

2. **Development Mode**
   - Load unpacked extension
   - Make changes to files
   - Reload extension to test changes

3. **Testing**
   - Test on various websites
   - Check different image formats
   - Verify download functionality

This completes the installation guide. The extension should now be ready to use for capturing high-quality screenshots!