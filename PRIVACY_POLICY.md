# Privacy Policy for Bitrix24 Button Fix Chrome Extension

**Last Updated: July 16, 2025**

## Overview

Bitrix24 Button Fix is a Chrome extension that automatically clicks all items in Bitrix24 popups when the "Todas" (All) button is pressed. This privacy policy explains how the extension handles user data and permissions.

## Data Collection and Usage

### What Data We DO NOT Collect

-   **Personal Information**: We do not collect, store, or transmit any personal information
-   **Browsing History**: We do not track or record your browsing activities
-   **User Data**: We do not access, read, or store any user data from Bitrix24 or any other websites
-   **Cookies**: We do not create, read, or modify cookies
-   **Local Storage**: We do not access or modify local storage data
-   **Network Requests**: We do not make any external network requests or send data to remote servers

### What the Extension Does

The extension only:

-   Detects when you click the "Todas" button on Bitrix24 popup dialogs
-   Automatically clicks other selectable items within the same popup
-   Operates entirely locally within your browser
-   Does not store, transmit, or process any data

## Permissions Explanation

### Content Scripts Access (`content_scripts`)

**Permission**: Access to `*.bitrix24.com/*`, `*.bitrix24.com.br/*`, and `*.bitrix24.site/*`

**Purpose**: This permission allows the extension to run its functionality only on Bitrix24 websites.

**Usage**:

-   Detect the "Todas" button clicks
-   Find and click selectable items in popups
-   Monitor DOM changes for dynamic content

**Data Access**: The extension only reads DOM elements to identify buttons and clickable items. No data is collected, stored, or transmitted.

### Why These Permissions Are Necessary

1. **Domain-Specific Functionality**: The extension is designed exclusively for Bitrix24 platforms
2. **Button Detection**: Requires access to page elements to identify the "Todas" button
3. **Automated Clicking**: Needs to interact with DOM elements to click items automatically
4. **Dynamic Content**: Must monitor page changes since Bitrix24 loads content dynamically

## Data Security

-   **No Data Storage**: Since we don't collect any data, there's no data to secure
-   **Local Processing**: All functionality occurs locally in your browser
-   **No External Communication**: The extension does not communicate with any external servers
-   **No Third-Party Services**: We do not use any third-party analytics, tracking, or data services

## User Control

-   **Enable/Disable**: You can enable or disable the extension at any time through Chrome's extension management
-   **Uninstall**: You can completely remove the extension without any data remnants
-   **Selective Use**: The extension only works when you actively click the "Todas" button

## Changes to This Policy

If we make any changes to this privacy policy, we will update the "Last Updated" date above. Since the extension doesn't collect data, changes would typically only involve clarifications or additional explanations.

## Contact Information

For questions about this privacy policy or the extension's functionality:

-   **GitHub Repository**: [https://github.com/mruniverse/Bitrix24ButtonFix](https://github.com/mruniverse/Bitrix24ButtonFix)
-   **Issues**: Use GitHub Issues for technical questions or concerns

## Compliance

This extension:

-   Does not collect personal data, so GDPR consent is not required
-   Does not use tracking technologies
-   Does not share data with third parties
-   Operates with minimal necessary permissions
-   Follows Chrome Web Store policies and guidelines

## Technical Implementation

The extension uses:

-   **Content Scripts**: Injected only into Bitrix24 pages to provide functionality
-   **DOM Manipulation**: Read-only access to detect buttons and click elements
-   **Event Listeners**: To detect user interactions with the "Todas" button
-   **Local Execution**: All code runs locally without external dependencies

---

**In Summary**: Bitrix24 Button Fix is a simple automation tool that enhances your Bitrix24 experience by automating repetitive clicking tasks. It operates entirely locally, collects no data, and respects your privacy completely.
