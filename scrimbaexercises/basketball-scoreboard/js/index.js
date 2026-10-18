let homescore = document.getElementById('homescore')
let guestscore = document.getElementById('guestscore')
let countHome = 0
let countAway = 0

function addOneHome() {
    countHome += 1
    homescore.textContent = countHome
}

function addTwoHome() {
    countHome += 2
    homescore.textContent = countHome
}

function addThreeHome() {
    countHome += 3
    homescore.textContent = countHome
}

function addOneGuest() {
    countAway += 1
    guestscore.textContent = countAway
}

function addTwoGuest() {
    countAway += 2
    guestscore.textContent = countAway
}

function addThreeGuest() {
    countAway += 3
    guestscore.textContent = countAway
}

function resetScore() {
    homescore.textContent = 0
    guestscore.textContent = 0
}