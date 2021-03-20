/*
1. create an physics engine--done
2. add that physice engine to the physics world--done
3. update the engine in function draw-done
4. create an object/body(rectangle, circle,polygon) bodies
5. add that object to the physics world.

var -- data type which helps you to store the data(num, string, "5", "a" "word") var score =0; score = score +1;

const-- constant(const score = 0;)
FUNCTION COL(FIXEDRECT, MOVINGRECT) PARAMETERS/ARGUMENTS
namespacing-- giving small name to a bigger name

Notation
isSTat:true
key: value*/

const Engine= Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;


var myEng;
var myLand;
var sqBody;
var ball;
function setup() {

  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);

myEng =   Engine.create();
myLand = myEng.world;

var krish = {
  isStatic: true
}

sqBody = Bodies.rectangle(300,390,50,50,{isStatic:true});
World.add(myLand,sqBody);
console.log(sqBody)

ball= Bodies.circle(400,200,20,{restitution : 1});
World.add(myLand,ball)
}

function draw() {
  background("green");

  Engine.update(myEng);
  rectMode(CENTER);
  rect(sqBody.position.x,sqBody.position.y,800,10)  
  //drawSprites();
  ellipse(ball.position.x,ball.position.y,40,40)
}