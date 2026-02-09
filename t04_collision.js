/*******************************************************/
// P5.play: t04_collision
// Sprite falls due to gravity & collides with the floor
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
	cnv = new Canvas(windowWidth, windowHeight);
	world.gravity.y = 10;
	rec = new Sprite(50,10,100,50, 'd');
	rec.color = '#007bff';
	rec.rotationSpeed = 2;
	rec.vel.x= 2;
	rec.bounciness= 0.5;
	rec.friction= 0.1;
	rec.drag= 0.3;
	plat1 = new Sprite(50,200,200,10, 'k');
	plat1.color = 'ccc'
	plat2 = new Sprite(400,300,200,10, 'k');
	plat2.color = 'ccc'
	plat2.rotation= -3;
	plat3 = new Sprite(200,400,200,10, 'k');
	plat3.color = 'ccc'
	plat3.rotation= 7;
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