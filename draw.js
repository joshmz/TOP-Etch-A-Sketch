// 
let squares = []
let rows = []
const grid = document.querySelector("#grid") // Drawing grid
// Input field
const button = document.querySelector("button")
const sizeInput = document.querySelector("#sizeInput")

// Make empty pixel
function makeSquare(currentRow) {
    const square = document.createElement("div");
    square.classList.add("draw-box")

    rows[currentRow].appendChild(square);
    squares.push(square)
}

// Makes new row in pixel grid
function makeNewContainer() {
    let row = document.createElement("div")
    row.style.display = "flex"
    row.style.width = "fit-content"

    grid.appendChild(row)
    rows.push(row)

}

// Creates grid based on the size of input DEFAULT: 16
function makeGrid(size){
    makeNewContainer()
    currentRow = 0
    for (let i = 0; i < size; i++){
        for (let i = 0; i < size; i++){
            makeSquare(currentRow)
        }
        currentRow++
        makeNewContainer()
    }

}

// Wipes grid to prepare for new grid
function deleteGrid() {
    grid.innerHTML = '';
    squares = []
    rows = []
}


// Deletes old grid and creates new grid
button.addEventListener("click", () => {
    deleteGrid()
    size = Number(sizeInput.value)
    if (size <= 100) {
        makeGrid(size)
        makeDrawable()
    }
    else {
        alert(`${size}x${size} is too large!`)

    }
})

// Allow for user to click to draw on grid
function makeDrawable() {
    const drawBoxes = document.querySelectorAll(".draw-box");

    drawBoxes.forEach((drawBox) => {
        drawBox.addEventListener("click", function(e) {
            e.target.style.background = "black"
        })
    })
}

// Defaults for when user opens webpage
makeGrid(16)
makeDrawable()

// Debugging purposes
console.log(squares)
