 let count = 0; 
 let interval;

 const countlabel = document.getElementById("countlabel");
 const increasebtn = document.getElementById("increasebtn");
 const decreasebtn = document.getElementById("decreasebtn");
 const reset = document.getElementById("reset");

 function updateDisplay(){
    countlabel.innerHTML = count;
 }
 updateDisplay();

 function startCounting(changeFn){
    changeFn(); 
    interval= setInterval(changeFn, 100);
 }

 function stopCounting(){
    clearInterval(interval);
 }

 function buttonholdupdate(button, changeFn){
    button.addEventListener("mousedown", () => startCounting(changeFn))
    button.addEventListener("mouseup", stopCounting);
    button.addEventListener("mouseleave",stopCounting);
    
    button.addEventListener("touchstart", (e) => {
        e.pfevetdefault();
        startCounting(changeFn);

    })
    button.addEventListener("touchend", stopCounting);         
}

 

buttonholdupdate(increasebtn, () =>{
  count++;
  updateDisplay(); 
})

buttonholdupdate(decreasebtn, () =>{
    if (count >0){
    count--;
    } 
    updateDisplay();
})

reset.addEventListener("click", () => {
    count = 0
    updateDisplay();
})