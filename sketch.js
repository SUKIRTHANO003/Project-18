var monkey, monkey_running;
var banana, bananaImage;
var jungle, jungleImage;
var stone, stoneImage;
var invisibleGround;

function preload() {
  monkey_running = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");

  bananaImage = loadImage("banana.png");

  jungleImage = loadImage("jungle.jpg");

  stoneImage = loadImage("stone.png");
}

function setup() {
  createCanvas(400, 400);

  monkey = createSprite(100, 300);
  monkey.addAnimation("monkey", monkey_running);
  monkey.scale = 0.2;

  jungle = createSprite(200, 200);
  jungle.addImage("jungle", jungleImage);
  jungle.x = jungle.width / 2;
  jungle.velocityX = -5;

  banana = createSprite(150, 300);
  banana.addImage("banana", bananaImage);

  stone = createSprite(100, 300);
  stone.addImage("stone", stoneImage);
  stone.velocityX = jungle.velocityX;

  invisibleGround=createSprite(200,190,400,10);
  invisibleGround.visible = false;
}

function draw() {
  background(220);
  
  monkey.collide(invisibleGround);

  if (keyDown("space")) {
    monkey.velocityY = -5
  }

  drawSprites();
}