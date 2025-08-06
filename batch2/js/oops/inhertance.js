class Parent{
    money(){
        console.log("Take money")
    }
}

class Child extends Parent{
    dress(){
        console.log("This my new dresss")
    }
}

const ch1=new Child

ch1.money()
ch1.dress()
