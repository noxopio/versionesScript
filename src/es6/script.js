const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1= document.querySelector('#input1'); 
const input2= document.querySelector('#input2'); 
const btn= document.querySelector('#button'); 
const pResult =document.querySelector('#result');

form.addEventListener('submit',sumarInputs);

function sumarInputs(e){

    e.preventDefault();
  const sumaInputs =+input1.value + +input2.value 
  pResult.innerText = `Resultado ${sumaInputs}`;
return sumaInputs;
}



































/* const p = document.querySelector('p');
const paragraph = document.querySelector('.paragraph');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');
 */














































/* console.log({
    h1, p, paragraph, pid, input
});


h1.innerText = 'UTOPIA';


h1.classList.add('rojo');
h1.classList.remove('verde');
input.value = 'help'



const img = document.createElement('img');

img.setAttribute('src', 'https://www.spotern.com/fr/blog/wp-content/uploads/2014/07/Utopia.jpg');
pid.append(img); */