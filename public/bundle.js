'use strict';

const textAnimation =(text) =>{
 
 
 const letterNumber = text.dataset.texto.length;
 const cursor = text.querySelector(".hero__cursor");



 cursor.classList.add("hero__cursor--visible");

//por cada letra le agregamos al DOM con 100ms de separacion
  for(let i = 0; i < letterNumber ; i++){
    setTimeout(() => {
        const letter = document.createElement("span");
        letter.append(text.dataset.texto[i]);
        text.append(letter);
    } ,150 * i);
  
  }

setTimeout(() => {

    const cursors = [...text.closest(".hero__header").querySelectorAll(".hero__cursor")];
  
  const indexCursorNow =  cursors.indexOf(cursor);
  
   if (indexCursorNow < cursors.length - 1) {
    cursor.classList.remove("hero__cursor--visible");
   } else {
    cursor.classList.add("hero__cursor--active");
   }

},letterNumber * 100);

  return new Promise ((resolve) => setTimeout(resolve, letterNumber * 100));
};

const galery = document.getElementById("trabajos");

const observer = new IntersectionObserver((entries) => {
   if (entries[0].isIntersecting) {
      const jobs = galery.querySelectorAll(".trabajos__imagenes a");
      jobs.forEach ( (job,index) => {
        setTimeout(() =>{
            job.classList.add("trabajos__trabajo--visible");
        },500 * index);
       
      });
   }
}, {
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.5,
});

observer.observe(galery);

const projects = document.getElementById("trabajos");
const windowProject = document.getElementById("ventana-trabajos");

const data = [

    {
        id:"1",
        title:"E-commerce",
        text:"Sitio web que funciona como tienda virtual de diversos productos,simulando el proceso Front-end ,esta enfocado principalmente en su funcionamiento mas que en su estetica ",
        date:"HTML-CSS-JavaScript-React.js-Firebase Database"

    },

    {
        id:"2",
        title:"Lista de tareas",
        text:"Pagina la cual se le puede escribir tareas/recordatorios los cuales se pueden acumular en una lista,estas tareas se pueden modificar y eliminar,de la misma manera si la pagina se refresca permanecen guardados",
        date:"HTML-CSS-JavaScript-React.js"
        
    },

    {
        id:"3",
        title:"iPhone Store",
        text:"Sitio web que simula una tienda virtual de iPhones,este sitio no posee funcionalidad y es puramente estetico",
        date:"HTML-CSS"
        
    },

    {
        id:"4",
        title:"App de clima",
        text:"Sitio web que muestra en tiempo real el clima de la ciudad que se coloque en el buscador,mostrando detalles como la humedad y la velocidad del viento",
        date:"HTML-CSS-javaScript-React.js"
        
    },

    {
        id:"5",
        title:"Projecto 5",
        text:"Coming soon",
        date:""
        
    },

    {
        id:"6",
        title:"Projecto 6",
        text:"Coming soon",
        date:""
        
    },

];


projects.addEventListener("click", (e) =>{
    e.preventDefault();
    const ProjectClick = e.target.closest(".trabajos__trabajo");

    if(ProjectClick ) {
       const id = ProjectClick.dataset.id;

       const jobsM= data.filter ((jobsM) => {
       
         if (jobsM.id === id) {
            return jobsM
         }
       });
      const {title,date,text} = jobsM[0];

      windowProject.querySelector(".ventana__titulo").innerText = title;
      windowProject.querySelector(".ventana__fecha").innerText = date;
      windowProject.querySelector(".ventana__parrafo").innerText = text;
      windowProject.querySelector(".ventana__imagen").src =ProjectClick.querySelector("img").src;


     windowProject.classList.add("ventana--active");
    }
});


windowProject.querySelector("button[data-action='cerrar-ventana']").addEventListener("click", (e) => {
 e.preventDefault();
 windowProject.classList.remove("ventana--active");
});

windowProject.querySelector(".ventana__overlay").addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.matches(".ventana__overlay")) {
        windowProject.classList.remove("ventana--active");
    }
});

const emailButton = document.querySelectorAll('[data-action="abrir-ventana-correo"]');
 const emailWindow = document.getElementById("ventana-correo");
 const closeButton =document.querySelectorAll('[data-action="cerrar-ventana"]');


 emailButton.forEach((button) =>{
    button.addEventListener('click',(e ) =>{
        e.preventDefault();
        emailWindow.classList.add("ventana--active");
    });
 });

 closeButton.forEach((button) =>{
    button.addEventListener('click',(e ) =>{
        e.preventDefault();
        emailWindow.classList.remove("ventana--active");
    });
 });

window.addEventListener ("load", async () => {

   
    await textAnimation( document.querySelector(".hero__titulo--uno"));
    await textAnimation( document.querySelector(".hero__titulo--dos"));
    
});
//# sourceMappingURL=bundle.js.map
