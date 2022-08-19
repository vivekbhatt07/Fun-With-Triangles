const angles = document.querySelectorAll(".angle");
const triangleBtn = document.querySelector(".check_triangle_btn");
const triangleText = document.querySelector(".triangle_message");

triangleBtn.addEventListener("click", function analyseTriangle() {
  if((Number(angles[0].value) > 0) && (Number(angles[1].value) > 0) && (Number(angles[2].value) > 0)){
    const sumOfTriangles = sum(angles[0].value, angles[1].value, angles[2].value);
    if (sumOfTriangles === 180) {
      isTriangleConclusion("Triangle");
    } else {
      isTriangleConclusion("Not a Triangle");
    }
  } else {
    isTriangleConclusion("Invalid Data Entered");

  }

});

function sum(angleOne, angleTwo, angleThree) {
  const total = Number(angleOne) + Number(angleTwo) + Number(angleThree);
  return total;
}

function isTriangleConclusion(txt) {
  triangleText.innerText = txt;
}
