document.getElementById("text").innerHTML="Welcome to Simple Calculator";

function add(){
    val1=Number(document.getElementById("Num1").value)
    val2=Number(document.getElementById("Num2").value)
    result=val1+val2
    document.getElementById("result").innerHTML="Result: "+result
}
function sub(){
    val1=Number(document.getElementById("Num1").value)
    val2=Number(document.getElementById("Num2").value)
    result=val1-val2
    document.getElementById("result").innerHTML="Result: "+result
}
function mul(){
    val1=Number(document.getElementById("Num1").value)
    val2=Number(document.getElementById("Num2").value)
    result=val1*val2
    document.getElementById("result").innerHTML="Result: "+result
}
function div(){
    val1=Number(document.getElementById("Num1").value)
    val2=Number(document.getElementById("Num2").value)
    result=val1/val2
    document.getElementById("result").innerHTML="Result: "+result
}