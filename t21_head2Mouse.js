/*******************************************************/
// P5.play: t21_head2Mouse
// Move sprite towards the mouse' position
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
	cnv = new Canvas(windowWidth, windowHeight);
	rec = new Sprite(50,100,100,50, 'd');
	rec.color = '#007bff';
	rec.rotationSpeed = 2;

}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background('ccc'); 
	rec.moveTowards(mouseX, mouseY, 1);

if (mouse.presses()) {

rec.moveTo(50, 50, 1);

}
}

/*******************************************************/
//  END OF APP
/*******************************************************/