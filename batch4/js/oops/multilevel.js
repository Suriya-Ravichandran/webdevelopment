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

class Child2 extends Child{
    shirt(){
        console.log("I am waring new shirt")
    }
}
ch2=new Child2()
ch2.toy()
ch2.money()

