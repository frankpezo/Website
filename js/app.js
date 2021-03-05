/*1. Llamamos variables */
let btnMenu=document.querySelector('.btn-menu');
let menu=document.querySelector('.list-container');
let containerMenu=document.querySelector('.menu');
let activador=true;


//2. Detectamos cuando hagamos click en el menu
 btnMenu.addEventListener('click', ()=>{

    //Hacemos un plus para cuando le debes al icono del menu, se nos cambia
    //por otro icono, en este caso X
     document.querySelector('.btn-menu i').classList.toggle('fa-times');

    //2.1. Creamos una condicional para hacer el efecto del boton
    if(activador){
        menu.style.left="0";
        menu.style.transition="05s."
        //Para cerrarlo
        activador=false;
    }else{
        //Para cerrarlo
        activador=false;
        menu.style.left="-100%";
        menu.style.transition="05s."

        //Para que se nos repita muchas veces, debemos poner el activador en tru
        activador=true;
    }

 });
