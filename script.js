const S = 83; // S keycode 
const A = 65; // A keycode
let start = false;
let timer = 0;
let clicked = false;
let miss = false;
let score = 0; 
let puppyX;
let puppyY;

function preload(){
  park = loadImage("park.png"); // park background image
  puppy = loadImage("puppy.png"); // puppy image
  bone = loadImage("dogbone.png"); // dog bone mouse cursor image
  confetti = loadImage("confetti.png"); // confetti image
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  image(park,width/2, height/2,width,height);
  textStyle(BOLD);
  textSize(17);
  fill(128,0,128); // text color 
  textAlign(CENTER, CENTER);
  text("Emma",40,460);
  text("Oh No! All the dogs escaped from their homes",245,305);
  text("and are running around the park!",245,320);
  text("Click them all to save them with the dog bone",245,336);
    fill(0,0,128);
  text("Save all 10 dogs to win the game",245,352);
    fill(128,0,0);
    text("Press S to begin",250,369);
	puppyX = random(width); // random dog placement 
	puppyY = random(height); // random dog placement 
}
function draw() {

	if(score==10){
     imageMode(CENTER);
    background(255,255,255);
    image(confetti,width/2, height/2,width,height);
		fill(255,255,255);// rectangle color
    textSize(17);
    rect(50,150,390,130);
    fill(0,0,0); // text color
		text("You Win! You saved all the dogs!",245,200);
		text("Press A to play again",245,225);

	}
	
	else if (start && miss) {
  	image(park,width/2, height/2,width,height);
  	image(bone,mouseX, mouseY, 100, 100);
    image(puppy,puppyX,puppyY,100,100);
		text(score.toString(), 50, 50); // score placement
    text("Emma",40,460);
		timer++;
		if (timer == 80) { 
			puppyX = random(width);
			puppyY = random(height);
			timer = 0;
		}
		if (clicked && miss) {
      background(255,0,0);
      fill(255,255,255);
      rect(50,150,390,130);
      fill(255,0,0);
      textSize(17);
      text("Oh No! You missed the dog and he ran away",245,200);
      text("Press A to try again",245,217);
			lost = true;
			start = false;
		}
	} else if (start && !miss) {
    textSize(17);
  	image(park,width/2, height/2,width,height);
  	image(bone,mouseX, mouseY, 100, 100);
    image(puppy,puppyX,puppyY,100,100);
    fill(255,255,255);
    rect(30,35,40,30);
    fill(0,0,0); // score color
		text(score.toString(), 50, 50);
    text("Emma",40,460);
		timer++;
		if (timer == 80) { // amount of time a dog is in one spot 
			puppyX = random(width);
			puppyY = random(height);
			timer = 0;
		}
		
	}
}
function mousePressed() {
	if (start) {
		clicked = true;
	}
	if (abs(mouseX - puppyX) < 50 && abs(mouseY - puppyY) < 50) {
		miss = false;
		score++; // increase points
	} else {
		miss = true;
	}
}

function keyPressed() {
	if(keyIsDown(S) || keyIsDown(A)){
    score = 0; // set score to 0
		start = true;
		miss = false;
	}
}
