// Define the word you want to hide
const wordToHide = 'Lorem';

// Find and hide the word on the page
function hideWord() {
	const elements = document.querySelectorAll('*:not(script):not(style)');
	elements.forEach((element) => {
		element.childNodes.forEach((node) => {
			if (
				node.nodeType === Node.TEXT_NODE &&
				node.textContent.includes(wordToHide)
			) {
				const regex = new RegExp(`(${wordToHide})`, 'gi');
				const replacedText = node.textContent.replace(
					regex,
					"<span class='word-hider'>$1</span>"
				);
				const newElement = document.createElement('span');
				newElement.innerHTML = replacedText;
				element.replaceChild(newElement, node);
			}
		});
	});
}

// Listen for messages from the popup
chrome.runtime.onMessage.addListener((message) => {
	if (message === 'hideWord') {
		hideWord();
	}
});
