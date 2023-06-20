let willSmithImages = [
	'https://picsum.photos/200/300',
	'https://picsum.photos/200/300',
	'https://picsum.photos/200/300',
	'https://picsum.photos/200/300',
	'https://picsum.photos/200/300',
	'https://picsum.photos/200/300',
	'https://picsum.photos/200/300',
	'https://picsum.photos/200/300',
	'https://picsum.photos/200/300',
];
const imgs = document.getElementsByTagName('img');
for (let i = 0; i < imgs.length; i++) {
	const randomImg = Math.floor(Math.random() * willSmithImages.length);
	imgs[i].src = willSmithImages[randomImg];
}
const headers = document.getElementsByTagName('a');
for (let i = 0; i < headers.length; i++) {
	headers[i].innerText = 'Hashim';
}
