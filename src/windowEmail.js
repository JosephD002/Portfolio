 const emailButton = document.querySelectorAll('[data-action="abrir-ventana-correo"]')
 const emailWindow = document.getElementById("ventana-correo")
 const closeButton =document.querySelectorAll('[data-action="cerrar-ventana"]')


 emailButton.forEach((button) =>{
    button.addEventListener('click',(e ) =>{
        e.preventDefault()
        emailWindow.classList.add("ventana--active")
    })
 })

 closeButton.forEach((button) =>{
    button.addEventListener('click',(e ) =>{
        e.preventDefault()
        emailWindow.classList.remove("ventana--active")
    })
 })
