let typeSuscripción = [
    "Free",
    "Basic",
    "Expert",
    "ExpertPlus"
];
let infoSuscripción = [
    "solo puedes tomar los cursos gratis",
    "puedes tomar casi todos los cursos de Platzi durante un mes",
    "puedes tomar casi todos los cursos de Platzi durante un año",
    "tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"];
let userSuscription = "Expert";
for (let i = 0; i < typeSuscripción.length; i++) {
    if (userSuscription == typeSuscripción[i]) {
        console.log(`Si estas suscrito al plan ${typeSuscripción[i]} en el cual ${infoSuscripción[i]}`)
    }
}



let num = 10;
let num2 = 10;
const result = num + num2;

let questions = {
    q1: `Cuanto es ${num} + ${num2}`
}
function Quizzer() {

    let userInput = prompt(questions.q1);
    if (userInput == result) {
        alert("Felicitaciones, respondiste correctamente el desafio 😎");
    } else {
        alert("lamentablemente, tu respuesta es incorrecta, sigue practicando ❌!");
    }
}
Quizzer();


let myCar = {
    make: 'Ford',
    model: 'Mustang',
    year: 1969
};
function readObject(object) {
    for (let key in object) {
        console.log(object[key]);
    }
}
readObject(myCar);
let resultado;
while (resultado !=4) 
{
    let pregunta =prompt('cuato es 2 + 2 ')
    resultado =pregunta;
    
}
