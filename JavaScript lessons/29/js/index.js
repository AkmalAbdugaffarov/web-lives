// shallow copy - sayoz nusxalash;
// deep copy - chuqur nusxalash;
/*************************SHALLOW COPY********************************/
/***********primitive*************/
let a = 2;
let b = a;
console.log('a:', a)
console.log("b:", b)
b+=5;
console.log("b:", b)
/**************************reference**********************/
let person = {
	name:'Axror',
	age: 24,
};
// let newPerson = person;
// console.log(person)
// console.log(newPerson)
// newPerson.name = 'Akmal';
// newPerson.age = 22;
// console.log(person)
// console.log(newPerson)
let newPerson = {...person};// o'zgaruvchi rest operator qiymat spreat operatori
newPerson.name = 'Akmal';
newPerson.age = 22;
console.log('Axror:', person)
console.log('Akmal:', newPerson)
/************************DEEP COPY********************************/
