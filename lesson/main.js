var SCREEN_WIDTH_A = 400;
var SCREEN_WIDTH_B = 400;
var SCREEN_WIDTH_C = 800;
var SCREEN_HEIGHT_A = 300;
var SCREEN_HEIGHT_B = 300;
var SCREEN_HEIGHT_C = 300;

window.addEventListener('load', init);

var canvas_a = null;
var canvas_b = null;
var canvas_c = null;
var ctx_a = null;
var ctx_b = null;
var ctx_c = null;
var image = null;
var score_html = null;

var boxX = 0;
var level = 1;
var score = 0;

var flag_a = 0;
var flag_b = 0;
var level_speed_map = { 1 : 100, 2 : 100, 3 : 100};
var level_clear_speed_map = { 1 : 10, 2 : 50, 3 : 100};

function loadImage(onComplete) {
	image = new Image();
	image.src = 'http://www.s-mikanbox.com/wp-content/uploads/2010/07/d62c493824444823f81c10a2550de1d91-300x273.jpg';
	image.onload = function () {
		onComplete();
	};
}

function init() {

	canvas_a = document.getElementById('maincanvas_a');
	canvas_b = document.getElementById('maincanvas_b');
	canvas_c = document.getElementById('maincanvas_c');
	score_html = document.getElementById('score');

	ctx_a = canvas_a.getContext('2d');
	ctx_b = canvas_b.getContext('2d');
	ctx_c = canvas_c.getContext('2d');

	canvas_a.width = SCREEN_WIDTH_A;
	canvas_b.width = SCREEN_WIDTH_B;
	canvas_c.width = SCREEN_WIDTH_C;
	canvas_a.height = SCREEN_HEIGHT_A;
	canvas_b.height = SCREEN_HEIGHT_B;
	canvas_c.height = SCREEN_HEIGHT_C;

	canvas_a.addEventListener('click', onClick_a, false);
	canvas_b.addEventListener('click', onClick_b, false);

	
	loadImage(function() {

		render();
		update();
	});
}

function update() {
	// 60フレームで更新処理
	requestAnimationFrame(update);
	updateRender();

}

function render() {
	// 全体をクリア
	// x座標、y座標、幅、高さ
	ctx_c.clearRect(0, 0, canvas_c.width, canvas_c.height);

	// drawImage 画像、x座標、y座標
	ctx_c.drawImage(image, 0, 0);
}

function updateRender() {
	// 全体をクリア
	// x座標、y座標、幅、高さ
	if (flag_a === 0){
		if (Math.floor( Math.random() * 6000 ) < level_speed_map[level] ) {
			ctx_a.clearRect(0, 0, canvas_a.width, canvas_a.height);

			// drawImage 画像、x座標、y座標
			ctx_a.drawImage(image, 0, 0);
			flag_a = 1;
		} 
	} else if (flag_a === 1) {
		if (Math.floor( Math.random() * 6000 ) < level_clear_speed_map[level] ) {
			ctx_a.clearRect(0, 0, canvas_a.width, canvas_a.height);
			flag_a = 0;
			minusScore();
		}
	}
	
	if (flag_b === 0){
		if (Math.floor( Math.random() * 6000 ) < level_speed_map[level] ) {
			ctx_b.clearRect(0, 0, canvas_b.width, canvas_b.height);

			// drawImage 画像、x座標、y座標
			ctx_b.drawImage(image, 0, 0);
			flag_b = 1;
		} 
	} else if (flag_b === 1) {
		if (Math.floor( Math.random() * 6000 ) < level_clear_speed_map[level] ) {
			ctx_b.clearRect(0, 0, canvas_b.width, canvas_b.height);
			flag_b = 0;
			minusScore();
		}
	}
}


function onClick_a(e) {
	ctx_a.clearRect(0, 0, canvas_a.width, canvas_a.height);
	if (flag_a === 1){ 
		flag_a = 0;
		addScore();
	}
}
function onClick_b(e) {
	ctx_b.clearRect(0, 0, canvas_b.width, canvas_b.height);
	if (flag_b === 1){ 
		flag_b = 0;
		addScore();
	}
}

function addScore() {

	score += 10;
	score_html.innerHTML="score:" + score + " " + "level:" + level;
	if (score >= 0 && score < 100) {
		level = 1;
	}
	if (score >= 100 && score < 1000) {
		level = 2;
	}
	if (score >= 1000) {
		level = 3;
	}
}
function minusScore() {

	score -= 10;
	score_html.innerHTML="score:" + score + " " + "level:" + level;
	if (score >= 0 && score < 100) {
		level = 1;
	}
	if (score >= 100 && score < 1000) {
		level = 2;
	}
	if (score >= 1000) {
		level = 3;
	}
}
