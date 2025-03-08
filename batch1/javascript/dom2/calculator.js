
function openbtn() {
    // Hide the button
    let btn = document.getElementById("openbtn");
    btn.style.display = "none";
    btn.style.margin=0

    // Show the main window
    let window = document.getElementById("main");
    window.style.display = "block";
}

function add(){
    let value1=document.getElementById("value1").value
    let value2=document.getElementById("value2").value
    let result=Number(value1)+Number(value2)
    document.getElementById("result").innerHTML=result
    
}

function sub(){
    let value1=document.getElementById("value1").value
    let value2=document.getElementById("value2").value
    let result=Number(value1)-Number(value2)
    document.getElementById("result").innerHTML=result
    
}

function mul(){
    let value1=document.getElementById("value1").value
    let value2=document.getElementById("value2").value
    let result=Number(value1)*Number(value2)
    document.getElementById("result").innerHTML=result
    
}

function div(){
    let value1=document.getElementById("value1").value
    let value2=document.getElementById("value2").value
    let result=Number(value1)/Number(value2)
    document.getElementById("result").innerHTML=result
    
}