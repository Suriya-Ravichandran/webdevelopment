class GrandParent{
    land(){
        console.log("Get a land")
    }
}

class Parent extends GrandParent{
    money(){
        console.log("Take money")
    }
}

class Child extends Parent{
    toy(){
        console.log("Playing with a toys")
    }
}

ch1=new Child

ch1.land()
ch1.money()
ch1.toy()