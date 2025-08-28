class User{
    login=(email,password)=>{
        const verfiyemail="foo@gmail.com"
        const verfiypassword="foo@123"
        if(email==verfiyemail){
            if(password==verfiypassword){
                console.log("login success")
            }
            else{
                console.log("Incorrect password")
            }
        }else{
            console.log("Invaild email")
        }
    }
}

export default User;