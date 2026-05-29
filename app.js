// make 16x16 square divs within etch-screen-frame

const etchScreenSubmitBtn = document.querySelector(".grid-button");
const etchScreenInput = document.querySelector(".prompt-input");
const etchScreenFrame = document.querySelector(".etch-screen-frame");

etchScreenSubmitBtn.addEventListener("click", (e) => {
   
    e.preventDefault(); // prevent form submission default behavior

    const userInput = etchScreenInput.value; // gather current value of input

    // create one grid div sized so that the userInput number of divs equals full frame height/width
    
        
    for (let index = 0; index < userInput*userInput; index++) {
        const pixelDivs = document.createElement("div");
        pixelDivs.setAttribute("style", "margin: 0; padding: 0; background-color:blue;")
        pixelDivs.style.height = (etchScreenFrame.offsetHeight / userInput) + "px";
        pixelDivs.style.width = (etchScreenFrame.offsetWidth / userInput) + "px";

        // add grid div to container
        etchScreenFrame.appendChild(pixelDivs); 
        
        // add class to grid divs
        etchScreenFrame.children[index].classList.add("pixel-div"); 

        
    }
  
}
);