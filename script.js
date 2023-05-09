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

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} 
    and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  // restaurant.orderDelivery({
  //   time: '22:30',
  //   address: 'Via del Sole, 21',
  //   mainIndex: 2,
  //   starterIndex: 2,
  // }),

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

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },

  // orderPizza: function (mainIngredient, ...otherIngredients) {
  //   console.log(mainIngredient);
  //   console.log(otherIngredients);
  // },
};

const arr = [3, 7, 9];
const a = arr[0];
const b = arr[1];
const c = arr[2];

console.log(a, b, c);

//to use data destructuring to get the value of the elements.
const [x, y, z] = arr;
console.log(x, y, z);

//original array remain same, we just destructuring or unpacking it.
console.log(arr);

//Let get first and second element from category array of resturant object.

const [ayo, ojo, ade, tola] = restaurant.categories;
console.log(ayo, ojo, ade, tola);

const [Timmy, , , Tobi] = restaurant.categories;
console.log(Timmy, Tobi);

const [menu1, menu2, menu3] = restaurant.starterMenu;
console.log(menu1, menu2, menu3);
const names = restaurant.name;
console.log(names);

let [main, , secondary] = restaurant.categories;
//switching variable manually.
// const temp = main;
// main = secondary;
// secondary = temp;

// console.log(main, secondary);

//switching using destructuring.
[main, secondary] = [secondary, main];
console.log(main, secondary);

//retreiving values from a function.
const orderItem = restaurant.order(2, 0);
console.log(orderItem);
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//Nested Destructuring
const nested = [[5, 6], 2, 4, [9, 3, 4]];
const [k, , , l] = nested;

console.log(k, l);

const [[m, i], , , [n, o, p]] = nested;

console.log(m, i, n, o, p);

//Default value.
const [j, q, r] = [8, 9];
console.log(j, q, r);

const [e = 1, f = 1, g = 1] = [8, 9];
console.log(e, f, g);

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//Mutating variables.
let ab = 77;
let bc = 88;
//to mutate or change the number we have to wrap it inside parenthesis like below
const obj = { ab: 34, bc: 45, cd: 56 };
({ ab, bc } = obj);
console.log(ab, bc);

//Nested Objects
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

//The Spread Operator(...)

const arr1 = [7, 8, 9];
//suppose we want to add some elements before those 7,8,9.
const badNewArr1 = [1, 2, 3, arr1[0], arr1[1], arr1[2]];
console.log(badNewArr1);

//we can use spread operator to make it simpler.
const newArr1 = [1, 2, 3, ...arr1];
console.log(newArr1);

//another example.
const tobi = [12, 14, 15, 16, 17, 18, 19, 12, 13, 14, 12, 56, 67, 87, 45, 65];
const newTobi = [1, 2, 3, 4, 5, 6, 7, 8, ...tobi];
console.log(newTobi);
console.log(...newTobi);

//we can also use spread operator to add element to an array like below.
const newMenu = [...restaurant.mainMenu, 'Fufu', 'Eba', 'Amala'];
console.log(newMenu);
console.log(...newMenu);

const newCategory = [...restaurant.categories, 'Nigerian', 'Arabian', 'Kenyan'];
console.log(newCategory);
console.log(...newCategory);

//using spread operator to copy an array.
const mainMenuCopy = [...restaurant.mainMenu];

console.log(mainMenuCopy);

//using spread operator to jon two or more array.
const joinArray = [...restaurant.categories, ...restaurant.mainMenu];
console.log(joinArray);

//Iterables are : Arrays, strings, maps, sets, NOT Objects.
const str = 'Martins';
const letters = [...str];
console.log(letters);
console.log(...letters);

//real world example
// const ingredients = [
//   prompt("Let's make pasta! Ingridient 1?"),
//   prompt('Ingridient 2"'),
//   prompt('Ingridient 3?'),
// ];
// console.log(ingredients);

//manually.
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

//using ES6 Syntax or spread operator/
// restaurant.orderPasta(...ingredients);

//using spread operator on Objects.
const newRestaurant = { foundedIn: 1980, ...restaurant, founder: 'Martins' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };

restaurantCopy.name = 'Abmart Restaurant';

console.log(restaurantCopy.name);
console.log(restaurant.name);

//Rest Pattern and Parameters.
//1. Destructuring

//SPREAD, because on RIGHT side of = sign.
const arr2 = [1, 2, 3, ...[4, 5]];

//REST, BECAUSE ON LEFT SIDE OF = sign.

const [a2, b2, ...others] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(a2, b2, others);
console.log(a2, b2, ...others);

const [pizza, , risotto, ...otherFoods] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, risotto, otherFoods);

const [pizza2, risotto2, ...otherFoods2] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza2, risotto2, otherFoods2);

//Objects.
const { saturday, ...weekDays } = restaurant.openingHours;

console.log(weekDays);

//2. Funtions
const addition = function (...num) {
  console.log(num);
};
addition(2, 3, 4, 5, 6);
addition(5, 7, 6, 8, 9, 21, 34, 45);
addition(2, 3, 4, 5, 6, 7, 6, 8, 9, 21);

//example 2. display only number not as object.
const added = function (...num) {
  console.log(...num);
};
added(2, 3, 4, 5, 6);
added(5, 7, 6, 8, 9, 21, 34, 45);
added(2, 3, 4, 5, 6, 7, 6, 8, 9, 21);

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
  // console.log(numbers); // will display the rest as an object
};

add(2, 3, 4, 5, 6);
add(5, 7, 6, 8, 9, 21, 34, 45);
add(2, 3, 4, 5, 6, 7, 6, 8, 9, 21);

// restaurant.orderPizza('mushrooms', 'tomatoes', 'onions', 'red chilling' 'tatase');
console.log('=========== OR============');
//logical Operation.
//Use any data type, return any data type, short-circuiting.
//If first value is truthy, the evaluation stop and return the truthy value.
console.log(3 || 'Martins');
console.log('' || 'Martins');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 25);

restaurant.numGuest = 23;
const guest1 = restaurant.numGuest ? restaurant.numGuest : 10;
console.log(guest1);

const guest2 = restaurant.numGuest || 10;
console.log(guest2);

console.log('=========== AND ============');
//once the first value is falsy, the evauation stop and return the falsy value, but if truthy,
//evaluation consinut until get the firt falsy value.
//if first valeu is truthy and there is only two values, it return the second value.
console.log(0 && 'Martins');
console.log(7 && 'Martins');
console.log('hello' && 27 && null && 'Martins');

//practical example.
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushroom', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinach');

// Logical Assignment Operator
const rest1 = {
  name: 'Capri',
  numGuest: 0,
};

const restt2 = {
  name: 'Ab Martins',
  owner: 'Abmart Investment',
};

//OR Assignment Operator.
// rest1.numGuest = rest1.numGuest || 10;
// restt2.numGuest = restt2.numGuest || 10;// This can be written as below code.

// rest1.numGuest ||= 10;
// restt2.numGuest ||= 10;

rest1.numGuest ??= 10; //this will correct the above code to result in 0 at console.
restt2.numGuest ??= 10;

//AnD aSSIGNMENT Operator
// rest1.owner = rest1.owner && '<ANONIMOUS>';
// restt2.owner = restt2.owner && '<ANONIMOUS>';

rest1.owner &&= '<ANONIMOUS>';
restt2.owner &&= '<ANONIMOUS>';

console.log(rest1);
console.log(restt2);

console.log(0 && 'Martins');
console.log(7 && 'Martins');
console.log('hello' && 27 && null && 'Martins');

//practical example.
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushroom', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinach');

console.log('======================================================');

const menuu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menuu) console.log(item);
//to see the index of  item.
for (const item of menuu.entries()) {
  console.log(item);
}

console.log(...menuu.entries());
console.log('===================================');

console.log([...menuu.entries()]);

console.log('===========================================');

for (const item of menuu.entries()) {
  console.log(`${item[0] + 1}) : ${item[1]}`);
}

console.log('============================================');
//we can also destructure the above  by replacing item with [i, el];
for (const [i, el] of menuu.entries()) {
  console.log(`${i + 1}) : ${el}`);
}

// Logical Assignment Operator
const rest2 = {
  name: 'Capri',
  numGuest: 0,
};

const restt3 = {
  name: 'Ab Martins',
  owner: 'Abmart Investment',
};

/*
Challenge 1 that cover all the data destructuring activities.
Data Structures, Modern Operators and Strings
Coding Challenge #1
We're building a football betting app (soccer for my American friends 😅)!
Suppose we get data from a web service about a certain game ('game' variable on
next page). In this challenge we're gonna work with that data.
Your tasks:
1. Create one player array for each team (variables 'players1' and
'players2')
2. The first player in any player array is the goalkeeper and the others are field
players. For Bayern Munich (team 1) create one variable ('gk') with the
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
field players
3. Create an array 'allPlayers' containing all players of both teams (22
players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
new array ('players1Final') containing all the original team1 players plus
'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called
'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player
names (not an array) and prints each of them to the console, along with the
number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which
team is more likely to win, without using an if/else statement or the ternary
operator.
Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
Then, call the function again with players from game.scored
GOOD LUCK 😀
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

//solution.
// 1.
const [players1, players2] = game.players;
console.log(players1, players2);

// 2.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

//3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//4.
const player1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(player1Final);

//5.
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

//6.
const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored.`);
};
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals('Davies', 'Muller', 'Kimmich');
printGoals('Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

//7.
team1 < team2 && console.log('Team1 is likely to win the game.');

console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++');

const menuu2 = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menuu2) console.log(item);
//to see the index of  item.
for (const item of menuu2.entries()) {
  console.log(item);
}

console.log(...menuu2.entries());
console.log('===================================');

console.log([...menuu2.entries()]);

console.log('===========================================');

for (const item of menuu2.entries()) {
  console.log(`${item[0] + 1}) : ${item[1]}`);
}
