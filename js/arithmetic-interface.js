var Calculator = require('./../js/pingpong.js').calculatorModule;

$(document).ready(function(){
  $('#arithmetic').submit(function(event){
    event.preventDefault();
    var calculator = new Calculator("hot pink");
    var number1 = parseInt($("#number1").val());
    var number2 = parseInt($("#number2").val());
    switch ($("#operator").val()) {
      case "+":
        var additionOutput = calculator.addition(number1, number2);
        $("#math-solution").html("<p>" + additionOutput + "</p>");
        break;
      case "-":
        var subtractionOutput = calculator.subtraction(number1, number2);
        $("#math-solution").html("<p>" + subtractionOutput + "</p>");
        break;
      case "*":
        var multiplicationOutput = calculator.multiplication(number1, number2);
        $("#math-solution").html("<p>" + multiplicationOutput + "</p>");
        break;
      case "/":
        var divisionOutput = calculator.division(number1, number2);
        $("#math-solution").html("<p>" + divisionOutput + "</p>");
        break;
      default:
        break;

    }
  });
});
