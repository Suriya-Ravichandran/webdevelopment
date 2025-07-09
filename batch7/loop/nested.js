// database data

function login(){
    verifyuser="foo"
    verifypass="foo@123"

    username=document.getElementById("username").value
    password=document.getElementById("password").value

    if(username==verifyuser){
        if(password==verifypass){
            document.getElementById("msg").innerHTML="Login success"
        }
        else{
             document.getElementById("msg").innerHTML="Incorrect password"
        }
    }else{
        document.getElementById("msg").innerHTML="User Not found"
    }
    
}


