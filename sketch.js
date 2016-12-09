var myImage;

function preload() {
    myImage = loadImage("images/Chrysanthemum.jpg");
}

function setup() {
  	createCanvas(windowWidth, windowHeight);
    myImage.filter("blur",10);
}


function draw() {
    
    imageMode(CENTER);
    image(myImage, width / 2, height / 2, 800, 600);
    translate(0,(height/17));  
    textFont("Bungee")
    fill(255)
    textSize(height/4)
    textAlign(CENTER)
    text(hour(),width/2,height/4)
    textSize(height/4)
    textAlign(CENTER)
    text(minute(),width/2,height/4*2)
    textSize(height/4)
    textAlign(CENTER)
    text(second(),width/2,height/4*3)
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

