document.addEventListener('DOMContentLoaded',()=>{
IniciandoApp();
});
function IniciandoApp(){

console.log("Iniciando");

NavegacionFija();

}
//para poner la barra fija
const NavegacionFija=()=>{

const barra=document.querySelector('.menu');

const sobreFestival=document.querySelector('.contenedor-fondo-animado');
// para arreglar ese salto al momento de poner el scroll fijo fija
const body=document.querySelector('body');


//leemos en que pocision esta el scroll para poner la nevgacion fija
window.addEventListener('scroll',()=>{

 console.log(sobreFestival.getBoundingClientRect());
if(sobreFestival.getBoundingClientRect().bottom < 0){
    barra.classList.add('fija');
     
}else{
   barra.classList.remove('fija');
 

}
})
}
const NavegacionMosh=()=>{
//obtenemos todos los enlaces
const navegacion=document.querySelectorAll(".menu a");
//hacemos el evento debe hacerle All para que todo tengan la misma funcionalidad si no marca error
//lo metemos en un foreach para poder añadir a todos los enlaces
navegacion.forEach((enlace)=>{
//hacemos el evento
//e.target.attributes.href.value obtenesmo el valor del atributo 
//con attributes es para ver la propiedades
enlace.addEventListener('click',(e)=>{
e.preventDefault();
const resultado=e.target.attributes.href.value;
const seccion=document.querySelector(resultado);
//el scrollIntoView es una funcion para hacer que baje lento y adentro ponemos los parametos
seccion.scrollIntoView({ behavior: "smooth"});


    })
})
}