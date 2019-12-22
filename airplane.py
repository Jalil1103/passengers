# // Say you've got a plane with 100 seats and 100 passengers. Each passenger is assigned a seat. The first passenger to board is drunk and chooses a random seat. Each subsequent passenger to board will choose his or her assigned seat if it is available, or a random seat if not. How would you find the probability that the final passenger to board will remain in his or her assigned seat?

# // NOTE: This smells like a statistics problem, but really it isn't. I'm not looking for any fancy mathy solution, just from a practical, brute-force, iterating-through-each-passenger-boarding implementation, how often does the last person to board keep their assigned seat?
import random


def passengerIteration():
    airPlaneSeats = [False] * 100  # Everything is false
    passengerSeats = list(range(0, 99))  # list of 99 elements 0-98
    drunkMan = random.randint(0, 99)
    passengerSeats.insert(0, drunkMan)
    random.shuffle(passengerSeats)
    validation = passengerSeats.copy()
    random.shuffle(validation)
    for passenger in passengerSeats[0:99]:

        if (airPlaneSeats[passenger] == False):

            airPlaneSeats[passenger] = True
            validation.remove(passenger)
        else:
            new_seat = random.choice(validation)
            airPlaneSeats[new_seat] = True
            validation.remove(new_seat)
    lastPassenger = passengerSeats[99]
    if (lastPassenger == validation[0]):
        return True
    else:
        return False


counter = 0
gotSeat = 0
lostSeat = 0
while (counter < 100):
    result = passengerIteration()
    if (result == False):
        lostSeat += 1
    else:
        gotSeat += 1
    counter += 1


print("Got seat: ", gotSeat)
print("Didn't get seat: ", lostSeat)
