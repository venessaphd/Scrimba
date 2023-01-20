// grab the elements
let scoreHomeEl = document.getElementById("score-home-el")
let scoreGuestEl = document.getElementById("score-guest-el")
let celebrateHomeEl = document.getElementById("celebrate-home-el")
let celebrateGuestEl = document.getElementById("celebrate-guest-el")

let homeSum = 0
let guestSum = 0

function checkCelebrate() {
        celebrateHomeEl.textContent = ""
        celebrateGuestEl.textContent = ""
    
    if (homeSum > guestSum) {
        celebrateHomeEl.textContent = "🎉 ✨ 🔥 🏅"
        celebrateGuestEl.textContent = ":-("
    } else {
        celebrateHomeEl.textContent = "😞"
        celebrateGuestEl.textContent = "⚽⚽⚽⚽🔥⚽⚽⚽⚽"
    }
}

function add1home(){
    homeSum += 1
    scoreHomeEl.textContent = homeSum
    checkCelebrate()
}
function add2home(){
    homeSum += 2
    scoreHomeEl.textContent = homeSum
    checkCelebrate()
}
function add3home(){
    homeSum += 3
    scoreHomeEl.textContent = homeSum
    checkCelebrate()
}

function add1guest(){
    guestSum += 1
    scoreGuestEl.textContent = guestSum
    checkCelebrate()
}
function add2guest(){
    guestSum += 2
    scoreGuestEl.textContent = guestSum
    checkCelebrate()
}
function add3guest(){
    guestSum += 3
    scoreGuestEl.textContent = guestSum
    checkCelebrate()
}

function newGame(){
    homeSum = 0
    guestSum = 0
    scoreHomeEl.textContent = homeSum
    scoreGuestEl.textContent = guestSum    
}