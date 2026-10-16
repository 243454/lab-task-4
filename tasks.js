/* var name = "Ali";
var age = 21;
var city = "Lahore";
var student = true;

console.log("My name is " + name);
console.log("My age is " + age);
console.log("My city is " + city);
console.log("Student: " + student);

var bio = {
    name: "Ali",
    age: 21,
    address: {
        city: "Lahore",
        country: "Pakistan"
    },
    degreeProgram: {
        degree: "BS Computer Science",
        semester: 5
    }
};

console.log("Name: " + bio.name);
console.log("Age: " + bio.age);
console.log("City: " + bio.address.city);
console.log("Country: " + bio.address.country);
console.log("Degree: " + bio.degreeProgram.degree);
console.log("Semester: " + bio.degreeProgram.semester); */

/* let num = 11;
let next = num + 1;
let prime = false;

while (prime == false) {
    prime = true;

    for (let i = 2; i < next; i++) {
        if (next % i == 0) {
            prime = false;
            break;
        }
    }

    if (prime == false) {
        next++;
    }
}

console.log("Next prime number is " + next); */

//task 3

/* function phoneNumber(arr) {
    return "(" + arr[0] + arr[1] + arr[2] + ") " +
           arr[3] + arr[4] + arr[5] + "-" +
           arr[6] + arr[7] + arr[8] + arr[9];
}

let digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

console.log(phoneNumber(digits)); */

//task4

/*
function roundMe(...numbers) {
    if (numbers.length == 0) {
        return 0;
    }

    let result = numbers.map(Math.round);

    if (result.length == 1) {
        return result[0];
    }

    return result;
}

console.log(roundMe());
console.log(roundMe(4.7));
console.log(roundMe(4.7, 4.4)); */ 

//task5


/* function abs(...numbers) {
    let result = numbers.map(Math.abs);

    if (result.length == 0) return 0;
    if (result.length == 1) return result[0];
    return result;
}

function ceil(...numbers) {
    let result = numbers.map(Math.ceil);

    if (result.length == 0) return 0;
    if (result.length == 1) return result[0];
    return result;
}

function floor(...numbers) {
    let result = numbers.map(Math.floor);

    if (result.length == 0) return 0;
    if (result.length == 1) return result[0];
    return result;
}

console.log(abs(-5, -8, 3));
console.log(ceil(4.2, 5.7));
console.log(floor(4.8, 5.9)); */

//task6
let x = 3;
let y = 5;
let z = 10;
let sum = 0;

for (let i = 1; i < z; i++) {
    if (i % x == 0 || i % y == 0) {
        sum = sum + i;
    }
}

console.log("Sum is " + sum);