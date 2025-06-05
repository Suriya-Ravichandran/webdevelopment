username="root"
password="suriya@123"
verify_username="root"
verify_password="suriya@123"
if(username==verify_username){
    if(password==verify_password){
        console.log("Login success")
    }else{
        console.log("Incorrect password")
    }
}else{
    console.log("User Not found")
}