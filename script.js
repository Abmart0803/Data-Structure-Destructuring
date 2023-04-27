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

  // openingHours: {
  //   thu: {
  //     open: 12,
  //     close: 22,
  //   },
  //   fri: {
  //     open: 11,
  //     close: 23,
  //   },
  //   sat: {
  //     open: 0, // Open 24 hours
  //     close: 24,
  //   },
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