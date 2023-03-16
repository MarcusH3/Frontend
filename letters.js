document.querySelector("h2").onmouseover=event=> {
    let i = 0;
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ";
   
   const interval = setInterval(()=>{
    event.target.innerText = event.target.innerText.split("")
    .map((letter, index) => {
      if (index < i){
      return event.target.dataset.value[index];
      }
      
      return letters[Math.floor(Math.random() * 26)]
         })
      .join("");
      if (i>=event.target.dataset.value.lenght){
        clearInterval(interval);
      }
    i+= 1/3;
  }, 35);
  }
  
  