class data{
    // hello(){
    //     console.log("Hello world !!")
    // }

    constructor(name,email){
        this.name=name
        this.email=email
    }
    
    getname(){
        return this.name
    }

}


d=new data("foo","foo@gmail.com")

console.log(d.getname())