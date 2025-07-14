# Chrome Web Store Submission Guide

## Files to Submit

The `chrome-store-package/` folder contains all the files needed for Chrome Web Store submission:

- `manifest.json` - Extension configuration
- `content.js` - Main functionality script
- `images/` - Extension icons (16px, 48px, 128px)

## Chrome Web Store Submission Steps

### 1. Developer Account Setup
1. Go to [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole/)
2. Sign in with your Google account
3. Pay the one-time $5 developer registration fee (if not already paid)

### 2. Create the Extension Package
1. Navigate to the `chrome-store-package/` folder
2. Select all files (manifest.json, content.js, images folder)
3. Create a ZIP file containing these files
4. Ensure the ZIP file is under 10MB

### 3. Upload to Chrome Web Store
1. In the Developer Dashboard, click "Add new item"
2. Upload your ZIP file
3. Fill out the required information:

#### Store Listing Information:
- **Name**: Bitrix24 Button Fix
- **Summary**: Automatically clicks all items in Bitrix24 popups when the "Todas" button is pressed
- **Description**: 
```
Bitrix24 Button Fix is a simple Chrome extension that enhances your Bitrix24 experience by automatically selecting all items in popup dialogs.

Features:
• Automatically detects Bitrix24 popup dialogs (including those in iframes)
• Finds the "Todas" (All) button when it becomes available
• Clicks all items in the popup with a single button press
• Works seamlessly with Bitrix24's dynamic content loading
• Supports all Bitrix24 domains (.com, .com.br, .site)

How to use:
1. Install the extension
2. Navigate to any Bitrix24 page
3. Open a popup that contains selectable items
4. Click the "Todas" button - the extension will automatically select all items

The extension only activates on Bitrix24 pages and requires minimal permissions for maximum security.
```

#### Additional Details:
- **Category**: Productivity
- **Language**: English (or your preferred language)
- **Single Purpose**: Automates repetitive clicking tasks in Bitrix24
- **Permission Justification**: 
  - `activeTab`: Required to interact with Bitrix24 page content and detect button clicks
  - `https://*.bitrix24.com/*`, etc.: Required to run on Bitrix24 domains only

### 4. Screenshots and Icons
- Upload screenshots showing the extension in action (recommended: 1280x800 or 640x400)
- The extension icons are already included in the package

### 5. Privacy and Compliance
- **Privacy Policy**: Not required for this extension (no data collection)
- **Host Permissions**: Justify that the extension only works on Bitrix24 domains
- **Single Purpose**: Clearly state that the extension only automates clicking tasks

### 6. Review and Publish
1. Review all information
2. Submit for review
3. Wait for Google's approval (typically 1-3 business days)

## Important Notes

- The extension follows Manifest V3 requirements
- Uses minimal permissions for security
- No data collection or external connections
- Only activates on specified Bitrix24 domains
- Code is simple and transparent for easy review

## Pricing
- Free extension (no monetization)
- One-time $5 developer fee required for Chrome Web Store account
