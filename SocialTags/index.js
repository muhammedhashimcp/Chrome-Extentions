const getJokes = async () => {
	try {
		// const res = await fetch('https://api.chucknorris.io/jokes/random');
		// const data = await res.json();
		// const myJoke = document.querySelector('#myJoke');
		// myJoke.innerHTML = data.value;
		var input = document.getElementById('tag-input');
		var addButton = document.getElementById('add-button');
		var tagList = document.getElementById('tag-list');

		addButton.addEventListener('click', function () {
			var tag = input.value.trim();

			if (tag !== '') {
				var tagItem = document.createElement('span');
				tagItem.textContent = tag;
				tagItem.className = 'tag-item';
				tagList.appendChild(tagItem);
			}

			input.value = '';
		});
	} catch (error) {}
};
window.addEventListener('load', () => {
	getJokes();
});
