class Hero{
    bike1 = "Splender"   
    bike2="xpluse" 
    hello=()=>{
        console.log("Hello world")
    }
    add=(num1,num2)=>{
        return num1+num2
    }
}

s1=new Hero()

s1.hello()

result=s1.add(20,30)
console.log(result)