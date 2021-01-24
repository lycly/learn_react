var myName = 'Max'
console.log(myName)

myName = 'Manu'
console.log(myName)

function printMyName1(name) {
  console.log(name)
}

printMyName1('Max')

const printMyName2 = (name, age) => {
  console.log(name, age)
}

printMyName2('Manu', 25)

// const multiply = (number) => {
//   return number * 2;
// }

const multiply = number => number * 2

console.log(multiply(4))

class Human {
  constructor () {
    this.gender = 'male'
  }

  printGender = () => {
    console.log(this.gender)
  }
}

// class Person extends Human {
//   constructor() {
//     super()
//     this.name = 'Fan'
//     this.gender = 'female'
//   }

//   printMyName = () => {
//     console.log(this.name)
//   }
// }

// class Person {
//   constructor() {
//     this.name = 'Liu'
//   }

//   printMyName3() {
//     console.log(this.name)
//   }
// }

// var person = new Person()
// person.printMyName()
// person.printGender()


const numbers = [1, 2, 3]
const newNumbers = [...numbers, 4]; // 建立新数组

console.log(newNumbers)

const person = {
  name: 'Max'
}

const newPerson = {
  ...person,
  age: 28
}

console.log(newPerson)

const filter = (...args) => {
  return args.filter(el => el === 1)
}

console.log(filter(1, 2, 3))

const numbers1 = [1, 2, 3];
[num1, , num3] = numbers1;
console.log(num1, num3);

const number2 = 1
const num2 = number2

console.log(num2)

const person1 = {
  name: 'Max'
};

const secondPerson = {
  ...person1
};

person1.name = 'Manu';

console.log(secondPerson);

const numebrs2 = [1, 2, 3];
const doubleNumArray = numebrs2.map( (num) => {
  return num * 2;
});

console.log(number2);
console.log(doubleNumArray);

// function callMe(name) {
//   console.log(name);
// }

// const callMe = function(name) {
//   console.log(name);
// }

// const callMe = (name) => {
//   console.log(name);
// }
//  上面三种写法等价

// const callMe = () => {
//   console.log('Max!');
// }
// 无参函数

// 与上面一个等价
const callMe = () => {
  console.log('Max!');
}
callMe();

const returnMe = name => name

const returnMe1 = name1 => {
  return name1;
}