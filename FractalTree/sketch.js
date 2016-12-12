var angle;
var slider;

function setup() {
	createCanvas(600,600);
	slider = createSlider(0, TWO_PI, PI/4, 0.01);
}

function draw() {
	background(51);
	stroke(255);
	translate(300, height);
	angle = slider.value();
	branch(100);
}

function branch(len) {
	line(0, 0, 0, -len);
	translate(0, -len);
	if(len > 4) {
		push();
		rotate(angle);
		branch(len*0.67);
		pop();
		push();
		rotate(-angle);
		branch(len*0.67);
		pop();
	}
	//line(0, 0, 0, -len*0.8);
}