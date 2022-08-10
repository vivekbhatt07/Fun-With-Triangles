const quizForm = document.querySelector(".form");
const submitBtn = document.querySelector(".submit_btn");
const scoreMessage = document.querySelector(".score_message");

const correctAnswer = ["90°", "right angled"];

submitBtn.addEventListener("click", function validateScore() {
  const data = new FormData(quizForm);
  let index = 0;
  let score = 0;
  for (let value of data.values()) {
    if (value === correctAnswer[index]) {
      score = score + 1;
    }
    index = index + 1;
  }
  scoreMessage.innerText = `The Score is ${score}`;
});
