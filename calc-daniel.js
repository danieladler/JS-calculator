window.onload = function () {

  // styling
  document.body.style.backgroundColor = "rgba(10, 44, 66, 0.66)"
  document.body.style.width = "800px"
  document.body.style.minWidth = "600px"
  document.body.style.maxWidth = "800px"
  document.body.style.margin = "0 auto"

  // set up page elements
  var answer = document.getElementById("answer");
  answer.innerHTML = "0";
  answer.style.border      = "1px solid black";
  answer.style.width       = "100%";
  answer.style.paddingLeft = "10px";
  answer.style.fontSize    = "40px";

  // make elements available for math
  var inputX = document.getElementById("input-x").innerHTML;
  var op     = document.getElementById("operator").innerHTML;
  var inputY = document.getElementById("input-y").innerHTML;
  var array  = []

  // math functions
    // TEST INPUTS:
    inputX = 50
    // console.log(inputX)
    op = "+"
    inputY = 49
    // console.log(inputY)

  array.push(inputX, op, inputY);
  answer.innerHTML = eval(array[0] + array[1] + array[2]);
}
