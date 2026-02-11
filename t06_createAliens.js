/*******************************************************/
// P5.play: t06_createAliens
// Create aliens on mouse click
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
	cnv = new Canvas(windowWidth, windowHeight-100);
	world.gravity.y = 10;

	rec = new Sprite(width/2,height/2,50, 'd');
	rec.color = '#007bff';
	rec.rotationSpeed = 2;
	rec.vel.x= 10;
	rec.vel.y=5;
	rec.bounciness= 1.5;
	rec.friction= 0;
	rec.drag= 0;

	makeAliens()
	
	makeWalls()
}

function makeAliens(){
	for (count = 20; count < 100; count++) {

  alien = new Sprite(50,50,10,10, 'd');

  alien.vel.x = 3;

  alien.vel.y = 4;

  alien.bounciness = 1;

  alien.friction = 0;

}
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
	background('ccc')
}

/*******************************************************/
//  END OF APP
/*******************************************************/