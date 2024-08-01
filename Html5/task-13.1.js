// Object for Animal
const animal = {
    species: "Dog",
    name: "Buddy",
    age: 3,
    sound: "Bark",
    makeSound: function() {
        return this.sound;
    }
};


// Object for Car
const car = {
    make: "Toyota",
    model: "Camry",
    year: 2021,
    color: "White",
    start: function() {
        return "Car is starting...";
    }
};

console.log(animal);
console.log(car);


//Find the Duplicate in a String (Use Array) 
function findDuplicates(str) {
    const chars = str.split('');
    const seen = {};
    const duplicates = [];

    chars.forEach(char => {
        if (seen[char]) {
            if (!duplicates.includes(char)) {
                duplicates.push(char);
            }
        } else {
            seen[char] = true;
        }
    });

    return duplicates;
}

const duplicates = findDuplicates("programming");
console.log(duplicates);


//Reverse a String (Use Array Method)
function reverseString(str) {
    return str.split('').reverse().join('');
}

const reversed = reverseString("hello world");
console.log(reversed);


//Find the Highest and Lowest Value in an Array
const numbers = [34, 56, 12, 89, 5, 92];

const highest = Math.max(...numbers);
const lowest = Math.min(...numbers);

console.log(`Highest: ${highest}, Lowest: ${lowest}`);

//Sorting of an Array - Optional
const unsortedArray = [5, 2, 8, 3, 9, 1];
const sortedArray = [...unsortedArray].sort((a, b) => a - b);

console.log(sortedArray);

//Remove 4th (index) Element and Add 2 Elements There
const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

// Remove 4th element (index 3) and add "Fig" and "Grape"
fruits.splice(3, 1, "Fig", "Grape");

console.log(fruits);