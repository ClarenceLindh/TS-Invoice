// const inputs = document.querySelectorAll('input');
// console.log(inputs)

// inputs.forEach(input => {
//     console.log(input);
// });

// let character = 'pluke';
// let age = 6;
// let isDog = true;

// const circ = (diameter: number) => {
//     return diameter * Math.PI;
// };

// console.log(circ(7.5));

// // arrays
// let names = ['luigi', 'mario', 'yoshi'];
// names.push('toad');

// let numbers =[10, 20, 30, 40];
// numbers.push(50);

// console.log(names);

// // mixed array properties can change types
// let mixed = [2, 'bob', true];
// console.log(mixed);

// // objects
// // properties cannot change types
// // cannot add additional properties

// let ninja = {
//     name: 'mario',
//     belt: 'black',
//     age: 30,
// };

// console.log(ninja);

// // exact same properties

// ninja = {
//     name: 'yoshi',
//     belt: 'black',
//     age: 40
// }

// console.log(ninja);


// // explicit types
// let character: string;
// let age: number;
// let isLoggedIn: boolean;

// // age = 'luigi';
// age = 45;
// // isLoggedIn = 25
// isLoggedIn = true;

// // arrays
// let ninjas: string[] = [];
// // ninjas = [10,23];
// ninjas = ['yoshi', 'mario'];
// ninjas.push('banana');

// // union types
// let mixed: (string|number|boolean) [] = [];
// mixed.push('hello');
// mixed.push(20);
// mixed.push(true);

// let uid: string|number;
// uid = '123';
// uid = 123;

// // objects
// let ninjaOne: object;
// ninjaOne = {
//     name: 'yoshi',
//     age: 30
// };

// ninjaOne = [];

// let ninjaTwo: {
//     name: string,
//     age: number,
//     beltColor: string
// };

// ninjaTwo = {
//     name: 'mario',
//     age: 23,
//     beltColor: 'black'
// };

// let age: any = 25;
// age = true;
// console.log(age)
// age = 'hello';
// console.log(age);
// age = {
//     name: "luigi",
//     age: 23
// };
// console.log(age);

// let mixed: any[] = [];
// mixed.push(5);
// mixed.push('mario');
// mixed.push(false);
// console.log(mixed);

// let ninja: {
//     name: any,
//     age: any
// };
// ninja = {
//     name: 'yoshi',
//     age: 25
// };
// console.log(ninja);
// ninja = {
//     name: 25,
//     age: 'yoshi'
// };
// console.log(ninja);


// let greet: Function;

// greet = () => {
//     console.log('hello')
// };

// greet();

// const add = (a: number, b: number, c?: number | string): void => {
//     console.log(a+b);
//     console.log(c)
// };
// add(5,10);
// add(10,3,'oj');

// const add2 = (a: number, b: number, c: number | string = 10) => {
//     console.log(a+b);
//     console.log(c)
// };
// add2(5,10);
// add2(10,3,'oj');

// const minus = (a: number, b: number) => {
//     return a + b;
// };
// let result = minus(10, 7);
// console.log(result);

// const minus2 = (a: number, b: number): number => {
//     return a + b;
// };
// let result2 = minus(10, 7);
// console.log(result);

// const logDetails = (uid: string | number, item: string) => {
//     console.log(`${item} has a uid of ${uid}`);
// };

// const greet = (user: {name: string, uid: string | number}) => {
//     console.log(`${user.name} says hello`);
// };

// type StringOrNum = string | number;
// type objWithName = { name: string, uid: StringOrNum}

// const logDetails2 = (uid: StringOrNum, item: string) => {
//     console.log(`${item} has a uid of ${uid}`);
// };

// const greet2 = (user: objWithName) => {
//     console.log(`${user.name} says hello`);
// };

// let greet: Function;


// // example 1
// let greet: (a: string, b: string) => void;

// greet = (name: string, greeting: string) => {
//     console.log(`${name} says ${greeting}`);
// };

// greet('yoshi','hello');

// // example 2
// let calc: (a: number, b: number, c: string) => number;

// calc = (numOne: number, numTwo: number, action: string) => {
//     if(action === 'add'){
//         return numOne + numTwo;
//     } else {
//         return numOne - numTwo;
//     }
// };

// console.log(calc(2, 5, 'add')); // outputs 7
// console.log(calc(2, 5, '')); // outputs -3

// // example 3
// let logDetails: (obj: {name: string, age: number}) => void;

// type person = {name: string, age: number};

// logDetails = (ninja: person) => {
//     console.log(`${ninja.name} is ${ninja.age} years old`);
// };

// const anchor = document.querySelector('a')!;

// if (anchor) {
//     console.log(anchor?.href);    
// };

// console.log(anchor.href);

// console.log(anchor.href);

// // classes
// class Invoice {
//     readonly client: string;
//     private details: string;
//     public amount: number;

//     constructor(c: string, d:string, a: number){
//         this.client = c;
//         this.details = d;
//         this.amount = a;
//     }

//     format() {
//         return `${this.client} owes £${this.amount} for ${this.details}`;
//     };
// };

// // interfaces
// interface IsPerson {
//     name: string;
//     age: number;
//     speak(a: string): void;
//     spend(a: number): number;
// };

// const me: IsPerson = {
//     name: 'shaun',
//     age: 30,
//     speak(text: string): void{
//         console.log(text);
//     },
//     spend(amount: number): number {
//         console.log('I spend ', amount);
//         return amount;
//     }
// };

// const greetPerson = (person: IsPerson) => {
//     console.log('hello ', person.name);
// }

// greetPerson(me);

// console.log(me);


// // interfaces
// interface IsPerson {
//     name: string;
//     age: number;
//     speak(a: string): void;
//     spend(a: number): number;
//   };
  
//   const me: IsPerson = {
//     name: 'shaun',
//     age: 30,
//     speak(text: string): void{
//     console.log(text);
//     },
//     spend(amount: number): number {
//       console.log('I spend ', amount);
//       return amount;
//     }
//   };
  
//   const greetPerson = (person: IsPerson) => {
//     console.log('hello ', person.name);
//   }
  
//   greetPerson(me);
  
//   console.log(me);
  
  
//   import { Invoice } from './classes/Invoice.js';
  
//   const invOne = new Invoice('Mario', 'work on site', 250);
//   const invTwo = new Invoice('Luigi', 'eating banana', 450);
  
//   console.log(invOne);
//   console.log(invTwo);
  
//   let invoices: Invoice[] = [];
  
//   invoices.push(invOne);
//   invoices.push(invTwo);
  
//   invOne.amount = 5000;
  
//   console.log(invoices);
  
//   invoices.forEach(inv => {
//     console.log(inv.client, inv.amount, inv.format());
//   });
  
  
//   const form = document.querySelector('.new-item-form') as HTMLFormElement; // typecasting
  
//   // inputs
//   const type = document.querySelector('#type') as HTMLSelectElement;
//   const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
//   const details = document.querySelector('#details') as HTMLInputElement;
//   const amount = document.querySelector('#amount') as HTMLInputElement;
  
//   form.addEventListener('submit', (e: Event) => {
//     e.preventDefault();
  
//     console.log(
//       type.value,
//       tofrom.value,
//       details.value,
//       amount.valueAsNumber
//     );
//   });
  

// // GENERICS
// const addUID = <T extends {name: string} >(obj: T) => {
//     let uid = Math.floor(Math.random() * 100);
//     return {...obj, uid};
//   }
  
//   let docThree = addUID({name: 'Yoshi', age: 40});
  
//   console.log(docThree);

// interface Resource<T> {
//     uid: number;
//     resourceName: string;
//     data: T;
//   }
  
//   const docFour: Resource<object> = {
//     uid: 1,
//     resourceName: 'person',
//     data: { name: 'Bobby' }
//   }
  
//   console.log(docFour);
  
//   const docFive: Resource<string[]> = {
//     uid: 2,
//     resourceName: 'shoppingList',
//     data: ['bread', 'milk', 'chicken']
//   }
  
//   console.log(docFive)

// ENUMS

// enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON }

// interface Resource<T> {
//   uid: number;
//   resourceType: ResourceType;
//   data: T;
// }

// const docFour: Resource<object> = {
//   uid: 1,
//   resourceType: ResourceType.BOOK,
//   data: { title: 'Bobby' }
// }

// console.log(docFour);

// const docFive: Resource<object> = {
//   uid: 1,
//   resourceType: ResourceType.PERSON,
//   data: { name: 'Bobby' }
// }

// console.log(docFive);

// TUPLES

// let arr = ['ryu', 25, true];
// arr[0] = false;
// arr[1] = 'yoshi';
// arr = [30, false, 'yoshi']

// let tup: [string, number, boolean] = ['ryu', 25, true];
// tup[0] = 'ken';
// tup[1] = 30;
// tup[2] = false;

// console.log(tup);

// let student: [string, number];
// student = ['lee', 24123];
