'use strict';

class Person {

    #country = 'Ukraine';
    constructor(name, age, number) {
        this._name = name;
        this.age = age;
        this.number = number;
    }

    sayHello() {
        return `Hello, my name is ${this._name} and i live in ${this.#country}`;
    }

    showAge() {
        return `I am ${this.age} years old`;
    }


    get sayAge() {
        return this.showAge();
    }

    get name() {
        return this._name;
    }


}

class Employee extends Person {

    constructor(name, age, number, salary) {
        super(name, age, number);
        this.salary = salary;
    }

    showWhatDoIDo() {
        return `I am working as a Back-end developer, my phone number is ${this.number}`;
    }

    get whatDoIDo() {
        return this.showWhatDoIDo();
    }

    showMySallary() {
        return this.salary;
    }

    get mySallary() {
        return this.showMySallary();
    }

    sayHello() {
        return `Hello, my name is ${this._name} and my salary is ${this.salary}`;
    }


}

const emilia = new Person('Emilia', '25', '+380956341286');
//const person = new Person('Emilia', '25', '+380956341286');

console.log(emilia);
console.log(emilia.number);
console.log(emilia.sayHello());


const mark = new Person('Mark', '28', '+380956341282');

console.log(mark);

const kate = new Employee('Kate', '28', '+380991234123', '40000');

console.log(kate);
console.log(kate.sayHello());
console.log(kate.sayAge);



const randomArray = ['abababab', 'uhdsfds', 'ssjfisu', 'apple', 5, 'banana', 67];
const onlyNumbers = [];

const filtered = randomArray.filter(item => item.length > 5);

console.log(filtered);

randomArray.forEach(item => {
    if(typeof(item) === 'number') {
        onlyNumbers.push(item);
    }
});

console.log(onlyNumbers);

const numbers = [2, 5, 4, 8];
const sqrted = numbers.map(num => Math.pow(num, 2));


console.log(sqrted);


const persons = [{name: 'Emilia', age: 25}, {name: 'Mark', age: 28}, {name: 'Max', age: 19}, {name: 'Elisabeth', age: 20}, {name: 'Kory', age: 24}, {name: 'Nick', age: 28}];


console.log(persons.some(obj => obj.name === 'Emilia'));

const result = sqrted.reduce((sum, current) => sum + current, 2);

console.log(result);
