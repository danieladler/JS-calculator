window.onload = function () {

  // set up page elements
  var answer = document.getElementById("answer");
  answer.innerHTML = "0";

  // events
    // click submit button -> do math
      var submit = document.getElementById("submit");

      function doMath(inputX,op,inputY) {
       var array = [inputX,op,inputY];
       var result = eval(array[0] + array[1] + array[2]);
       return result;
      }

      var inputX = document.getElementById("inputX");
      var op     = document.getElementById("operator");
      var inputY = document.getElementById("inputY");

      submit.addEventListener("click", function (event) {
        event.preventDefault();
        answer.innerHTML = doMath(inputX.value,op.value,inputY.value);
        inputX.value = answer.innerHTML;
      });

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
