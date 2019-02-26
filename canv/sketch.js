var n_bub = 25;
var colors = ['#181D3A','#204260','#FFB766','#FFA237','#EB3D00','#E1B6C7','#F0DAE3']



function setup() {
	createCanvas(windowWidth, windowHeight);
	alert("Apasati click, iar tinand apasat mutati mouse-ul cum doriti.\nPentru a va intoarce la siteul initial, va rugam sa apasati pe butonul de back al browserului!");
	init();

}

function draw() {
	// background(150,0,60, 255);
	background(255,255,255);
	drawBubbles();

}

function drawBubbles(){

	for(bubb of bubbles){
		for(let i = 0; i < bubbles.length-1; i++){
		
			let x1 = bubb.x;
			let y1 = bubb.y;
			let x2 = bubbles[i].x;
			let y2 = bubbles[i].y;

			if(dist(x1,y1,x2,y2) < 200){
				let ron = random(0,colors.length);
				stroke(0);
				line(x1,y1,x2,y2);
			}

		}	
		bubb.move();
		bubb.draw();
	}
}
function mouseDragged(){
	let r = random(1, 5);
	let sy= random(-1,1);
	let sx= random(-1,1);
	let rn = random(0, 4);
	
	bubbles.push(new Bubble(mouseX,mouseY,r,sx,sy, colors[0]));
	if(bubbles.length > 25){
		bubbles.shift();
	}
}


function init(){
	for(let i = 1; i <= n_bub; i++){
		let x = random(0, width);
		let y = random(0, height);
		let r = random(1, 5);
		let sy= random(-1,1);
		let sx= random(-1,1);
		bubbles.push(new Bubble(x,y,r,sx,sy, colors[0]));
	}
}


class Bubble{

	constructor(x, y, r, spX, spY, col){
		this.x = x;
		this.y = y;
		this.r = r;
		this.spX = spX;
		this.spY = spY;
		this.col = col;
	}

	draw(){
		fill(this.col);
		strokeWeight(1);
		ellipse(this.x, this.y, this.r*2, this.r*2);
	}

	move(){
		if(this.x > windowWidth - this.r || this.x < this.r){
			this.spX = -this.spX;
		}
		if(this.y < this.r || this.y > windowHeight - this.r){
			this.spY = -this.spY;
		}
		this.x = this.x +  this.spX;
		this.y = this.y +  this.spY;
	}

}

	var bubbles = [];
