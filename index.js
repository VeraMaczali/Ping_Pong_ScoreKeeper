const score1 = document.querySelector("#score1");
const score2 = document.querySelector("#score2");
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const resetBtn = document.querySelector("#reset");
const select = document.querySelector("#play");
let winningScore = 3;

let p1Score = 0;
let p2Score = 0;
let isGameOver = false;

player1.addEventListener("click", function () {
  if (!isGameOver) {
    p1Score++;
    if (winningScore === p1Score) {
      isGameOver = true;
      score1.classList.add("green");
      score2.classList.add("red");
    }
    score1.textContent = p1Score;
  }
});
player2.addEventListener("click", function () {
  if (!isGameOver) {
    p2Score++;
    if (winningScore === p2Score) {
      isGameOver = true;
      score1.classList.add("red");
      score2.classList.add("green");
    }
    score2.textContent = p2Score;
  }
});

select.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  reset();
});

resetBtn.addEventListener("click", reset);
function reset() {
  isGameOver = false;
  p1Score = 0;
  p2Score = 0;
  score1.textContent = 0;
  score2.textContent = 0;
  score1.classList.remove("red", "green");
  score2.classList.remove("green", "red");
}
