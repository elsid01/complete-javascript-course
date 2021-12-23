bill = 275;
let tip = bill >= 50 && bill <= 300 ? (bill * 15) / 100 : (bill * 20) / 100;

console.log(
  `The bill is ${bill}, the tip is ${tip} , and the total is ${bill + tip}`
);
