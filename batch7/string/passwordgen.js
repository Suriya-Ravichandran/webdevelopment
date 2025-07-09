password="helloworld"
password=password.slice(0,5)
password=password.split("").reverse().join("")
saltkey="dfdsafshgushfbg"
password=saltkey+password+saltkey
password=password.replace("a","z")
password=password.replace("d","$")

saltpassword=password
console.log(saltpassword)
