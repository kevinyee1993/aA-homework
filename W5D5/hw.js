// const readline = require('readline');
//
// const reader = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
//
// reader.question("Would you like some tea?", function (answer) {
//   console.log(`You replied ${answer}!`);
//
//   reader.question('Would you like some biscuits?', function (answer2){
//     console.log(`You replied ${answer2}!`);
//
//     let tea = "";
//     let biscuit = "";
//
//     if (answer === 'yes'){
//       tea = 'do';
//     } else {
//       tea = 'do not';
//     }
//
//     if (answer2 === 'yes'){
//       biscuit = 'do';
//     } else {
//       biscuit = 'do not';
//     }
//
//     console.log(`You ${tea} want some tea and you ${biscuit} want some biscuits`);
//
//     reader.close();
//   });
// });




function Cat () {
  this.name = 'Markov';
  this.age = 3;
}

function Dog () {
  this.name = 'Noodles';
  this.age = 4;
}

Dog.prototype.chase = function (cat) {
  console.log(`My name is ${this.name} and I'm chasing ${cat.name}! Woof!`)
};

const Markov = new Cat ();
const Noodles = new Dog ();



// window.setTimeout(function () {
//   alert('HAMMER TIME!');
// }, 5000);
//
// function hammertime(time) {
//   window.setTimeout(function () {
//     alert(`${time} is hammertime!`);
//   }, 5000);
// }
