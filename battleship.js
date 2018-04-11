var shiplocation1 = 3;
var shiplocation2 = 4;
var shiplocation3 = 5;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;


while (isSunk == false) {
  guess = prompt("Ready, aim, fire! (enter a number 0-6): ");
  if (typeof guess !== "number" || guess < 0 || guess > 6) {
    alert("Please enter a valid value.")  }
  else {
    guesses +=1;  }
  if (guess === shiplocation1 || guess === shiplocation2 || guess === shiplocation 3) {
    hits +=1 ;
    alert("Hit!");
    if (hits == 3) {
      isSunk = true;
      alert("You sank the battleship!");  } }
  else {
    alert("Miss!");  }
  }

var stats = "You took " + guesses + "guesses to sink the battleship." +
 "Your accuracy was " + (3/guesses);

 alert(stats);
