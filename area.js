const heightLength = document.querySelector("#height");
const basementLength = document.querySelector("#basement");
const areaBtn = document.querySelector(".check_area_btn");
const areaText = document.querySelector(".area_text");

areaBtn.addEventListener("click", function validateArea() {
  const area = areaCalc(
    Number(heightLength.value),
    Number(basementLength.value)
  );
  areaText.innerText = area;
});

function areaCalc(numOne, numTwo) {
  const product = numOne * numTwo;
  const halfOfProduct = product / 2;
  return halfOfProduct;
}
