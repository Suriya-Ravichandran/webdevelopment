class demo{
    constructor (name1,email1){
        this.name=name1
        this.email=email1
        console.log(this)
    }
    setname(name){
        this.name=name
    }
    getname(){
        return this.name
    }
    getemail(){
        return this.email
    }
}

s1=new demo("foo","foo@gmail.com")
s2=new demo("boo","boo@gmail.com")
console.log(s1)
console.log(s2)
s2.setname("fooboo")
console.log(s1)
console.log(s2)

console.log(s2.getname(),s2.getemail())
