'use strict';


// const greet = ( greeting) => (name) => console.log(`${greeting} ${name}`);


// const greeterHey = greet('Hey');
// greeterHey('Jonas');

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings:[],

//   book(flightNum, name){
//     console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`)
//     this.bookings.push({flight:`${this.iataCode}${flightNum}`,name});
//   }
// }

// lufthansa.book(456, 'Ely Mbaye');
// lufthansa.book(678, 'Khadija Adula');
// console.log(lufthansa.bookings);

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings:[]
// };

// const book = lufthansa.book;

// book.call(lufthansa,23, 'Sarah Williams');

// //Apply method


const poll = {
  question: "What is your favourite programming language?", 
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section! 
  answers: new Array(4).fill(0),
  registerNewAnswer(){
  // Get answer
  const answer = Number(prompt(
    `${this.question}\n${this.options.join('\n')}\n(Write option number)`
  ));

  //Register answer
  typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;

  this.displayResults();
  this.displayResults('string');
  },

  displayResults(type = 'array'){
    if(type === 'array'){
      console.log(this.answers)
    }else if(type === 'string'){
      // Poll results are 13, 1, 4, 1
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  }
  };
document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));