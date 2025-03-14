number=[1,2,3,4,5,6,7,8,9,10]
odd=[]
even=[]
square=[]

const evenmap=number.map(find_even_and_odd_num)
// const oddmap=number.map(findoddnum)
const squaremap=even.map(findsquareofeven)

function find_even_and_odd_num(num){
    if(num%2==0){
        even.push(num)
    }
    else if(num%2!=0){
        odd.push(num)
    }
}

function findsquareofeven(num){
    square.push(num*num)

}

// function findoddnum(num){
//     if(num%2!=0){
//         odd.push(num)
//     }
// }

console.log(even)
console.log(square)
console.log(odd)


