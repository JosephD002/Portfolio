import textAnimation from "./textAnimation";
import "./galeryAnimation"
import "./galery"
import "./windowEmail"
window.addEventListener ("load", async () => {

   
    await textAnimation( document.querySelector(".hero__titulo--uno"));
    await textAnimation( document.querySelector(".hero__titulo--dos"));
    
})

