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

//3.Para la lista del menú
let enlaces=document.querySelectorAll('.lists li a');

enlaces.forEach((element)=>{
   element.addEventListener('click', (event)=>{
            enlaces.forEach((link)=>{
                 //3.1. Intercalamos la fases, desactivamos la clase activo 
                 // del primer elemeno de la lista de menú
                 link.classList.remove('activo');
            });
            //3.2. Para que se nos agrege la clase activo al siguient elemento
            event.target.classList.add('activo');
   });
});


//4. Efecto Scroll
let prevScrollPos= window.pageYOffset;//Con Windowns accedemos a toda la ventana del navegador
                                       //pageYOffset para que devuelva el valor del scroll en pixeles

window.onscroll=()=>{
    let currentScrollPos=window.pageYOffset;//Este valor será el que irá cambiando
    //4.1. Mostrar y ocultar menú
    if(prevScrollPos>currentScrollPos){
      containerMenu.style.top="0";
      containerMenu.style.transition="0.5s";
    }else{
        containerMenu.style.top="-60px";
      containerMenu.style.transition="0.5s";
    }

    prevScrollPos=currentScrollPos;

   //4.2. Mostrar y ocultar scroll estilos
     let arriba= window.pageYOffset;
     let goTop=document.querySelector('.go-top');

     if(arriba<=600){
         //VAMOS A PONERLE UN MARGEN ROJO CUANDO NOS ENCONTREMOS EN NUESTRO CONTENIDO
         containerMenu.style.borderBottom="none";
         goTop.style.right="-100%"
     }else{
        containerMenu.style.borderBottom="3px solid #ff2e63";
        goTop.style.right="0"
        goTop.style.transition="0.5s";
     }
     
//5. Para el botón de ver abajo y el botón que indica ir arriba
goTop.addEventListener('click', ()=>{
    //document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
    
  
  });

}     



//5.1.
let verAbajo=document.querySelector('#abajo');
 
verAbajo.addEventListener('click', ()=>{
   // document.body.scrollTop=600;
    document.documentElement.scrollTop=600;
});