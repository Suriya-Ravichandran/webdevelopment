class Parent{
    money(){
        console.log("Take money")
    }
}

class Child extends Parent{
    toy(){
        console.log("I am play with my new toy")
    }
}

ch1=new Child()

ch1.money()
ch1.toy()
