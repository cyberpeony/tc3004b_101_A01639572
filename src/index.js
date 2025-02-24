function calculate(operator) {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    const operatorDisp = document.getElementById("operator");
    const resultDisp = document.getElementById("result");

    let result;
    if (operator == "+"){
        result = Number(num1) + Number(num2);
    }else if (operator == "-"){
        result = Number(num1) - Number(num2);
    }

    operatorDisp.innerText = operator;

    resultDisp.innerText = "Result: " + result;
}

function resetFields(){
    document.getElementById("num1").value ="";
    document.getElementById("num2").value ="";
    document.getElementById("operator").innerText ="";
    document.getElementById("result").innerText ="Result: ";
}