data={
    name:"Arul",
    age:"23",
    sleep:function (){
        console.log("I am going to sleep")
    },
    eat: ()=>{
        console.log("I am going to eat")
    }
}

console.log(data.name)
console.log(data["name"])

x="name"

console.log(data[x])

data.sleep()

data.eat()