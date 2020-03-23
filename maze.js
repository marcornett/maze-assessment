const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];

const mazeEl = document.querySelector('#maze')
let playerToken = document.querySelector('.playerToken')

// Map Creation and Player location
// Iterates over Map string
function createMap(){
    for(let y = 0; y < map.length; y++){
        // Creates Rows
        let rowDiv = document.createElement('div')
        // Gives Rows Class
        rowDiv.setAttribute('class', 'row')
        // Iterates over Map letters  and makes corresponding Divs
        for(let x = 0; x < map[y].length; x++){
            // Checks W to make div Wall
            if(map[y][x] === 'W'){
                let cellWall = document.createElement('div')
                cellWall.setAttribute('class', 'cell wall')
                // cellWall.className += " " + x
                cellWall.setAttribute('data-x', x)
                cellWall.setAttribute('data-y', y)
                rowDiv.appendChild(cellWall)
            // Checks S to make playerToken and appends to cell
            } else if(map[y][x] === "S"){
                let cellFloor = document.createElement('div')
                // x-axis and gives data-x attribute

                cellFloor.setAttribute('class', 'cell')
                cellFloor.setAttribute('data-x', x)
                cellFloor.setAttribute('data-y', y)
                cellFloor.appendChild(playerToken)
                rowDiv.appendChild(cellFloor)
            // Everything else is Floor
            } else{
                let cellFloor = document.createElement('div')
                cellFloor.setAttribute('class', 'cell')
                // cellFloor.className += " " + x
                cellFloor.setAttribute('data-x', x)
                cellFloor.setAttribute('data-y', y)
                rowDiv.appendChild(cellFloor)
            }
            // Appends everything to the Map
            mazeEl.appendChild(rowDiv)
        }
    }
}
createMap()


// X & Y parsed as an Integer
// let xPosition = parseInt(playerToken.dataset.x)
// let yPosition = parseInt(playerToken.dataset.y)

// Player position stored in object in both x and y positions.
// let playerPosition = {
//     x: xPosition,
//     y: yPosition
// }

// Keeps Track of the player
let playerPosition = {
    x: 0,
    y: 9
}

let mazeExitLocation ={
    x: 20,
    y: 8
}

document.addEventListener('keydown', playerMove)
function playerMove(event){
    let expr = event.code
    let xPosition
    let yPosition
    switch (expr){
        case 'ArrowUp':
            // Selects the div above
            yPosition = document.querySelector(`[data-x="${parseInt(playerPosition["x"])}"][data-y="${parseInt(playerPosition["y"])-1}"]`)
            if(yPosition.className !== 'cell wall'){
                yPosition.appendChild(playerToken)
                // Subtracts 1 from the global array keeping track of the player
                playerPosition["y"]--
            }
            break;
        case 'ArrowDown':
            // Selects the div below
            yPosition = document.querySelector(`[data-x="${parseInt(playerPosition["x"])}"][data-y="${parseInt(playerPosition["y"])+1}"]`)
            if(yPosition.className !== 'cell wall'){
                yPosition.appendChild(playerToken)
                // Subtracts 1 from the global array keeping track of the player
                playerPosition["y"]++
            }
            break;
        case 'ArrowLeft':
            // Selects the div to the left
            xPosition = document.querySelector(`[data-x="${parseInt(playerPosition["x"])-1}"][data-y="${parseInt(playerPosition["y"])}"]`)
            if(xPosition.className !== 'cell wall'){
                xPosition.appendChild(playerToken)
                // Subtracts 1 from the global array keeping track of the player
                playerPosition["x"]--
            }
            break;
        case 'ArrowRight':
            // Selects the div to the left
            xPosition = document.querySelector(`[data-x="${parseInt(playerPosition["x"])+1}"][data-y="${parseInt(playerPosition["y"])}"]`)
            if(xPosition.className !== 'cell wall'){
            xPosition.appendChild(playerToken)
            // Subtracts 1 from the global array keeping track of the player
            playerPosition["x"]++
            }
            break;
    }
}

function winner(){
    if (playerPosition === mazeExitLocation){
        console.log('winner')
    }
}

winner()