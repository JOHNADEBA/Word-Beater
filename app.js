const stageTime = document.querySelector("#stage-time");
const displayWord = document.querySelector("#display-word");
const input = document.querySelector("#input");
const mgs = document.querySelector("#mgs");
const countdown = document.querySelector("#countdown span");
const score = document.querySelector("#score span");
const easy = document.querySelector(" #easy");
const medium = document.querySelector(" #medium");
const hard = document.querySelector(" #hard");

const levels = { low: 5, medium: 3, hard: 2 };

let time;
let isPlaying;
let result = 0;

const words = [
  "come",
  "church",
  "dolor",
  "sit",
  "amet",
  "consectetur",
  "adipisicing",
  "elit",
  "Nostrum",
  "consequuntur",
  "magni",
  "ratione",
  "atque",
  "placeat",
  "mollitia",
  "quia",
  "corporis",
  "Similique",
  "harum",
  "facere",
  "id",
  "laborum",
  "aliquam",
  "reiciendis",
  "doloribus",
  "adipisci",
  "eaque",
  "delectus",
  "quaerat",
  "voluptatum",
];

const playGame = () => {
  startGame();
  input.addEventListener("input", validate);
  setInterval(countDown, 1000);
  setInterval(gameUpdate, 50);
};

easy.addEventListener("click", () => {
  time = levels.low;
  stageTime.textContent = time;
});
medium.addEventListener("click", () => {
  time = levels.medium;
  stageTime.textContent = time;
});
hard.addEventListener("click", () => {
  time = levels.hard;
  stageTime.textContent = time;
});

const startGame = () => {
  wordRand = Math.floor(Math.random(words) * words.length);
  displayWord.textContent = words[wordRand];

  easy.addEventListener("click", () => {
    time = levels.low;
    stageTime.textContent = time;
  });
};

const winOrLoss = () => {
  if (input.value === displayWord.textContent) {
    mgs.textContent = "won";

    return true;
  } else {
    return false;
  }
};
const validate = () => {
  if (winOrLoss()) {
    isPlaying = true;
    time = stageTime.textContent;
    input.value = "";
    result++;
    startGame();
  }
  result === -1 ? (score.textContent = 0) : (score.textContent = result);
};

const countDown = () => {
  time > 0 ? time-- : time === 0 ? (isPlaying = false) : "";
  countdown.textContent = time;
};

const gameUpdate = () => {
  if (time === 0 && !isPlaying) {
    mgs.textContent = "Game Over";
    result = -1;
  }
};
window.addEventListener("load", playGame);
