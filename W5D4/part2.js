//Callbacks
function titleize(names, callback){

  let titles = names.map(name => `Mx. ${name} Jingleheimer Schmidt`);
  callback(titles);
}

titleize(["kevin1", "kevin2", "kevin5"], function(titles){
  titles.forEach(title => console.log(title));
})

//Constructors, Prototypes, and this
function Elephant(name, height, tricks){
  this.name = name;
  this.height = height;
  this.tricks = tricks;
}


Elephant.prototype.trumpet = function(){
  return console.log(`${this.name} the elephant goes \'hello!\'`);
}

Elephant.prototype.grow = function(){
  this.height += 12;
}

Elephant.prototype.addTrick = function(trick){
  this.tricks.push(trick);
}

Elephant.prototype.play = function(
  // random = Math.floor(Math.random() * this.tricks.length);

  console.log(`${this.name} the elephant is ${this.tricks[0]}`);
)
