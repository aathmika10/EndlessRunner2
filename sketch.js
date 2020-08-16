var geekyBoy, nerdyGirl;
var actionGirl, blueshirtBoy;
var candyGirl, pinkyGirl;
var redhoodieBoy, thiefBoy;
var danceGirl;
var candy, candyBunch, coin;
var zombie1;
var forestBG, cityBG;
var gameState= "start";
var startButton;

function preload(){
  actionGirl = loadAnimation("Characters/Action_Girl/AG1.png","Characters/Action_Girl/AG2.png","Characters/Action_Girl/AG3.png","Characters/Action_Girl/AG4.png","Characters/Action_Girl/AG5.png","Characters/Action_Girl/AG6.png");
  blueshirtBoy = loadAnimation("Characters/Blue_Shirt_Boy/BSB1.png","Characters/Blue_Shirt_Boy/BSB2.png","Characters/Blue_Shirt_Boy/BSB3.png","Characters/Blue_Shirt_Boy/BSB4.png","Characters/Blue_Shirt_Boy/BSB5.png","Characters/Blue_Shirt_Boy/BSB6.png");
  geekyBoy = loadAnimation("Characters/Geeky_Boy/GB1.png","Characters/Geeky_Boy/GB2.png","Characters/Geeky_Boy/GB3.png","Characters/Geeky_Boy/GB4.png","Characters/Geeky_Boy/GB5.png","Characters/Geeky_Boy/GB6.png");
  nerdyGirl = loadAnimation("Characters/Nerdy_Girl/NG1.png","Characters/Nerdy_Girl/NG2.png","Characters/Nerdy_Girl/NG3.png","Characters/Nerdy_Girl/NG4.png","Characters/Nerdy_Girl/NG5.png","Characters/Nerdy_Girl/NG6.png");
  pinkyGirl = loadAnimation("Characters/Pinky_Girl/PG1.png","Characters/Pinky_Girl/PG2.png","Characters/Pinky_Girl/PG3.png","Characters/Pinky_Girl/PG4.png","Characters/Pinky_Girl/PG5.png","Characters/Pinky_Girl/PG6.png");
  redhoodieBoy = loadAnimation("Characters/Red_Hoodie_Boy/RHB1.png","Characters/Red_Hoodie_Boy/RHB2.png","Characters/Red_Hoodie_Boy/RHB3.png","Characters/Red_Hoodie_Boy/RHB4.png","Characters/Red_Hoodie_Boy/RHB5.png","Characters/Red_Hoodie_Boy/RHB6.png");
  thiefBoy = loadAnimation("Characters/Thief_Boy/TB1.png","Characters/Thief_Boy/TB2.png","Characters/Thief_Boy/TB3.png","Characters/Thief_Boy/TB4.png","Characters/Thief_Boy/TB5.png","Characters/Thief_Boy/TB6.png");
  danceGirl = loadAnimation("Characters/Dance_Girl/DG1.png","Characters/Dance_Girl/DG2.png","Characters/Dance_Girl/DG3.png","Characters/Dance_Girl/DG4.png","Characters/Dance_Girl/DG5.png","Characters/Dance_Girl/DG6.png");
  candy = loadImage("Characters/Things/Candy.png");
  candyBunch = loadImage("Characters/Things/CandyBunch.png");
  coin = loadImage("Characters/Things/Coin.png");
  zombie1 = loadAnimation("Characters/Zombie1/Zombie1.png","Characters/Zombie1/Zombie2.png","Characters/Zombie1/Zombie3.png","Characters/Zombie1/Zombie4.png","Characters/Zombie1/Zombie5.png","Characters/Zombie1/Zombie6.png",)
  forestBG= loadImage("Characters/Back_Ground/forestBG.jpg");
  cityBG= loadImage("Characters/Back_Ground/CityBG.png")
}


function setup() {
  createCanvas(1000,500);
  startButton = createButton("START");
  startButton.hide()
// createSprite(400, 200, 50, 50);

}

function draw() {
  background("black");  

if (gameState==="start"){
  textSize(20);
  fill("Yellow")
  text("MIRACULOUS RUN",400,70);
  textSize(15);
  fill("white");
  text("There is a peaceful town. Recently, there was a new kind of disease which is caused by eating a kid of mushroom.  ",100, 200)
 text("When people eat the mushroom, they become zombies. There were a few cute kids studying in the nearby school.",100,220);
text("They are a team of 8 kids. They like adventures and like to get involved in them. They also have some super powers.", 100, 240)
text("They go to fight with they zombies. But, unfortunately the zombies started chasing them and the kids are in danger. ",100,260);
text("So, they run to save their lives.",100,280)
 startButton.show();
startButton.position(450,400);

startButton.mousePressed(start);

}
if (gameState==="play"){
  startButton.hide();
  text("CHOOSE THE PLACE WHERE YOU WANT TO PLAY",300,70)
  var forest= createSprite(100,200,20,30);
  forest.addImage(forestBG);
  forest.scale=0.3;
  var city = createSprite(400,200,20,30);
  city.addImage(cityBG);
  city.scale=0.2
}
  drawSprites();
}

function start(){
  gameState="play"
  console.log("buttonPressed")
}