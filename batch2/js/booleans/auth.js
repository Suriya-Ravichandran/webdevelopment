

auth=(username,password)=>{
    verifyuser="foo"
    verifypass="foo@098"

    if (username==verifyuser){
        if(password==verifypass){
            return true
        }
        else{
            return false
        }
    }
    else{
        return false
    }
}


authenticate=auth("foo","foo@098")

if (authenticate){
    console.log("Login success")
}
else{
    console.log("Login failed")
}