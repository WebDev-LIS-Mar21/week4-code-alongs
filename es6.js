//ES6 features -> Ecmascript 2015
//Object desctructuring
let person = {
    name: 'Ironhacker',
    age: 25,
    favoriteMusic: 'Metal'
}

const { name, age, favoriteMusic } = person;
console.log(name);
console.log(age);
console.log(favoriteMusic);

//1. Descructure the following object and console log firstname and address
const data = {
    firstName: 'miguel',
    address: 'av de cima'
}

const { firstName, address } = data;

console.log(firstName);
console.log(address);

//Arrays destructuring
const campuses = ['madrid', 'barcelona', 'miami'];
console.log(campuses[1]);

const [firstCampus, secondCampus, bananas] = campuses;
console.log(secondCampus);
console.log(bananas);
const [,,thirdCampus] = campuses;
console.log(thirdCampus);

const students = ['Artur', 'Dhiren', 'Pedro', 'Dalia'];
//1. Use Array descructuring to get the second item of the array
const [,secondStudent] = students;
console.log(secondStudent);

//Spread operator
const reptiles = ['snake', 'lizard', 'alligator'];
const mammals = ['dog', 'cat', 'rabbit'];
//... => spread operator
const animals = [...reptiles, ...mammals];
console.log(animals);

//Creating a new array based on an existing array
//JSON.parse(JSON.stringify(students));
const newStudents = [...students];
newStudents.push('Sandra');
console.log(newStudents);
console.log(students);





