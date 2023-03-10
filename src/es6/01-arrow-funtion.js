function square(num) {
    return num * num;
}


const square = (num) => {
    return num * num;
}

// template literals 

let hello = 'hello';
let world = 'world';/* 
let epicPhrase= hello + world + '!';
 */



let epicPhrase2 = `${hello} ${world}!`;
console.log(epicPhrase2)

//multi-line strings

let lorem = 'estpp es un string \n' + 'esto es otra linea';


let lorem2 = `esta es una frase epica,
la coontinuacion de esa frase epica`;

console.log(lorem);
console.log(lorem2);


// default params

function newUser(name, age, country) {

    var name = name || 'oscar';
    var age = age || 34;
    var country = country || 'MX';
    console.log(name, age, country);

}
newUser();
newUser('David', 15, 'COL');



//
function newAdmin(name = 'oscar', age = 32, country = 'CL') {
    console.log(name, age, country);

}
newAdmin();
newAdmin('Poe', 58, 'NeverMore');




//Rest-spread


//ARRAY DESTRUCTURING 
let fruits = ['Apple', 'Banana'];
let [a, b] = fruits;
console.log(a, fruits[1]);


//objeto 
let user = { username: 'Lennon', age: 34 };
let { username, age } = user;
console.log(username, age);


//spread operator
let person = { name: 'oscar', age: 28 };
let country = 'Mx';


let data = { id: 1, ...person, country };
console.log(data);

//rest 

function sum(num, ...values2) {


    console.log(values2);
    console.log(num + values2[0]);
    return num = values2[0];

}
sum (1,1,2,3);