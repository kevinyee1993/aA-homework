//******* Phase 1 ************//
//madlib
function madLib(verb, adj, noun){
  return console.log(`We shall ${verb.toUpperCase()} the ${adj.toUpperCase()} ${noun.toUpperCase()}`)
}


//substring
function isSubstring(searchString, subString){
  return searchString.includes(subString);
}


//******* Phase 2 ************//

//fizzBuzz
function fizzBuzz(array){
  const fizzArray = [];

  array.forEach(el => {
    if((el % 3 === 0) ^ (el % 5 === 0)){
      fizzArray.push(el);
    }
  });

  return fizzArray;
}

//isPrime
function isPrime(num){
  for(let i = 2; i < num; i++){
    if(num % i === 0){
      return false;
    }
  }

  return true;
}

//sumOfNPrimes
function sumOfNPrimes(n){
  let count = 0;
  let sum = 0;
  let tracker = 2;

  while(count < n){
    if(isPrime(tracker)){
      sum += tracker;
      count += 1;
    }

    tracker += 1;
  }

  return sum;
}
