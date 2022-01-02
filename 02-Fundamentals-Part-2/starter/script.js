"use strict";
/*
 Coding Challenge #1
 */
// let calcAverage = (score1, score2, score3) => {
//   return (score1 + score2 + score3) / 3;
// };

// const avgDolphins = calcAverage(44, 23, 71);
// const avgKoalas = calcAverage(65, 54, 49);

// console.log(avgKoalas);
// console.log(avgDolphins);
// let winner = (avgDolphins, avgKoalas) => {
//   let message;
//   if (avgKoalas > avgDolphins * 2) {
//     message = "Koalas wone the game";
//   } else if (avgDolphins > avgKoalas * 2) {
//     message = "Dolphins wone the game";
//   } else {
//     message = "No one wone the game";
//   }

//   return message;
// };
// console.log(winner(avgDolphins, avgKoalas));

/*
 Coding Challenge #2
 */
// const calcTip = (bill) => {
//   if (bill >= 50 && bill <= 300) {
//     return bill * 0.15;
//   } else {
//     return bill * 0.2;
//   }
// };

// const billArray = [125, 555, 44];
// const tipArray = [
//   calcTip(billArray[0]),
//   calcTip(billArray[1]),
//   calcTip(billArray[2]),
// ];

// const totalArray = [
//   billArray[0] + tipArray[0],
//   billArray[1] + tipArray[1],
//   billArray[2] + tipArray[2],
// ];

// console.log(totalArray);

/*
 Coding Challenge #3
 */

// const mark = {
//   firstName: "Mark",
//   lastName: "Miller",
//   mass: 78,
//   height: 1.68,

//   calcIBM: function () {
//     let ibm = this.mass / (this.height * this.height);
//     return ibm;
//   },
// };

// const john = {
//   firstName: "John",
//   lastName: "Smith",
//   mass: 92,
//   height: 1.95,

//   calcIBM: function () {
//     let ibm = this.mass / (this.height * this.height);
//     return ibm;
//   },
// };

// let biggerIBM =
//   mark.calcIBM() > john.calcIBM()
//     ? `Mark's BMI(${mark.calcIBM()}) is higher than John's(${john.calcIBM()})`
//     : `John's BMI(${john.calcIBM()}) is higher than Mark's`;
// console.log(biggerIBM);

/*
 Coding Challenge #3
 */
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const calcTip = (bill) => {
  if (bill >= 50 && bill <= 300) {
    return bill * 0.15;
  } else {
    return bill * 0.2;
  }
};
for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
}

console.log(tips);

const calcAverage = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  const average = sum / arr.length;
  return average;
};

const billsAverage = calcAverage(bills);
console.log(billsAverage);

const tipsAverage = calcAverage(tips);
console.log(tipsAverage);
