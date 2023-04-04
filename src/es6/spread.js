// array

let fruits = ['Apple', 'Banna'];

let [a,b] = fruits;
 console.log(a ,fruits[1]);


// objeto
 let user= {username:'Dikinson',roll:'write'}
 let { username, roll} = user;
 console.log(user.roll);

 //spread operator

 let person = {name:'Fernando' , lastName:'Trujillo'};
 let country = 'cl';
 
 let data = {...person,country}
 console.log(data);


 // rest
  function sum(num,...values){


    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
  }
  sum (1,1,2,2,3)


  //objetos json

  export function solution(json1, json2) {
    json1 = json1 || { name: "Pluton", food: "Raven" };
    json2 = json2 || { age: 6, color: "Black" };
  
    return { ...json1, ...json2 }
  }