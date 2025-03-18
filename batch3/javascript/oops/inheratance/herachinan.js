class bike{
    duke(){
        console.log("ready to race")
    }
}

class albin extends bike{
    albin(){
        console.log("i am albin")
    }
}
class kevin extends albin{
    kevin(){
        console.log("i am kevin")
    }
}

class foo extends kevin{

}


f=new foo()

f.albin()
f.kevin()
f.duke()


