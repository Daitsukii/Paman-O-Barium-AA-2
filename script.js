// WHILE LOOP
var even = 2;
while (even <= 50) {
    document.getElementById("even").innerHTML = document.getElementById("even").innerHTML + " " + even;
    even = even + 2;
}

// DO-WHILE LOOP
var threes = 3;
do {
    document.getElementById("threes").innerHTML = document.getElementById("threes").innerHTML + " " + threes;
    threes = threes + 3;
} while (threes <= 60);

// FOR LOOP
for (var fives = 5; fives <= 50; fives = fives + 5) {
    document.getElementById("fives").innerHTML = document.getElementById("fives").innerHTML + " " + fives;
}