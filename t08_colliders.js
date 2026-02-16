/*******************************************************/
// P5.play: t08_colliders
// Work with colliders
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
	cnv = new Canvas(windowWidth, windowHeight-100);
	world.gravity.y = 10;

	const VELARRAY = [-1,1]

	randNum= random(2, 8) * random(VELARRAY)
	
	alienGroup = new Group();

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

	alienGroup.collides(rec, func2Call);

}

function makeAliens(){
	for (count = 0; count < 100; count++) {
	
	

  alien = new Sprite(random(50,2000),random(50,900),10,10, 'd');

  alien.vel.x = randNum;

  alien.vel.y = randNum;

  alien.bounciness = 1;

  alien.friction = 0;

  alienGroup.add(alien);

}
}

function makeWalls(){
	wallLH  = new Sprite(5,500,20,1000, 'k');

	wallRH  = new Sprite(1915,500,20,1000, 'k');

	wallTop = new Sprite(950,5,2100,20, 'k');

	wallBot = new Sprite(950,950,2100,20, 'k');
}

function func2Call(_ssss, _rec) {

_ssss.remove();

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