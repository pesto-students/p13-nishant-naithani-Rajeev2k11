function counter(){
  let count = 0
  return function innerCounter(){
    count++;
    return count;
  }
 
}
const firstCounter = counter()
const secondCounter = counter()

// Call the firstCounter function five times and store the returned values in an array.
const firstValues = [];
for (let i = 0; i < 5; i++) {
  firstValues.push(firstCounter());
}

// Call the secondCounter function three times and store the returned values in an array.
const secondValues = [];
for (let i = 0; i < 3; i++) {
  secondValues.push(secondCounter());
}

console.log("firstValues array:"+ firstValues)
console.log("secondValues array:"+ secondValues)