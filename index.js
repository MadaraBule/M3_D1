/*

1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/
function sum(a, b) {
    if (a === b) {
        return (a + b) * 3;
    } else {
        return a + b;
    }
};
/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/
function smm(a, b) {
    if (((a === 50) || (b === 50)) || a + b === 50) {
        return true
    } else {
        return false
    }
};
/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
need slice here*/
let coolString = "this is the string that sits in this line";
function deleteThing(e, r) {
    return e.slice(0, r) + e.slice(r + 1);
}
console.log(deleteThing(coolString, 13));
/*
4)
 Create a function to find the largest of three given integers.
*/
console.log(Math.max(16, 21, 13));

function theBiggestOne(g, h, j) {
    return Math.max(g, h, j);
}
console.log(theBiggestOne(16, 21, 13));
/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
do they both go in the same range? does each go in different? i dunno what to write ._.
*/
function checkThenumbers(z, x) {
    if ((z >= 40 && z <= 60) && (x >= 40 && x <= 60)) {
        return true
    } else if ((z >= 70 && z <= 100) && (x >= 70 && x <= 100)) {
        return true
    } else {
        return false
    }
};
console.log(checkThenumbers(50, 55));
/*
6) 

Create a function to create a new string of specified copies (positive number) of a given string.
U Whot now?
*/
function createCopies(j, k) {
    let createCopies = "";
    for (let i = 0; i < k; i++) {
        createCopies += j;
    }
    return createCopies;
}
console.log(createCopies(coolString, 10));
/*

7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
theres a function for that....
*/
function checkStart(q) {
    if (q.startsWith("Los") || q.startsWith("New")) {
        return q;
    } else {
        return "blank";
    }
}
console.log(checkStart("Cat"));
console.log(checkStart("Lost"));
/*
8)
Create a function to calculate the sum of three elements of a given array of integers(just say number) of length 3.
(make 3 arrays each has 3 numbers get their sum.)
*/
let numbersCatoCry = [11, 22, 33];

function calculateThing2(a) {
    return a[0] + a[1] + a[2];
}
console.log(calculateThing2(numbersCatoCry));
/*

9)
Create a function to test whether an array of integers(numbers) of length 2 contains 1 or a 3. 
*/
let gg = [1, 2];
function testArray(x) {
    if (x[0] === 1 || x[1] === 3) {
        return true
    } else if (x[0] === 3 || x[1] === 1) {
        return true
    } else {
        return false
    }
}
console.log(testArray(gg));
/*

10)

Create a function to test whether an array of integers of length 2 does not contain 1 or a 3 */
function testArray2(x) {
    if (x[0] === 1 || x[1] === 3) {
        return "contains 1 or 3";
    } else if (x[0] === 3 || x[1] === 1) {
        return "contains 1 or 3";
    } else {
        return "doesnt contain 1 or 3";
    }
}
console.log(testArray2(gg));
// 11)

// Create a function to find the longest string from a given array of strings.
let stringUno = "the first string here";
let stringDuos = "the second string right here";
let stringTres = "the third string thats not actually here";
function theLongestStringHere(a, b, c) {
    console.log(Math.max(a.length, b.length, c.length));
}
theLongestStringHere(stringUno, stringDuos, stringTres);
function theLongestStringHere2(a, b, c) {
    if (a.length > b.length && a.length > c.length) {
        return a;
    } else if (b.length > a.length && b.length > c.length) {
        return b;
    } else {
        return c;
    }
}
console.log(`The longest string is ${theLongestStringHere2(stringUno, stringDuos, stringTres)}`);
// 12)

// Create a function to find the types of a given angle.
//sorry i dont get it

// Types of angles:
//     Acute angle: An angle between 0 and 90 degrees.
//     Right angle: An 90 degree angle.
//     btuse angle: An angle between 90 and 180 degrees.
//     Straight angle: A 180 degree angle.

// 13)
// Create a function to find the index of the greatest element of a given array of integers
let lol = [3, 6, 9];
function findPosition(o) {
    //the three dots are the spread syntax, i guess sometims allows going through an array without loop.
    let biggest = Math.max(...o);
    return o.indexOf(biggest);
}
console.log(findPosition(lol));
// 14)
// Create a function to get the largest even number from an array of integers.

//where is 15????

// 16)
// Create a function to check from two given integers, whether one is positive and another one is negative.

// 17)
// Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case.

// 18)
// Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.

// 19)
// Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:

// If the number has 3 as a factor, output 'Diego'.
// If the number has 5 as a factor, output 'Riccardo'.
// If the number has 7 as a factor, output 'Stefano'.
// If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
// Examples
// 28's factors are 1, 2, 4, 7, 14, 28.
// this would be a simple "Stefano".
// 30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
// this would be a "DiegoRiccardo".
// 34 has four factors: 1, 2, 17, and 34.
// this would be "34".

// 20)
// Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC