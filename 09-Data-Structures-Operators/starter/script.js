'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section




const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};


/*
Challenge 1
*/






const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// // 1. Create one player array for each team

// const[players1, players2] = game.players;


// // 2. The first player and the field players

// const[gk1,...fieldPlayer1] = players1;

// const[gk2,...fieldPlayer2] = players2;

// // 3. Create an array containing all players of both teams

// const [... allPlayers] = [...players1, ...players2];

// // 4. All the original Bayern Munich team and 3 substitudes
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// // 5. Create one variable for each odd
// const {team1, x: draw, team2} = {...game.odds};

// // 6. function printGoals

// const printGoals = function(...randomPlayers){
//   console.log(`${randomPlayers.length} were scored`);
// }


// // 7. 

// console.log(game.odds.team1 || game.odds.team2);

/*
Challenge 2
*/

// 1.
for(const [i, player] of game.scored.entries()){
  console.log(`Goal ${i + 1} : ${player} `);
}

// 2.
let ave = 0;
const values = Object.values(game.odds);
const name1 = Object.values(game.team1);
for(const oddNum of values ){
  ave += oddNum;
  
}
ave /= values.length;
console.log(ave);

// 3.



for(const [team, odd] of Object.entries(game.odds)){
 const word = team === 'x' ? 'draw': `victory ${game[team]}`;
 console.log(`Odd of ${word}: ${odd}`)

}