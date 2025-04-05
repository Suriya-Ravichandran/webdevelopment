class Parent{
    money(){
        console.log("Take money")
    }
}

class Child extends Parent{
     girlfriend(){
        console.log("Going for long drive")
     }
}

class Child2 extends Parent{
    car(){
        console.log("Enjoy the Ride")
    }
}

class Child1_Son extends Child(){
    school(){
        console.log("I am going school")
    }
}

chson=new Child1_Son()

chson.girlfriend()
chson.money()