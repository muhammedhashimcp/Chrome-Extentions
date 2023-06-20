const btn = document.querySelector('.changeColorBtn');
const colorGrid = document.querySelector('.colorGrid');
const colorValue = document.querySelector('.colorValue');
console.log('🚀 ~ file: popup.js:4 ~ colorValue:');

btn.addEventListener('click', async () => {
	chrome.storage.sync.get('color', ({ color }) => {
		console.log('color: ', color);
		console.log('🚀 ~ file: popup.js:4 ~ colorValue:');
	});
	try {
		let [tab] = await chrome.tabs.query({
			active: true,
			currentWindow: true,
		});
		chrome.scripting.executeScript(
			{
				target: { tabId: tab.id },
				function: pickColor,
			},
			async (injectionResults) => {
				console.log(
					'🚀 ~ file: popup.js:21 ~ injectionResults:',
					injectionResults
				);
				const [data] = injectionResults;
				if (data.result) {
					const color = data.result.sRGBHex;
					colorGrid.style.backgroundColor = color;
					colorValue.innerText = color;
					try {
						await navigator.clipboard.writeText(color);
					} catch (err) {
						console.error(err);
					}
				}
			}
		);
	} catch (err) {
		console.error(err);
	}
});

async function pickColor() {
	try {
		// Picker
		const eyeDropper = new EyeDropper();
		return await eyeDropper.open();
	} catch (err) {
		console.error(err);
	}
}
