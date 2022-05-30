console.log("it works");

const inputs = document.querySelectorAll(".inputs");
const div = document.querySelector("#colorDiv");
const redP = document.getElementById("redValue");
const greenP = document.getElementById("greenValue");
const blueP = document.getElementById("blueValue");

const changeFunction = () => {
  div.style.backgroundColor = `rgb(${inputs[0].value},${inputs[1].value},${inputs[2].value})`;
  redP.innerText = inputs[0].value;
  greenP.innerText = inputs[1].value;
  blueP.innerText = inputs[2].value;
};

changeFunction();

inputs.forEach((input) => {
  input.addEventListener("change", changeFunction);
});
// inputs[0].addEventListener("change", changeFunction);
// inputs[1].addEventListener("change", changeFunction);
// inputs[2].addEventListener("change", changeFunction);