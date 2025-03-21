class User{
    constructor(name,email,password){
        this.name=name
        this.email=email
        this.password=password
    }

    setname(name){
        this.name=name
    }
    getname(){
        return this.name
    }

    setemail(email){
        this.email=email
    }
    getemail(){
        return this.email
    }


    setpassword(password){
        this.password=password
    }
    getpassword(){
        return this.password
    }

}

u1=new User("foo","foo@gmail.com","foo@0123")

console.log(u1.getname())
console.log(u1.getemail())
console.log(u1.getpassword())


u2=new User("boo","boo@gmail.com","boo@0123")

console.log(u2.getname())
console.log(u2.getemail())
console.log(u2.getpassword())


console.log(u1.getname())

u1.setname("fooboo")
console.log(u1.getname())