const galery = document.getElementById("trabajos")

const observer = new IntersectionObserver((entries) => {
   if (entries[0].isIntersecting) {
      const jobs = galery.querySelectorAll(".trabajos__imagenes a")
      jobs.forEach ( (job,index) => {
        setTimeout(() =>{
            job.classList.add("trabajos__trabajo--visible")
        },500 * index)
       
      })
   }
}, {
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.5,
})

observer.observe(galery)