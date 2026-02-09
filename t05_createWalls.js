/*******************************************************/
// P5.play: t05_createWalls
// Create walls around the canvas
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
	cnv = new Canvas(windowWidth, windowHeight);
	world.gravity.y = 10;
	rec = new Sprite(width/2,height/2,50, 'd');
	rec.color = '#007bff';
	rec.rotationSpeed = 2;
	rec.vel.x= 2;
	rec.bounciness= 1;
	rec.friction= 0;
	rec.drag= 0;
	
}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background('ccc');
}

/*******************************************************/
//  END OF APP
/*******************************************************/