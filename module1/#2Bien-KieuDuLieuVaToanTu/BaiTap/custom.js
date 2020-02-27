
function show() {
    var Amount = document.getElementById("Amount");
    var from = document.getElementById("from");
    var to = document.getElementById("to");
    var result = document.getElementById("result");
    var total;
    if(to.value === "VietNam"){
        total = alert(Amount)*23000;
    }else if (to.value === "Ho Chi Minh"){
        total = 3*5*2
    }else if(to.value === "Ha Noi"){
        total = 1+2+3;
    }
    result.innerText = total;
}