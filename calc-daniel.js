window.onload = function () {

  // set up page elements
  var answer = document.getElementById("answer");
  answer.innerHTML = "0";

  // events
    // click submit button -> do math
      var submit = document.getElementById("submit");
      submit.addEventListener("click", function () {
        var inputX = document.getElementById("inputX").value;
        var op     = document.getElementById("operator").value;
        var inputY = document.getElementById("inputY").value;

        var array  = [ ]
        array.push(inputX, op, inputY);
        answer.innerHTML = eval(array[0] + array[1] + array[2]);
      });

      // IN PROGRESS: put math into own function; call function on click event
      // function doMath() {
      //   array.push(inputX, op, inputY);
      //   answer.innerHTML = eval(array[0] + array[1] + array[2]);
      // // }

    // click CE button -> clear all fields
      var CE           = document.getElementById("clear");
      CE.addEventListener("click", function() {
        answer.innerHTML = "0";
        var numberFields = document.getElementsByClassName("number");
        var i;
        for (i = 0; i < numberFields.length; i++) {
          numberFields[i].value = ""
        };
        var inputX = document.getElementById("inputX").focus();
      });
}
