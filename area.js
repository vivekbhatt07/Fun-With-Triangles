const heightLength = document.querySelector("#height");
const basementLength = document.querySelector("#basement");
const areaBtn = document.querySelector(".check_area_btn");
const areaText = document.querySelector(".area_text");

areaBtn.addEventListener("click", function validateArea() {
  if(!(Number(heightLength.value) === 0) && !(Number(basementLength.value) === 0)) {
    const area = areaCalc(
      Number(heightLength.value),
      Number(basementLength.value)
    );
    areaText.innerText = area;
  } else {
    hypotenuseText.innerText = "Invalid Data Entered";
  }

});

function areaCalc(numOne, numTwo) {
  const product = numOne * numTwo;
  const halfOfProduct = product / 2;
  return halfOfProduct;
}
