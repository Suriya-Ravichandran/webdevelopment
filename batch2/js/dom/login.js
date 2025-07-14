// Hide both alerts first
document.querySelector(".alert-danger").style.display = "none";
document.querySelector(".alert-success").style.display = "none";

function login(){
    let verifyusername="foo"
    let verifypassword="foo@123"
    let username=document.getElementById("username").value
    let password=document.getElementById("password").value
    
    if(verifyusername==username){
        if (verifypassword==password){
            document.getElementById("successmsg").innerHTML="Welcome"+" "+username
            document.querySelector(".alert-success").style.display = "block";
        }
        else{
            document.getElementById("errormsg").innerHTML="Incorrect password"
            document.querySelector(".alert-danger").style.display = "block";
        }
    }
    else{
            document.getElementById("errormsg").innerHTML="User Not Found"
            document.querySelector(".alert-danger").style.display = "block";
        }
    
}