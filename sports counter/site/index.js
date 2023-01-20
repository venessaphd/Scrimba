// grab the elements
let scoreHomeEl = document.getElementById("score-home-el");
let scoreGuestEl = document.getElementById("score-guest-el");
let celebrateHomeEl = document.getElementById("celebrate-home-el");
let celebrateGuestEl = document.getElementById("celebrate-guest-el");

let homeSum = 0;
let guestSum = 0;

function addPoints(team, points) {
  //   let teamToScore = team + "Sum";
  if (team === "home") {
    homeSum += points;
  } else {
    guestSum += points;
  }
  scoreHomeEl.textContent = homeSum;
  checkCelebration();
  console.log("does it say homeSum?" + homeSum);
}

function checkCelebration() {
  celebrateHomeEl.textContent = "";
  celebrateGuestEl.textContent = "";

  if (homeSum > guestSum) {
    celebrateHomeEl.textContent = "🎉 ✨ 🔥 🏅";
    celebrateGuestEl.textContent = ":-(";
  } else {
    celebrateHomeEl.textContent = "😞";
    celebrateGuestEl.textContent = "⚽⚽⚽⚽🔥⚽⚽⚽⚽";
  }
}

function newGame() {
  homeSum = 0;
  guestSum = 0;
  scoreHomeEl.textContent = homeSum;
  scoreGuestEl.textContent = guestSum;
}
