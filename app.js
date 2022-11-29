var container = document.querySelector('.container');
var gridSize = document.querySelector('.grid-size');
var clearScreen = document.querySelector('.clear');
var dimensions = document.getElementById("dimensions");
var rainbow = document.querySelector('.rainbow');
var black = document.querySelector('.black');
var eraser = document.querySelector('.eraser');

const DEFAULTSIZE = 16;
var currentSize = DEFAULTSIZE;

clearScreen.addEventListener('click', clearGrid);
gridSize.addEventListener('click', updateGridSize);
rainbow.addEventListener('click', getRandomColor);
black.addEventListener('click', getBlack);
eraser.addEventListener('click', getEraser);

//creates grid with appropriate dimensions (size x size)
function createGrid(size) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (let i = 0; i < size * size; i++) {
        let divs = document.createElement("div");
        container.appendChild(divs).className = "divs";
        divs.addEventListener('mouseover', () => divs.style.backgroundColor = "black") //sets background to "black" when mouse is hovered over each div
    }
    currentSize = size;
    dimensions.innerText = `Dimensions: ${size} x ${size}`
}

function clearGrid() {
    grid = document.querySelectorAll('.divs');
    grid.forEach(div => div.style.backgroundColor = "white");
}

function updateGridSize() {
    // removes all currently made divs to prepare for a new grid
    document.querySelectorAll('.divs').forEach(div => div.remove());
    size = prompt("Enter new grid size (# of grids per side): ");
    if (size === undefined || size > 100 || size <= 0 || size === null) {
        alert("Please enter a number between 1 - 100.");
        createGrid(DEFAULTSIZE);
        return
    }
    createGrid(size);
    // this just adds onto the current grid without removing the old grid
}

function setRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getRandomColor() {
    let grid = document.querySelectorAll('.divs');
    for(let i = 0; i < currentSize * currentSize; i++) {
        grid[i].addEventListener('mouseover', () => grid[i].style.backgroundColor = setRandomColor());
    }
}

function getBlack() {
    let grid = document.querySelectorAll('.divs');
    for(let i = 0; i < currentSize * currentSize; i++) {
        grid[i].addEventListener('mouseover', () => grid[i].style.backgroundColor = "black");
    }
}

function getEraser() {
    let grid = document.querySelectorAll('.divs');
    for(let i = 0; i < currentSize * currentSize; i++) {
        grid[i].addEventListener('mouseover', () => grid[i].style.backgroundColor = "white");
    }
}

createGrid(DEFAULTSIZE); 