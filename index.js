/**  Question 1
What are the differences between mutating array methods and non - mutation array methods in JavaScript.List 5 array methods that fall under each of them.
Mutating array methods are methods that modify the array they are called on. When a mutating method is applied to an array, it changes the array.
Examples of mutating array methods:
1. push()
2. pop()
3. shift()
4. unshift()
5. splice()
Non-mutating array methods are methods that do not modify the array they are called upon, instead they create a new array. When this methods are applied to the array, the original array will remain unchanged.
Examples of non-mutating array methods:
1. map()
2. filter()
3. reduce()
4. slice()
5. concat()
*/


/**
 * Question 2
 * Here is an array of languages: [‘C#’, ‘JavaScript’, ‘Ruby’, ‘PHP’, ‘Python’]. Perform this operation on them
1. Add ‘Kotlin’ to the end of the array
2. Add ‘Java’ after ‘Ruby’
3. Remove the first item in the array
4. Add ’Scala’ and ‘Swift’ to the beginning of the array
5. Replace ‘PHP’ with ‘Go’ and ‘Rust’
 */
let languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python'];

// Adding 'Kotlin' to the end of the array
languages.push("Kotlin");
console.log(languages);

//Adding "Java" after 'Ruby'
languages.splice(3, 0, "Java");
console.log(languages);

// Remove the first item in the array
languages.shift();
console.log(languages);

//Add 'Scala' and 'Swift' to the beginning of the array
languages.unshift("Scala", "Swift");
console.log(languages);

//Replace 'PHP' with 'Go' and 'Rust'
languages.splice(5, 1, "Go", "Rust");
console.log(languages);


/**
 * Question 3
 * What will be the value of fruit after calling the function changeFruit?
let fruit = ['apple', 'mango', 'banana'];
function changeFruit( fruit ) {
    fruit[2] = "orange";
    return fruit;
}
the new value of fruit after the function is called is : ['apple', 'mango', 'orange']
 */

let fruit = ['apple', 'mango', 'banana'];
function changeFruit(fruit) {
    fruit[2] = "orange";
    return fruit;
}
changeFruit(fruit);

//the new value of fruit after the function is called is : ['apple', 'mango', 'orange']
//the function changes the element at index 2 to orange.


/**
 * Question 4
 * Write a function that accepts an array of numbers as an argument. Return the maximum value in the array.
e.g.,max([4, 5, 10, -2])
 */

function max(arrValues) {
    let maximum = -Infinity;
    for (numbers of arrValues) {
        if (numbers > maximum) {
            maximum = numbers;
        };
    };
    return maximum;
};
max([4, 5, 10, -2]);


/**
 * Question 5
 * Write a function called valTimesIndex which accepts an array of numbers and returns a new array with each value multiplied by the index it is at in the array:
 */

function valTimesIndex(arrNumbers) {
    let newArrNum = [];
    for (i in arrNumbers) {
        newArrNum.push(arrNumbers[i] * i);
    };
    return newArrNum;
};

valTimesIndex([1, 2, 3]);
valTimesIndex([5, 10, 15]);