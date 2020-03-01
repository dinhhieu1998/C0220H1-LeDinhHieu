let num1 = document.getElementById(  "num1");
let num2 = document.getElementById( "num2");
let total;
let result = document.getElementById( "result");


function Add() {
 total = num1.value*1 + num2.value*1;
    result.innerText = total;
}
function Sub() {
    total = num1.value - num2.value;
    result.innerText = total;
}
function Mul() {
    total = num1.value * num2.value;
    result.innerText = total;
}
function Div() {
    total = num1.value / num2.value;
    result.innerText = total;
}
