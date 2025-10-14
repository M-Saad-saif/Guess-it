let input = document.querySelector("#input");
let validationPara = document.querySelector("#validation");
let guess_area = document.querySelector("#guessesNumbers");
let chancespara = document.querySelector("#chances");
let resultMsg = document.querySelector("#result-msg");
let submit_btn = document.querySelector("#submitBtn");
let restartBtn = document.querySelector("#restartBtn");
let playagainBtn = document.querySelector("#playagainBtn");
let first_interface = document.querySelector(".first-interface");
let mob_first_interface = document.querySelector(".mob-first-interface");

let totalChances = 6;
let randomNum = Math.floor(Math.random() * 100 + 1);
let numberOFguess = [];

validationPara.style.display = "none";
resultMsg.style.display = "none";
playagainBtn.style.display = "none";

chancespara.innerHTML = totalChances;

first_interface.addEventListener("click", () => {
  first_interface.style.display = "none";
});

mob_first_interface.addEventListener("click", () => {
  mob_first_interface.style.display = "none";
});

submit_btn.addEventListener("click", () => {
  let user_guess = parseInt(input.value);
  Rules(user_guess);
});

function Rules(user_guess) {
  if (isNaN(user_guess)) {
    validationPara.style.display = "block";
    validationPara.innerHTML = "⚠️ Enter a valid number";
  } else if (user_guess < 1 || user_guess > 100) {
    validationPara.style.display = "block";
    validationPara.innerHTML = "⚠️ Enter a number between 1 - 100";
  } else {
    validationPara.style.display = "none";
    numberOFguess.push(user_guess);
    input.value = "";
    guess_area.textContent = numberOFguess.join(", ");
    totalChances--;
    chancespara.textContent = totalChances;

    situation(user_guess);
  }
}

function situation(user_guess) {
  if (randomNum === user_guess) {
    resultMsg.style.display = "block";
    resultMsg.innerHTML = "😄Congragulations! You Won";
    submit_btn.disabled = true;
    playagainBtn.style.display = "block";
  } else if (totalChances === 0) {
    resultMsg.style.display = "block";
    resultMsg.innerHTML = `😕Ohh! You Lose. Number was ${randomNum}`;
    playagainBtn.style.display = "block";
    submit_btn.disabled = true;
  } else if (user_guess > randomNum) {
    resultMsg.style.display = "block";
    resultMsg.innerHTML = "⬆️Too High";
  } else if (user_guess < randomNum) {
    resultMsg.style.display = "block";
    resultMsg.innerHTML = "⬇️Too Low";
  }
}
console.log(randomNum);

restartBtn.addEventListener("click", () => {
  totalChances = 6; // reset first
  numberOFguess = [];
  randomNum = Math.floor(Math.random() * 100 + 1);

  chancespara.textContent = totalChances;
  guess_area.textContent = "";
  resultMsg.style.display = "none";
  resultMsg.textContent = "";
  validationPara.style.display = "none";
  input.value = "";
  submit_btn.disabled = false;
  playagainBtn.style.display = "none"

  console.log("New random number:", randomNum);
});

playagainBtn.addEventListener("click", () => {
  restartBtn.click();
  playagainBtn.style.display = "none";
});
