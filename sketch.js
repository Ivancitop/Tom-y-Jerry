var jerry
var tomy

var Ijerry
var Ijerry2
var Ijerry3
var Itomy
var Itomy3
var Itomy2
var Ijerry3
var Ijardin

function preload() {
  Ijardin = loadImage("images/garden.png");
    Ijerry = loadAnimation("images/mouse1.png");
    Ijerry2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    Ijerry3 = loadAnimation ("images/mouse4.png");

    Itomy = loadAnimation("images/cat1.png");
    Itomy2 = loadAnimation("images/cat2.png","images/cat3.png");
    Itomy3 = loadAnimation ("images/cat4.png");

    
}

function setup(){
    createCanvas(1000,800);
    tomy = createSprite(870,600);
    tomy.addAnimation("c1",Itomy);
    tomy.scale = 0.2;
    jerry = createSprite(200,600);
    jerry.addAnimation("m1",Ijerry);
    jerry.scale=0.15;
  
}

function draw() {
  background(Ijardin);
  
  if(tomy.x - jerry.x < (tomy.width - jerry.width)/2)
  { 
      tomy.velocityX=0;
      tomy.x = 300;
      tomy.addAnimation("c3",Itomy3);
      tomy.changeAnimation("c3");
      tomy.scale=0.2;
      
      jerry.addAnimation("m3",Ijerry3);
      jerry.changeAnimation("m3");
      jerry.scale=0.15;
      
  }  
  
  drawSprites();
}


function keyPressed(){

  if(keyCode === 32){
    tomy.velocityX = -5;
    
    tomy.addAnimation("c2",Itomy2);
    tomy.changeAnimation("c2");
    tomy.scale=0.12;

    jerry.addAnimation("m2",Ijerry2);
    jerry.changeAnimation("m2");
    jerry.scale=0.15;

  }



}
