// Function to generate random integer between min (inclusive) and max (inclusive)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
// Example: Generate a random integer between 1 and 10
console.log(getRandomInt(1, 10));
  