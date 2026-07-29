let homePoints = 0
let homeScore = document.getElementById("home-score")

function addOneH() {
    homePoints += 1
    homeScore.textContent = homePoints
}

function addTwoH() {
    homePoints += 2
    homeScore.textContent = homePoints
}

function addThreeH() {
    homePoints += 3
    homeScore.textContent = homePoints
}

let guestPoints = 0
let guestScore = document.getElementById("guest-score")

function addOneG() {
    guestPoints += 1
    guestScore.textContent = guestPoints
}

function addTwoG() {
    guestPoints += 2
    guestScore.textContent = guestPoints
}

function addThreeG() {
    guestPoints += 3
    guestScore.textContent = guestPoints
}

function newGame() {
    homePoints = 0
    guestPoints = 0
    homeScore.textContent = homePoints
    guestScore.textContent = guestPoints
}