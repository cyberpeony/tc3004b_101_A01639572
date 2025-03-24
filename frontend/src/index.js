async function calculate(operator) {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;

    const operatorDisp = document.getElementById("operator");

    if (operator == "+"){
        const response = await fetch(`http://localhost:8080/add?num1=${num1}&num2=${num2}`);
        const result = await response.json();
        operatorDisp.innerText = operator;
        document.getElementById("result").innerText = "Result: " + result.result;

    }else if (operator == "-"){
        const response = await fetch(`http://localhost:8080/sub?num1=${num1}&num2=${num2}`);
        const result = await response.json();
        operatorDisp.innerText = operator;
        document.getElementById("result").innerText = "Result: " + result.result;
    }   
}

function resetFields(){
    document.getElementById("num1").value ="";
    document.getElementById("num2").value ="";
    document.getElementById("operator").innerText ="";
    document.getElementById("result").innerText ="Result: ";}