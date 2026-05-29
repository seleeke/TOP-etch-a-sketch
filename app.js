// make 16x16 square divs within etch-screen-frame

const etchScreenSubmitBtn = document.querySelector(".grid-button");
const etchScreenInput = document.querySelector(".prompt-input");
const etchScreenFrame = document.querySelector(".etch-screen-frame");

console.log(etchScreenFrame)

etchScreenSubmitBtn.addEventListener("click", (e) => {
   
    e.preventDefault(); // prevent form submission default behavior

    const userInput = etchScreenInput.value; // gather current value of input

    // create one grid div sized so that the userInput number of divs equals full frame height/width
    

    for (let index = 1; index <= userInput*userInput; index++) {
        const pixelDivs = document.createElement("div");
        pixelDivs.classList.add = "pixel-div";
        pixelDivs.setAttribute("style", "margin: 0; padding: 0; background-color: blue;")
        pixelDivs.style.height = (etchScreenFrame.offsetHeight / userInput) + "px";
        pixelDivs.style.width = (etchScreenFrame.offsetWidth / userInput) + "px";
        etchScreenFrame.appendChild(pixelDivs);
    }


}
)

// const pixelDivs = document.createElement("div")
