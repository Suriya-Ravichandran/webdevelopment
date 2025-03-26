const { verify } = require('node:crypto');
const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter User name: ", (name) => {
  rl.question("Enter password: ", (password) => {  
        // database data
        verifyuser="Arul"
        verifypassword="password@123"
        if(name==verifyuser){
            if(password==verifypassword){
                console.log("Welcome "+name)
            }else{
                console.log("Incorrect password")
            }
        }else{
            console.log("User Not Found")
        }
      rl.close();
    });
  });



