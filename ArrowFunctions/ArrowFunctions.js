const greet = (name) => { return "Hello " + name + "!"; }
console.log(greet("Eric"));

const greet2 = name => { "Hello " + name + "!"; }
console.log(greet2("Eric"));

const greet3 = name => "Hello " + name + "!";
console.log(greet3("Eric"));

let numbers = [3, 5, 8, 9, 2];

function multiplyByTwo(number){
    return number * 2;
}

let multipliedNumbers = numbers.map(multiplyByTwo);
console.log(multipliedNumbers);

const multiplyByTwo2 = number => number * 2;
let multipliedNumbers2 = numbers.map(multiplyByTwo2);
console.log(multipliedNumbers2);

const divideByTwo = number => number / 2;
