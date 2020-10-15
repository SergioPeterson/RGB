var squares = document.querySelectorAll(".squares")
var message = document.querySelector(".message")
var messagebox = document.querySelector(".messagebox")
var esay = document.querySelector(".easy")
var hard = document.querySelector(".hard")
var contain = document.querySelector(".container")
var currentColor = document.querySelector(".SelectedColor")
var restart = document.querySelector(".restart")
var header = document.querySelector("h1")



function generateColors(dif) {
    arr = []

    if (dif == "hard") {
        for (let index = 0; index < squares.length; index++) {
            arr.push("rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")")
        }
    } else if (dif == "easy") {
        for (let index = 0; index < (squares.length / 2); index++) {
            arr.push("rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")")
        }
    }
    return arr
}

var colors = generateColors("hard")
var pickedColor = colorSelector()

function setSquares(color) {
    if (typeof(color) == "object") {
        for (let index = 0; index < squares.length; index++) {
            squares[index].style.backgroundColor = color[index]
        }
    } else if (typeof(color) == "string") {
        for (let index = 0; index < squares.length; index++) {
            squares[index].style.backgroundColor = color
            header.style.backgroundColor = color
        }
    }
}

setSquares(colors)

function restartFunc(diff) {
    if (diff == "hard") {
        colors = generateColors("hard")
        for (let index = (squares.length / 2); index < squares.length; index++) {
            squares[index].classList.remove("hide")
        }
        esay.classList.remove("selected")
        hard.classList.add("selected")
    } else if (diff == "easy") {
        colors = generateColors("easy")
        for (let index = (squares.length / 2); index < squares.length; index++) {
            squares[index].classList.add("hide")
        }
        esay.classList.add("selected")
        hard.classList.remove("selected")
    }
    setSquares(colors)
    pickedColor = colorSelector()
    message.textContent = ""
    header.style.backgroundColor = "steelblue"
    restart.textContent = "New Colors"
}

function colorSelector() {
    var selected = colors[Math.floor(Math.random() * colors.length)]
    currentColor.textContent = selected
    return selected

}

for (let index = 0; index < squares.length; index++) {
    squares[index].addEventListener("click", function() {
        if (squares[index].style.backgroundColor == pickedColor) {
            setSquares(pickedColor);
            message.textContent = "Correct!!"
            restart.textContent = "Play again?"
        } else {
            squares[index].style.backgroundColor = "#252525"
            message.textContent = "Incorrect!!"
        }
    })
}

restart.addEventListener("click", function() {
    restartFunc("hard")
})

esay.addEventListener("click", function() {
    restartFunc("easy")
})

hard.addEventListener("click", function() {
    restartFunc("hard")
})