const perpendicularLength = document.querySelector("#perpendicular");
const baseLength = document.querySelector("#base");
const hypotenuseBtn = document.querySelector(".check_hypotenuse_btn");
const hypotenuseText = document.querySelector(".hypotenuse_text");

hypotenuseBtn.addEventListener("click", function calculateHypotenuse() {
  if(!(Number(perpendicularLength.value) === 0) && !(Number(baseLength.value) === 0)) {
    const hypotenuse = hypotenuseCalc(
      perpendicularLength.value,
      baseLength.value
    );
    hypotenuseText.innerText ="Hypotenuse is : "+ hypotenuse;
  } else {
    hypotenuseText.innerText = "Invalid Data Entered";
  }

});

function hypotenuseCalc(num1, num2) {
  const squareNum1 = Math.pow(Number(num1), 2);
  const squareNum2 = Math.pow(Number(num2), 2);
  const squareSum = squareNum1 + squareNum2;
  const sumSquareRoot = Math.sqrt(squareSum).toFixed(2);
  return sumSquareRoot;
}
