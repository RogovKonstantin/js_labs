function subtract() {
    var firstNumber = parseFloat(document.getElementById('firstNumber').value);
    var secondNumber = parseFloat(document.getElementById('secondNumber').value);
    var result = firstNumber - secondNumber;
    document.getElementById('result').innerHTML = result;
}