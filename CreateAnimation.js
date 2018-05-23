var thing = document.getElementById("animation2");
var container = document.getElementById("container");
var mousecoords = document.getElementById("mousecoords");

container.addEventListener("mousemove", printMouseCoords);

function printMouseCoords(event) {
    var mouseX = event.clientX;
    var mouseY = event.clientY;
    mousecoords.textContent = mouseX + ", " + mouseY;
}

container.addEventListener("mousemove", moveThing);

function moveThing(event) {
    var xPosition = event.clientX - container.getBoundingClientRect().left - (thing.clientWidth / 2);
	var yPosition = event.clientY - container.getBoundingClientRect().top - (thing.clientHeight / 2);
	// in case of a wide border, the boarder-width needs to be considered in the formula above
	thing.style.left = xPosition + "px";
	thing.style.top = yPosition + "px";
}

var box1 = document.getElementById("animation1");
var xpos1 = 0;
var ypos1 = 0;
var xstep1 = 2;
var ystep1 = 1;

var box2 = document.getElementById("animation2");
var xpos2 = 0;
var ypos2 = 500;
var xstep2 = 3;
var ystep2 = 2;

var box3 = document.getElementById("animation3");
var xpos3 = 0;
var ypos3 = 200;
var xstep3 = 3;
var ystep3 = 2;
var id = setInterval(frame, 25);

function frame() {

    if (xpos1 > 350 || xpos1 < 0) {
        xstep1 = -xstep1;
    }


    if (xpos2 > 350 || xpos2 < 0) {
        xstep2 = -xstep2;
    }
    if (ypos2 > 600 || ypos2 < 0) {
        ystep2 = -ystep2;
    }

    if (xpos3 > 350 || xpos3 < 0) {
        xstep3 = -xstep3;
    }
    if (ypos3 > 350 || ypos3 < 0) {
        ystep3 = -ystep3;
    }

    xpos1 = xpos1 + xstep1;
    box1.style.left = xpos1 + 'px';


    xpos2 = xpos2 + xstep2;
    ypos2 = ypos2 + ystep2;
    box2.style.top = ypos2 + 'px';
    box2.style.left = xpos2 + 'px';

     xpos3 = xpos3 + xstep3;
    ypos3 = ypos3 + ystep3;
    box3.style.top = ypos3 + 'px';
    box3.style.left = xpos3 + 'px';
}

