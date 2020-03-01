let number1 = document.getElementById(  "number1");
let number2 = document.getElementById( "number2");
let total;
let result = document.getElementById( "result");


function Add() {
    total = number1.value*1 + number2.value*1;
    result.innerText = total;
}
function Sub() {
    total = number1.value - number2.value;
    result.innerText = total;
}
function Mul() {
    total = number1.value * number2.value;
    result.innerText = total;
}
function Div() {
    total = number1.value / number2.value;
    result.innerText = total;
}
