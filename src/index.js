var textarea = document.getElementById("code");
var n = document.getElementById("n");
var reset = document.getElementById("reset");
var code = textarea.value;
var output = document.querySelector(".output");
var solution = document.getElementById("solution");


function drawOutput() {
  output.innerHTML = textarea.value;
}

reset.addEventListener("click", function() {
  textarea.value = code;
  drawOutput();
});

solution.addEventListener("click", function() {
  textarea.value = '<p>cifrado</p>';
  drawOutput();
});

textarea.addEventListener("input", drawOutput);
window.addEventListener("load", drawOutput);