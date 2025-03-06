let add =(value1,value2)=> value1+value2;
console.log(add(20,30))

let big=(value1,value2)=>{
    if(value1>value2){
        console.log(value1,"Value 1 Big number")
    }
    else if(value1<value2){
        console.log(value2,"Value2 Big number")
    }else{
        console.log("Both are Equal")
    }
}

big(30,30)