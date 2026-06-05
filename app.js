// make 16x16 square divs within etch-screen-frame

const etchScreenSubmitBtn = document.querySelector(".grid-button");
const etchScreenInput = document.querySelector(".prompt-input");
const etchScreenFrame = document.querySelector(".etch-screen-frame");
const eraseBtn = document.querySelector(".controller-erase-button");
let userInput = etchScreenInput.value; // gather current value of input
 

function drawPixels(userInput) {
    
    for (let index = 0; index < userInput*userInput; index++) {
        pixelDiv = document.createElement("div");
        pixelDiv.setAttribute("style", 
            "margin: 0; padding: 0; background-color:var(--etch-a-sketch-screen-color);")
        pixelDiv.style.height = (etchScreenFrame.offsetHeight / userInput) + "px";
        pixelDiv.style.width = (etchScreenFrame.offsetWidth / userInput) + "px";

        // add grid div to container
        etchScreenFrame.appendChild(pixelDiv); 
        
        // add class to grid divs
        etchScreenFrame.children[index].classList.add("pixel-div");       
        
        const etchScreenPixels = document.querySelectorAll(".pixel-div") 
    
    for (const pixel of etchScreenPixels) {
        pixel.addEventListener("mouseover", changePixelColor); 
    };

}}
    
function changePixelColor(e) {
        
    this.style.backgroundColor = "var(--etch-a-sketch-screen-color-hover)";
   
}

function clearGrid(e) {
      
    // prevent form submission default behavior
    e.preventDefault(); 
      
    // on click...
    // ...clear etch screen...
    etchScreenFrame.replaceChildren();

    // ...gather current value of input...
    newUserInput = etchScreenInput.value; 
 
    // ...and run the drawPixels function on the newUserInput value
    drawPixels(newUserInput);

}

etchScreenSubmitBtn.addEventListener("click", clearGrid); 

eraseBtn.addEventListener("click", clearGrid);

drawPixels(userInput);



