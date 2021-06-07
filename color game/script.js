let colors= generateRandomColors(6);

let pickedColor = colors[pickColor(6)];

let cuadraditos = document.querySelectorAll(".square") //Recordar la sintaxis
let spanMessage = document.querySelector("message")    //del query
let colorTitle= document.querySelector("#colorDisplay")
let colorH = document.getElementById("colorWin")


colorTitle.textContent = pickedColor;
let numberOfSquares = 6;


for (let i = 0; i < colors.length; i++) {
    cuadraditos[i].style.backgroundColor = colors[i]
    cuadraditos[i].addEventListener("click",function(){
        let clickedColor = this.style.backgroundColor
        if(clickedColor != pickedColor){
            this.style.backgroundColor = "rgb(0, 0, 0)"
            message.textContent = "Try Again"
        }
        else{
            message.textContent = "Correct!"
            this.style.backgroundColor = pickedColor;
            colorH.style.backgroundColor = pickedColor;
            changeColors(pickedColor);
        }
    })
}

function changeColors(colorP){      //  Cambia todos los colores al color ganador
    for (let i = 0; i < cuadraditos.length; i++) {
        cuadraditos[i].style.backgroundColor = colorP;
    }
}

function pickColor(number){     //  Devuelve un numero random de 0 a number
    let num = parseInt((Math.random()*number))
    return num
}

function randomColor(){     //  Devuelve un color RGB random.
    let r = parseInt((Math.random()*256))
    let g = parseInt((Math.random()*256))
    let b = parseInt((Math.random()*256))
    return "rgb("+r+", "+g+", "+b+")"
}

function generateRandomColors(number){      //  Genera un array con colores random
    let newArray = [];
    for (let i = 0; i < number; i++) {
        let colorR = randomColor();
        newArray.push(colorR)
    }
    return newArray
}


let reseter = document.querySelector("#reset")
reseter.addEventListener("click", function(){
    colors = generateRandomColors(numberOfSquares);
    pickedColor = colors[pickColor(numberOfSquares)];
    colorTitle.textContent = pickedColor;
    for (let i = 0; i < colors.length; i++) {
        cuadraditos[i].style.backgroundColor = colors[i]
        cuadraditos[i].addEventListener("click",function(){
            let clickedColor = this.style.backgroundColor
            if(clickedColor != pickedColor){
                this.style.backgroundColor = "rgb(0, 0, 0)"
                message.textContent = "Try Again"
            }
            else{
                message.textContent = "Correct!"
                this.style.backgroundColor = pickedColor;
                colorH.style.backgroundColor = pickedColor;
                changeColors(pickedColor);
                reseter.textContent = "Play Again?"
            }
        })
    }
    reseter.addEventListener("click", function(){
        message.textContent = ""
        reseter.textContent = "New Colors"
        colorH.style.backgroundColor = "rgb(0, 0, 0)"
    })
})


let hardButton = document.querySelector("#hard")
let easyButton = document.querySelector("#easy")

hardButton.addEventListener("click", function(){
    easyButton.classList.remove("selected")
    this.classList.add("selected")
    numberOfSquares = 6;
    colors = generateRandomColors(numberOfSquares);
    pickedColor = colors[pickColor(5)];
    colorTitle.textContent = pickedColor;
    for (let i = 0; i < colors.length; i++) {
        cuadraditos[i].style.backgroundColor = colors[i]
        cuadraditos[i].addEventListener("click",function(){
            let clickedColor = this.style.backgroundColor
            if(clickedColor != pickedColor){
                this.style.backgroundColor = "rgb(0, 0, 0)"
                message.textContent = "Try Again"
            }
            else{
                message.textContent = "Correct!"
                this.style.backgroundColor = pickedColor;
                colorH.style.backgroundColor = pickedColor;
                changeColors(pickedColor);
            }
        })
    }
    for (let i = 3; i < cuadraditos.length; i++) {
        cuadraditos[i].style.display = "block"
    }
})

easyButton.addEventListener("click", function(){
    hardButton.classList.remove("selected")
    this.classList.add("selected")
    numberOfSquares = 3;
    colors = generateRandomColors(numberOfSquares);
    pickedColor = colors[pickColor(2)];
    colorTitle.textContent = pickedColor;
    for (let i = 0; i < colors.length; i++) {
        cuadraditos[i].style.backgroundColor = colors[i]
        cuadraditos[i].addEventListener("click",function(){
            let clickedColor = this.style.backgroundColor
            if(clickedColor != pickedColor){
                this.style.backgroundColor = "rgb(0, 0, 0)"
                message.textContent = "Try Again"
            }
            else{
                message.textContent = "Correct!"
                this.style.backgroundColor = pickedColor;
                colorH.style.backgroundColor = pickedColor;
                changeColors(pickedColor);
            }
        })
    }
    for (let i = 3; i < cuadraditos.length; i++) {
        cuadraditos[i].style.display = "none"
    }
})

