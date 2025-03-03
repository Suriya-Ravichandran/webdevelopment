even=[]
odd=[]
sumof=[]
powerten=[]
let j=0
let d=0
for(i=0;i<10;i++){
    if(i%2==0){
       even[j]=i
       j++
    }
    else if(i%2!=0){
        odd[d]=i
        d++
    }
    
}

for(i=0;i<even.length;i++){
    sumof[i]=even[i]+odd[i]
}

for(i=0;i<sumof.length;i++){
    powerten[i]=sumof[i]*10
}

console.log(even)
console.log(odd)
console.log(sumof)
console.log(powerten)