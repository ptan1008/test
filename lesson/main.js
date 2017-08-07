var SCREEN_WIDTH = 800;
var SCREEN_HEIGHT = 600;

window.addEventListener('load', init);

var canvas = null;
var ctx = null;
var image = null;

var boxX = 0;

function loadImage(onComplete) {
	image = new Image();
	image.src = 'http://www.s-mikanbox.com/wp-content/uploads/2010/07/d62c493824444823f81c10a2550de1d91-300x273.jpg';
	image.onload = function () {
		onComplete();
	};
}

function init() {

	canvas = document.getElementById('maincanvas');
	ctx = canvas.getContext('2d');

	canvas.width = SCREEN_WIDTH;
	canvas.height = SCREEN_HEIGHT;

	loadImage(function() {
		update();
	});
}

function update() {
	requestAnimationFrame(update);

	boxX += 1;
	render();
}

function render() {
	// 全体をクリア
	// x座標、y座標、幅、高さ
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	// drawImage 画像、x座標、y座標
	ctx.drawImage(image, boxX, 0);
}
