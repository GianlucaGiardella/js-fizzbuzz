const grid = document.querySelector(".grid");

// 1 to 100 with Fizz (multiples of 3), Buzz (multiples of 5) & FizzBuzz (multiples of 3 & 5)
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("fizzbuzz");
    } else if (i % 3 == 0) {
        console.log("fizz");
    } else if (i % 5 == 0) {
        console.log("buzz");
    } else {
        console.log(i);
    }
}

// cells 1 to 100 w FizzBuzz, Fizz & Buzz
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        grid.innerHTML += `<div class="cell fizzbuzz">FizzBuzz<div>`
    } else if (i % 3 == 0) {
        grid.innerHTML += `<div class="cell fizz">Fizz<div>`
    } else if (i % 5 == 0) {
        grid.innerHTML += `<div class="cell buzz">Buzz<div>`
    } else {
        grid.innerHTML += `<div class="cell">${i}<div>`
    }
}