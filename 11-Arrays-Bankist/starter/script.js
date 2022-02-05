'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');



const displayMovements = function(movements, sort = false){
  containerMovements.innerHTML ='';

  const movs = sort ? movements.slice().sort((a, b) => a -b) : movements;

  movs.forEach(function(mov, i){

    const type = mov > 0 ?'deposit' :'withdrawal';
    const html = `
    <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1}  ${type}</div>
          <div class="movements__value">${mov}€</div>
        </div>
        `;

        containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};



const calcDisplayBalence = function(acc){
  const balence = acc.movements.reduce((acc, mov) => acc + mov, 0); 
  acc.balence = balence;
  labelBalance.textContent = `${balence}€`;
}

const calcDisplaySummary = function(accounts){
  const incomes = accounts.movements
  .filter(movement => movement > 0)
  .reduce((acc, movement) => acc + movement, 0);

  labelSumIn.textContent = `${incomes}€`;

  const outcomes =Math.abs( accounts.movements
  .filter(mov => mov < 0).
  reduce((acc, mov) => acc + mov, 0));
  labelSumOut.textContent = `${outcomes}€`

  const interest = accounts.movements
  .filter(mov => mov > 0)
  .map(deposit => (deposit*accounts.interestRate/100))
  .filter(int => accounts.interestRate >= 1)
  .reduce((acc, int) => acc + int, 0);

  labelSumInterest.textContent = `${interest}€`;
}

const createUsernames = function(accs){
  accs.forEach(acc => {
    acc.username = acc.owner.toLowerCase().split(' ').map(name => name[0]).join('');
  });
  
}
createUsernames(accounts);

const updateUI = function(acc){
  // Display movements
  displayMovements(acc.movements);
  // Display balance
  calcDisplayBalence(acc);
  // Display summary
  calcDisplaySummary(acc);
       };

//Event handler
let currentAccount

btnLogin.addEventListener('click', function(e){
  // Prevent from submitting
  e.preventDefault();
  
  currentAccount = accounts.find(acc => 
    acc.username === inputLoginUsername.value );

    console.log(currentAccount);
    
   if( currentAccount?.pin === Number(inputLoginPin.value)){
     // Display UI and message
     labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
     //
     containerApp.style.opacity = 100;

     //Clear input field
     inputLoginUsername.value = inputLoginPin.value = '';
     inputLoginPin.blur();// to take focus of the input form
    
     //Update the user interface
    updateUI(currentAccount);
     
   } 
})


btnTransfer.addEventListener('click', function(e){
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);

  inputTransferAmount.value = inputTransferTo.value = '';

  if(amount > 0 &&  receiverAcc && currentAccount.balence >= amount && 
    receiverAcc?.username !== currentAccount.username){
      //Doing the Transfer
     currentAccount.movements.push(-amount);
     receiverAcc.movements.push(amount);

     //Update the user interface
    updateUI(currentAccount);
    }
});

btnLoan.addEventListener('click', function(e){
  e.preventDefault();
  
  const amount = Number(inputLoanAmount.value);

  if(amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)){
   // Add movement
    currentAccount.movements.push(amount);
    // Update UI 
    updateUI(currentAccount);
   
  }

  inputLoanAmount.value ='';
})

btnClose.addEventListener('click' , function(e){
  e.preventDefault();
  if( inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin ){
     const index = accounts.findIndex(acc => acc.username === currentAccount.username);
     //Delete Account
     accounts.splice(index, 1);

     //Hide account
     containerApp.style.opacity = 0;
     }

     inputCloseUsername.value = inputClosePin.value = '';
})

let sorted = false;
btnSort.addEventListener('click', function(e){
  e.preventDefault();

  displayMovements(currentAccount.movements, !sorted);

  sorted = !sorted;
     
})
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// const checkDogs = function(dogsJulia, dogsKate){
//  //1. Delete the first and the last 2 elements
//  const newDogsJulia = dogsJulia.slice(1, -2);

//  //.An array with both Julia's and kate's data
//  const bothArrays = [...newDogsJulia , ...dogsKate];

//  //.Log to the console
//  bothArrays.forEach((dog, i) => {
   
//   let dogAge = dog >= 3 ? `is an adult`: `is still a puppy`;
//   console.log(`Dog number ${ i + 1} ${dogAge}, and is ${dog} years old`);
   
//  });
// }

// const katesDogs = [4, 1, 15, 8, 3];
// const juliasDogs = [3, 5, 2, 12, 7];

// checkDogs(juliasDogs, katesDogs);


// const deposits = movements.filter(movement => movement > 0);
// console.log(deposits);

// const withdrawals = movements.filter( movement => movement < 0);
// console.log(withdrawals);

// const balence = movements.reduce((acc, cur, i, arr) => acc + cur);
// console.log(balence);

const calcAverageHumanAge = (dogArray) => dogArray
  .map(age => age <= 2 ? 2 * age : 16 + age * 4 )
  .filter( humanAge => humanAge >= 18).reduce((acc, cur, i, arr) => acc + cur/arr.length, 0);

 


console.log(calcAverageHumanAge([5,2,4,1,15,8,3]));