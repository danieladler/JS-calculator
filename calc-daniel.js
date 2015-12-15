window.onload = function () {

  // styling
  document.body.style.backgroundColor = "rgba(100, 163, 203, 0.35)"
  document.body.style.width = "800px"
  document.body.style.minWidth = "600px"
  document.body.style.maxWidth = "800px"
  document.body.style.margin = "0 auto"
  document.body.style.fontFamily = "Helvetica Neue"

  // set up page elements
  var answer = document.getElementById("answer");
  answer.innerHTML = "0";
  answer.style.border      = "1px solid black";
  answer.style.width       = "100%";
  answer.style.paddingLeft = "10px";
  answer.style.fontSize    = "40px";

  // events

    // click submit button -> do math
      var submit = document.getElementById("submit");
      submit.addEventListener("click", function () {
        var inputX = document.getElementById("inputX").value;
        var op     = document.getElementById("operator").value;
        var inputY = document.getElementById("inputY").value;
        console.log(inputX);
        console.log(inputY);

        var array  = [ ]
        array.push(inputX, op, inputY);
        answer.innerHTML = eval(array[0] + array[1] + array[2]);
      });

      // IN PROGRESS: put math into own function; call function on click event
      // function doCalcMath() {
      //   array.push(inputX, op, inputY);
      //   answer.innerHTML = eval(array[0] + array[1] + array[2]);
      // // }

    // click CE button -> clear all fields

}
