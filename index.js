const angles = document.querySelectorAll(".angle");
const triangleBtn = document.querySelector(".check_triangle_btn");
const triangleText = document.querySelector(".triangle_message");

triangleBtn.addEventListener("click", function analyseTriangle() {
  const sumOfTriangles = sum(angles[0].value, angles[1].value, angles[2].value);
  if (sumOfTriangles === 180) {
    isTriangleConclusion("Triangle");
  } else {
    isTriangleConclusion("Not a Triangle");
  }
});

function sum(angleOne, angleTwo, angleThree) {
  const total = Number(angleOne) + Number(angleTwo) + Number(angleThree);
  return total;
}

function isTriangleConclusion(txt) {
  triangleText.innerText = txt;
}
