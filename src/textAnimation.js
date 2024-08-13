 const textAnimation =(text) =>{
 
 
 const letterNumber = text.dataset.texto.length;
 const cursor = text.querySelector(".hero__cursor");



 cursor.classList.add("hero__cursor--visible");

//por cada letra le agregamos al DOM con 100ms de separacion
  for(let i = 0; i < letterNumber ; i++){
    setTimeout(() => {
        const letter = document.createElement("span");
        letter.append(text.dataset.texto[i]);
        text.append(letter)
    } ,150 * i)
  
  }

setTimeout(() => {

    const cursors = [...text.closest(".hero__header").querySelectorAll(".hero__cursor")];
  
  const indexCursorNow =  cursors.indexOf(cursor);
  
   if (indexCursorNow < cursors.length - 1) {
    cursor.classList.remove("hero__cursor--visible")
   } else {
    cursor.classList.add("hero__cursor--active")
   }

},letterNumber * 100);

  return new Promise ((resolve) => setTimeout(resolve, letterNumber * 100));
}

export default textAnimation