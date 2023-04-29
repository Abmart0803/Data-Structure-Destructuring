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
