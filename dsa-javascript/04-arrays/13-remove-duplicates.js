// Original array containing some duplicate values
let arr = [10, 20, 30, 20, 40, 10, 50];

// Create an empty Set
// "seen" will store values that we have already found
let seen = new Set();

// Create an empty Set
// "duplicates" will store values that appear more than once
let duplicates = new Set();

// Loop through every value of the array
for (let num of arr) {

  // Check whether the current value already exists in "seen"
  // has() returns true or false
  if (seen.has(num)) {

    // Value already exists
    // So, this is a duplicate
    // add() adds the duplicate value to the duplicates Set
    duplicates.add(num);

  } else {

    // Value does not exist in "seen"
    // Add it to the seen Set
    seen.add(num);
  }
}

// Convert the duplicates Set into an Array
// Spread operator (...) takes all Set values
// Print the duplicate values
console.log([...duplicates]);



