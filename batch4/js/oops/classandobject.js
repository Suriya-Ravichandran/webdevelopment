class BMW{

    car1="BMW PRO"
    car2="BMW MAX"
    car3="BMW M4GTS"
    static Hello(){
        let data="Hello world"
        return data + " India"
    }

    add(value1,value2){
        let result=value1+value2
        return result
    }

}

Arul = new BMW()

console.log(BMW.Hello())
// console.log(BMW.add(20,30))

// console.log(Arul.car1)
// console.log(Arul)
// console.log(Arul.Hello())
console.log(Arul.add(20,30))
