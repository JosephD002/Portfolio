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
       })
      const {title,date,text} = jobsM[0]

      windowProject.querySelector(".ventana__titulo").innerText = title
      windowProject.querySelector(".ventana__fecha").innerText = date
      windowProject.querySelector(".ventana__parrafo").innerText = text
      windowProject.querySelector(".ventana__imagen").src =ProjectClick.querySelector("img").src


     windowProject.classList.add("ventana--active")
    }
})


windowProject.querySelector("button[data-action='cerrar-ventana']").addEventListener("click", (e) => {
 e.preventDefault()
 windowProject.classList.remove("ventana--active")
})

windowProject.querySelector(".ventana__overlay").addEventListener("click", (e) => {
    e.preventDefault()
    if (e.target.matches(".ventana__overlay")) {
        windowProject.classList.remove("ventana--active")
    }
})

