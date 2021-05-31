

function setup() {
  createCanvas(displayWidth,displayHeight);
  
  form = new Form();

}

function preload (){

  
}

function draw() {
  background(255,255,255);  
  drawSprites();

 form.display();

}

