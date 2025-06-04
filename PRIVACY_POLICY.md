# Privacy Policy - Full Page Screenshot Extension

**Last Updated:** June 4, 2025

## Overview

The Full Page Screenshot Extension is designed with privacy as a fundamental principle. This privacy policy explains how our extension handles your data and protects your privacy.

## Data Collection

### What We DON'T Collect
- ❌ Personal information
- ❌ Browsing history
- ❌ Website content or URLs
- ❌ Screenshot images
- ❌ User behavior or analytics
- ❌ Cookies or tracking data
- ❌ Device information
- ❌ Location data

### What We DO Process (Locally Only)
- ✅ Current tab screenshots (processed locally, never stored)
- ✅ Page titles (for filename generation only)
- ✅ User-selected quality settings (not stored permanently)

## Data Processing

### Local Processing Only
- All screenshot processing happens entirely on your device
- No data is transmitted to external servers
- No cloud storage or remote processing
- Screenshots are saved directly to your downloads folder

### Permissions Explanation

#### `activeTab` Permission
- **Purpose:** Capture screenshots of the currently active tab
- **Scope:** Only the tab you're currently viewing
- **Usage:** Required for the Chrome screenshot API
- **Data Access:** Visual content of current tab only

#### `downloads` Permission
- **Purpose:** Save captured screenshots to your device
- **Scope:** Your downloads folder only
- **Usage:** Automatic file saving after capture
- **Data Access:** No access to existing files

#### `host_permissions` (http://*/* and https://*/*)
- **Purpose:** Allow extension to work on all websites
- **Scope:** Web pages only (not browser internal pages)
- **Usage:** Content script injection for page preparation
- **Data Access:** DOM access for screenshot optimization only

## Data Storage

### Local Storage
- Extension preferences stored in browser's local extension storage
- No personal data stored
- Settings can be cleared by removing the extension

### No Remote Storage
- No cloud databases
- No external APIs
- No third-party services
- No data synchronization

## Data Sharing

### Zero Data Sharing
- We do not share any data with third parties
- We do not sell user information
- We do not provide data to advertisers
- We do not integrate with analytics services

## Security Measures

### Technical Safeguards
- Manifest V3 security architecture
- Service worker isolation
- Content Security Policy implementation
- Minimal permission scope

### Code Transparency
- Open source code available for review
- No obfuscated or hidden functionality
- Clear and documented codebase

## Third-Party Services

### None Used
- No external APIs
- No tracking scripts
- No advertisement networks
- No social media integrations

## User Rights

### Control Over Data
- You can remove the extension at any time
- All local data is deleted when extension is removed
- No data retention after uninstallation

### No Account Required
- Extension works without user accounts
- No registration or login process
- No user profiles or preferences tracking

## Children's Privacy

This extension does not knowingly collect any information from children under 13 years of age. The extension is designed to be safe for users of all ages.

## Updates and Changes

### Policy Updates
- Privacy policy updates will be reflected in extension updates
- Material changes will be highlighted in release notes
- Users will be notified of significant privacy policy changes

### Extension Updates
- Updates maintain the same privacy standards
- No new data collection introduced without explicit notice
- Backwards compatibility for privacy expectations

## Compliance

### Legal Compliance
- Complies with Chrome Web Store policies
- Adheres to GDPR principles (no data collection)
- Follows CCPA guidelines (no personal information processing)
- Meets international privacy standards

### Industry Standards
- Follows privacy-by-design principles
- Implements data minimization practices
- Maintains transparency in operations

## Contact Information

For privacy-related questions or concerns:
- GitHub Issues: [Repository URL]
- Email: [Your Email]

## Technical Details

### Data Flow
1. User clicks capture button
2. Extension captures visible tab content
3. Image processed locally in browser
4. File saved to downloads folder
5. No data leaves user's device

### Permission Scope Limitations
- Cannot access other browser tabs
- Cannot access browser history
- Cannot access bookmarks or passwords
- Cannot access file system beyond downloads
- Cannot make network requests

## Transparency Report

### Regular Audits
- Code is open source and auditable
- No hidden functionality or backdoors
- Regular security reviews

### Data Processing Summary
- **Data Collected:** None permanently
- **Data Stored:** User preferences only (locally)
- **Data Shared:** None
- **Third Parties:** None involved
- **Tracking:** None implemented

## Conclusion

Your privacy is paramount. This extension is designed to provide useful functionality while maintaining complete privacy and security. All processing happens locally on your device, and no personal information is ever collected, stored, or transmitted.

If you have any questions about this privacy policy or our privacy practices, please don't hesitate to contact us through the channels provided above.