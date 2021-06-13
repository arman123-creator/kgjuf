var playerImage,LaddoImage,WitchImage,ZombieImage,GameOverImage,GameWinningImage;
var player,gameOver,GameWinning;
var ground,FoodGroup,EnemyGroup;
var Enemy2,Enemy3;
var END =0;
var PLAY =1;
var score = 0;
var gameState = PLAY;
var InvisibleGround;
var backGroundImg;


function preload(){
  playerImage = loadImage("IMAGES/BHEEM.png");
  LaddoImage = loadImage("IMAGEs/LADDO.png");
  WitchImage = loadImage("IMAGES/WITCH.png");
 KIRMADAImage = loadImage("IMAGES/KIRMADA.png")
GameOverImage = loadImage("IMAGES/GameOver.jpg");
GameWinningImage = loadImage("IMAGES/GameWinning.jpg");
DAMYAANImage = loadImage("IMAGES/Damyaan.png");
 FoodGroup = new Group();
  EnemyGroup = new Group();
backGroundImg = loadImage("IMAGES/DESERT.jpg")

}

function setup() {
  createCanvas(displayWidth,displayHeight);
  player = createSprite(300, 440, 50, 50);
  player.addImage(playerImage);
player.scale =0.25

ground = createSprite(600,700,200000,10);
ground.shapeColor = "brown";
  ground.x=ground.width/2;
  ground.visible=true;

 gameOver = createSprite(700,300)
 gameOver.addImage(GameOverImage);
gameOver.scale= 0.8

 //InvisibleGround = createSprite(200, 190, 400, 10);
  //InvisibleGround.visible = false;

 

}

function draw() {
  background(backGroundImg);  

  if(gameState===PLAY){

    if(keyDown("UP_ARROW") && player.y>200) {
      player.velocityY = -9;
    }

   player.velocityY = player.velocityY + 0.2;
player.collide(ground);

    if(World.frameCount%110===0){
      laddo();
   }

   

if(World.frameCount%300===0){
  Devil2();
}



if(player.isTouching(FoodGroup)){
  score = score + 2
  player.scale += + 0.05;
  FoodGroup.destroyEach();
}

textSize(30)
fill("blue")
text("Score:-  " + score, 400,150)


   gameOver.visible = false;
  }

  //if(player.isTouching(EnemyGroup)){
    //player.velocityX =0;
    //player.visible = fasle;
    //Enemy3.velocityX =0;
 //Enemy3.visible = false;
 //Laddo.velocityX = 0;
  //  Laddo.visible = false;
   // FoodGroup.destroyEach();
   // EnemyGroup.destroyEach();
    //ground.visible = false;
   
   // textSize(25)
   // fill("black")
   // text("GAME OVER !!",500,680)
    
    //  }

    if(player.isTouching(EnemyGroup)){
      FoodGroup.setVelocityXEach(0);
  EnemyGroup.setVelocityXEach(0);
  textSize(35)
  fill("yellow")
  text("GAME OVER!! DAMYAAN CAUGHT BHEEM",350,690);
gameOver.visible = true;
FoodGroup.destroyEach();
//EnemyGroup.destroyEach();
Enemy3.visible = false;
player.visible = false;

    }

textSize(30)
  fill("red")
  text("{PRESS UP ARROW TO MAKE BHEEM JUMP}",700,150)
  

  textSize(30)
  fill("red")
  text("{1 laddo = 2 points+ 0.05 size increase} ",700,100)
    
     // EnemyGroup.add(Enemy3);
    
    

  drawSprites();
}

function laddo(){
  Laddo=createSprite(1200,100,10,10)
  Laddo.y = Math.round(random(170,230))
  Laddo.addImage(LaddoImage)
  Laddo.scale=0.3
  Laddo.velocityX=-3
  FoodGroup.add(Laddo)
}

//function Devil2(){
 // Enemy2 = createSprite(1200,405,10,10)
// Enemy2.addImage(KIRMADAImage)
 // Enemy2.velocityX=-4
 // Enemy2.scale=0.4
 // EnemyGroup.add(Enemy2);
//}

function Devil2(){
  Enemy3 = createSprite(1200,595,10,10)
  Enemy3.addImage(DAMYAANImage);
   Enemy3.velocityX=-4
  Enemy3.scale=0.5
  EnemyGroup.add(Enemy3);
}




