'use strict';


// Coding Challenge 1

 const Car = function(make, speed){
  
  this.make = make;
  this.speed = speed;

}

Car.prototype.accelerate = function(){
 this.speed += 10;
 console.log(`${this.make} is going at ${this.speed}km/h`)
}

Car.prototype.brake = function(){
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed}km/h`)
}

const EV = function(make, speed, charge){
  Car.call(this,make, speed);
  this.charge = charge;
}

const tesla = new EV('Tesla', 120, 20);

// Link the prototypes

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function(chargeTo){
  this.charge = chargeTo;
}

EV.prototype.accelerate = function(){
  this.speed += 20;
  this.charge--;
  console.log(`${this.make} is going at ${this.speed}km/h with a charge of ${this.charge}`);
}

class Account{
  firstName = 'Ely'
  #movements = [];
}

const acc1 = new Account();

console.log(acc1.firstName)