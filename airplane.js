// Say you've got a plane with 100 seats and 100 passengers. Each passenger is assigned a seat. The first passenger to board is drunk and chooses a random seat. Each subsequent passenger to board will choose his or her assigned seat if it is available, or a random seat if not. How would you find the probability that the final passenger to board will remain in his or her assigned seat?

// NOTE: This smells like a statistics problem, but really it isn't. I'm not looking for any fancy mathy solution, just from a practical, brute-force, iterating-through-each-passenger-boarding implementation, how often does the last person to board keep their assigned seat?

let seating_chart = {};
let seats = shuffle([...generateArray(100)]);
let drunkPassenger = Math.floor(Math.random() * 100);
let passengers = [...generateArray(99)];

passengers.forEach(person => {
  seating_chart[person] = seats[person];
});
// Remove Drunk person Seat
seats = seats.filter(chair => chair !== drunkPassenger);

// Shuffling the contents of Array
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Generating an array of n lenght
function generateArray(n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(i);
    // console.log(arr);
  }
  return arr;
}

// Boarding Passengers
const boarding = Object.keys(seating_chart);
let newSeats = [];

for (let i = 0; i < seats.length; i++) {
  boarding.forEach(person => {
    if (person == seats[i]) {
      seats.splice(i, 1);
      newSeats.push(seats[i]);
    } else if (person != seats[i]) {
      let j = seats.length;
      console.log(j);
      let n = Math.floor(Math.random() * j);
      seats.splice(i, 1);
      newSeats.push(seats[i]);
    }
  });
}

// console.log(newSeats);
// // let list2 = [];
// // for (let i = 0; i < 100; i++) {
// //   if (!seats.contains(i)) {
// //     list2.push(i);
// //   }
// // }
// // console.log(list2);
