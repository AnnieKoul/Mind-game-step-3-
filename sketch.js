var bgImg








function setup() {
  createCanvas(windowWidth,windowHeight);
  startButton=createButton("START")
  startButton.position(width/2,height/2)
  startButton.class("sButton")
  }

function preload() {
  bgImg=loadImage("Images/Background.jpg")
  

}

function draw() {
  background("red");  
  drawSprites();
  handlestartButton()


}

function handlestartButton(){
  startButton.mousePressed(()=>{
startButton.hide();
screen= new Screen()
screen.display()
  })

  
}