/*******************************************************/
// P5.play: t22_keyboard
// Move sprite via keyboard
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
	

if (mouse.pressing()) {

rec.moveTowards(mouseX, mouseY, 0.01);

}

if (mouse.released()) {

	rec.vel.x= 0;
	rec.vel.y= 0;

}

if (kb.pressing('left')) {

    rec.vel.x= -1;
}

if(kb.released('left')){
	rec.vel.x= 0;
}

if (kb.pressing('right')) {

    rec.vel.x= 1;
}

if(kb.released('right')){
	rec.vel.x= 0;
}

}

/*******************************************************/
//  END OF APP
/*******************************************************/