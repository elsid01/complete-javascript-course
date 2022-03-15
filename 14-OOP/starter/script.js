'use strict';


// Coding Challenge 1

 const Car = function(make, speed){
  
  this.make = make;
  this.speed = speed;

}

Car.prototype.accelerate = function(){
 return this.speed += 10;
}

Car.prototype.brake = function(){
  return this.speed -= 5;
}

const journey = new Car("Dodge", 45);

console.log(journey.accelerate());
console.log(journey.brake());

console.log(journey.make);

console.log(journey.speed)

const Benz = new Car('Mersedez', 70);

console.log(Benz.accelerate());
console.log(Benz.brake());

console.log(Benz.make);

console.log(Benz.speed)