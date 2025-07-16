// Function to find and attach listener to the button
function attachButtonListener() {
	// Force DOM reflow/repaint to make hidden elements accessible
	document.body.offsetHeight;

	// Try multiple ways to find the button
	let button = null;
	let targetDocument = document; // Track which document we're working with

	// Method 1: Your exact selector in main document
	button = document.getElementsByClassName(
		"ui-tile-selector-searcher-sidebar-item ui-tile-selector-searcher-sidebar-item-selected"
	)[0];

	// Method 2: Try without the selected class first, then check if it's selected
	if (!button) {
		const buttons = document.getElementsByClassName("ui-tile-selector-searcher-sidebar-item");
		for (let btn of buttons) {
			if (btn.classList.contains("ui-tile-selector-searcher-sidebar-item-selected")) {
				button = btn;
				break;
			}
		}
	}

	// Method 3: Search in all iframes
	if (!button) {
		const iframes = document.querySelectorAll("iframe");
		for (let iframe of iframes) {
			try {
				const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
				if (iframeDoc) {
					// Force reflow in iframe too
					iframeDoc.body.offsetHeight;

					// Try to find the button in this iframe
					button = iframeDoc.getElementsByClassName(
						"ui-tile-selector-searcher-sidebar-item ui-tile-selector-searcher-sidebar-item-selected"
					)[0];

					if (!button) {
						// Try method 2 in iframe
						const iframeButtons = iframeDoc.getElementsByClassName(
							"ui-tile-selector-searcher-sidebar-item"
						);
						for (let btn of iframeButtons) {
							if (
								btn.classList.contains(
									"ui-tile-selector-searcher-sidebar-item-selected"
								)
							) {
								button = btn;
								break;
							}
						}
					}

					if (button) {
						console.log("Bitrix24 Button Fix: Found button in iframe!");
						targetDocument = iframeDoc;
						break;
					}
				}
			} catch (e) {
				console.log("Bitrix24 Button Fix: Cross-origin iframe, can't access:", e.message);
			}
		}
	}

	if (button && !button.hasListenerAttached) {
		console.log("Bitrix24 Button Fix: Button found! Attaching listener");

		button.addEventListener("click", () => {
			// Small delay to let the UI update, then run the code
			// The clickAllItems function will need to search in the same document context
			setTimeout(() => {
				clickAllItemsInDocument(targetDocument);
			}, 200);
		});

		// Mark that we've attached the listener
		button.hasListenerAttached = true;

		return true; // Found and attached
	}

	return false; // Button not found yet
}

// Modified function to work with specific document (main or iframe)
function clickAllItemsInDocument(doc = document) {
	console.log(
		"Bitrix24 Button Fix: Running click all items in",
		doc === document ? "main document" : "iframe"
	);
	const array = doc.getElementsByClassName("ui-tile-selector-searcher-content")[0].children;
	for (item of array) {
		item.click();
	}
}

// Try to attach the listener immediately
if (!attachButtonListener()) {
	// Keep checking every 500ms until we find the button
	const checkInterval = setInterval(() => {
		if (attachButtonListener()) {
			console.log("Bitrix24 Button Fix: Successfully attached listener!");
			clearInterval(checkInterval);
		}
	}, 500);

	// Stop checking after 30 seconds to avoid infinite loop
	setTimeout(() => {
		clearInterval(checkInterval);
		console.log("Bitrix24 Button Fix: Stopped checking for button after 30 seconds");
	}, 30000);
}

// For manual testing
window.bitrix24Test = () => clickAllItemsInDocument(document);

console.log("Bitrix24 Button Fix: Extension loaded. Test with: window.bitrix24Test()");
console.log("Bitrix24 Button Fix: Will automatically detect when button appears");
