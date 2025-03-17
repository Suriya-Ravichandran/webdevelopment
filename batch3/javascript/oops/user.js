class CSC{
    hello="helloworld"
    albin(){
        console.log('i am albin')
    }

    suriya(){
        console.log("i am suriya")
    }

    loop(){
        for(var i=0;i<=10;i++){
            console.log("loop is runing "+i)
        }
    }

}


teacher= new CSC()

teacher.albin()
console.log(teacher.hello)
teacher.suriya()
teacher.loop()
