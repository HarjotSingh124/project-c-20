var car,wall;
var speed,weight,speed1,weight1;
var deformation;
var car1,wall1;
var car2,wall2;
var speed2,speed2





function setup() {
  createCanvas(1300,600);

speed=60;
weight=2500;
speed1=50;
weight1=2000;
speed2=50;
weight2=1522;


car=createSprite(50,50,20,20);
car.velocityX=speed;
car.shapeColor="white";

wall=createSprite(1000,50,10,60);

car1=createSprite(50,250,20,20);
car1.velocityX=speed1;
car1.shapeColor="white";

wall1=createSprite(1000,250,10,60);

car2=createSprite(50,450,20,20);
car2.velocityX=speed1;
car2.shapeColor="white";

wall2=createSprite(1000,450,10,60);
}

function draw() {
  background("black");  

  if(wall.x-car.x<(car.width+wall.width)){
    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/22500;
    var deformation=0.5*weight*speed*speed/22509;
    if(deformation>180){
      car.shapeColor=("red");
    }
    if(deformation<180 && deformation>100){

      car.shapeColor=("yellow");
    }
    if(deformation<100){
      car.shapeColor=color("green");

    }

  }
  if(wall1.x-car1.x<(car1.width+wall1.width)){
    car1.velocityX=0;
    var deformation=0.5*weight1*speed1*speed1/22500;
    var deformation=0.5*weight1*speed1*speed1/22509;
    if(deformation>180){
      car1.shapeColor=("red");
    }
    if(deformation<180 && deformation>100){

      car1.shapeColor=("yellow");
    }
    if(deformation<100){
      car1.shapeColor=color("green");

    }

  }
  if(wall2.x-car2.x<(car2.width+wall2.width)){
    car2.velocityX=0;
    var deformation=0.5*weight2*speed2*speed2/22500;
    var deformation=0.5*weight2*speed2*speed2/22509;
    if(deformation>180){
      car2.shapeColor=("red");
    }
    if(deformation<180 && deformation>100){

      car2.shapeColor=("yellow");
    }
    if(deformation<100){
      car2.shapeColor=color("green");

    }

  }
  
  

  drawSprites();
}