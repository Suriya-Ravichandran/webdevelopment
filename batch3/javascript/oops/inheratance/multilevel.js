class bike{
    duke(){
        console.log("ready to race")
    }
}

class albin extends bike{
    key(){
        console.log("take a key")
    }
}
class kevin extends albin{

}

ke= new kevin()

ke.duke()
ke.key()