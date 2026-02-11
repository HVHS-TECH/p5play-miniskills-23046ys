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
	rec.vel.x= 10;
	rec.vel.y=5;
	rec.bounciness= 1.5;
	rec.friction= 0;
	rec.drag= 0;
	
	makeWalls()
}

function makeWalls(){
	wallLH  = new Sprite(5,500,20,1000, 'k');

	wallRH  = new Sprite(1915,500,20,1000, 'k');

	wallTop = new Sprite(950,5,2100,20, 'k');

	wallBot = new Sprite(950,950,2100,20, 'k');
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