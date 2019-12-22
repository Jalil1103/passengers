// Say you've got a plane with 100 seats and 100 passengers. Each passenger is assigned a seat. The first passenger to board is drunk and chooses a random seat. Each subsequent passenger to board will choose his or her assigned seat if it is available, or a random seat if not. How would you find the probability that the final passenger to board will remain in his or her assigned seat?

// NOTE: This smells like a statistics problem, but really it isn't. I'm not looking for any fancy mathy solution, just from a practical, brute-force, iterating-through-each-passenger-boarding implementation, how often does the last person to board keep their assigned seat?

const shuffle = require("shuffle-array");

function drunkSeats() {
  let airplaneSeats = new Array(100);
  airplaneSeats.fill(false);
  let passengerSeats = [];
  for (let i = 0; i < 99; i++) {
    passengerSeats.push(i);
  }
  let drunkMan = Math.floor(Math.random() * 99);
  passengerSeats.unshift(drunkMan);

  passengerSeats = shuffle(passengerSeats);
  let lastPerson = passengerSeats[99];
  let validation = [...passengerSeats];
  validation = shuffle(validation);
  let otherPassengers = [...passengerSeats];
  otherPassengers.pop();

  for (let i = 0; i < otherPassengers.length; i++) {
    if (airplaneSeats[i] == false) {
      airplaneSeats[i] = true;
      validation.splice(i, 1);
    } else {
      let new_seat = validation[Math.floor(Math.random() * validation.length)];
      airplaneSeats[new_seat] = true;
      validation.splice(new_seat, 1);
    }
  }
  if (lastPerson == validation[0]) {
    return true;
  } else {
    return false;
  }
}

let count = 0;
let got = 0;
let nah = 0;

while (count < 100) {
  let result = drunkSeats();
  if (result == false) {
    nah += 1;
  } else {
    got += 1;
  }
  count++;
  console.log("got it ");
  console.log(got);
  console.log("lost");
  console.log(nah);
}
