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

function createMap() {
    for (let y = 0; y < map.length; y++) {
        let rowDiv = document.createElement('div')
        rowDiv.setAttribute('class', 'row')
        for (let x = 0; x < map[y].length; x++) {
            if (map[y][x] === 'W') {
                let cellWall = document.createElement('div')
                cellWall.setAttribute('class', 'cell wall')
                cellWall.setAttribute('data-x', x)
                cellWall.setAttribute('data-y', y)
                rowDiv.appendChild(cellWall)
            } else if (map[y][x] === "S") {
                let cellFloor = document.createElement('div')
                cellFloor.setAttribute('class', 'cell')
                cellFloor.setAttribute('data-x', x)
                cellFloor.setAttribute('data-y', y)
                cellFloor.appendChild(playerToken)
                rowDiv.appendChild(cellFloor)
            } else {
                let cellFloor = document.createElement('div')
                cellFloor.setAttribute('class', 'cell')
                cellFloor.setAttribute('data-x', x)
                cellFloor.setAttribute('data-y', y)
                rowDiv.appendChild(cellFloor)
            }
            mazeEl.appendChild(rowDiv)
        }
    }
}
createMap()

let playerPosition = {
    x: 0,
    y: 9
}

let mazeExitLocation = {
    x: 20,
    y: 8
}

document.addEventListener('keydown', playerMove)
function playerMove(event) {
    let expr = event.code
    let xPosition
    let yPosition
    switch (expr) {
        case 'ArrowUp':
            yPosition = document.querySelector(`[data-x="${parseInt(playerPosition["x"])}"][data-y="${parseInt(playerPosition["y"]) - 1}"]`)
            if (yPosition.className !== 'cell wall') {
                yPosition.appendChild(playerToken)
                playerPosition["y"]--
            }
            break;
        case 'ArrowDown':
            yPosition = document.querySelector(`[data-x="${parseInt(playerPosition["x"])}"][data-y="${parseInt(playerPosition["y"]) + 1}"]`)
            if (yPosition.className !== 'cell wall') {
                yPosition.appendChild(playerToken)
                playerPosition["y"]++
            }
            break;
        case 'ArrowLeft':
            xPosition = document.querySelector(`[data-x="${parseInt(playerPosition["x"]) - 1}"][data-y="${parseInt(playerPosition["y"])}"]`)
            if (xPosition.className !== 'cell wall') {
                xPosition.appendChild(playerToken)
                playerPosition["x"]--
            }
            break;
        case 'ArrowRight':
            xPosition = document.querySelector(`[data-x="${parseInt(playerPosition["x"]) + 1}"][data-y="${parseInt(playerPosition["y"])}"]`)
            if (xPosition.className !== 'cell wall') {
                xPosition.appendChild(playerToken)
                playerPosition["x"]++
            }
            break;
    }
    winner()
}

function winner() {
    if (playerPosition.x == mazeExitLocation.x && playerPosition.y == mazeExitLocation.y) {
        console.log('winner')
        let winnerHeader = document.querySelector('#winner')
        winnerHeader.style.opacity = 100
    }
}
