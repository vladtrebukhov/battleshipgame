var location1 = Math.floor(Math.random() * 6);
var location2 = location1 + 1;
var location3 = location2 + 1;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;
const result = document.getElementById('stats')

while (isSunk === false) {
guess = Number((prompt("Ready, aim, fire! (enter a number from 0-6):"))); //guess = typeof string
if (guess < 0 || guess > 6 || isNaN(guess)) {
  alert("Please enter a valid value!"); }
  else {
    guesses += 1;
    if (guess == location1 || guess == location2 || guess == location3) {
      alert("HIT!");
      hits += 1; }
    else {
      alert("MISS") }

      if (hits == 3) {
        isSunk = true;
          alert("You sank my battleship!"); }
        }
}

var stats = "You took " + guesses + " guesses to sink the battleship, " +  "which means your shooting accuracy was " + ((3/guesses)*100)/100;

result.innerHTML = stats;
