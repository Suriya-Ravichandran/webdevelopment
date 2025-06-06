// way 1 to create a array
const fruits=["apple","banana","graphs","orange"]

console.log(fruits)

// way 2

const cars =[]

cars[0]="honda"
cars[1]="swift"
cars[2]="mustuag"

console.log(cars)

// way3

const vegitables= new Array("Tomato","cabage","dram stick")

console.log(vegitables)

// accessing array

console.log(fruits[0])

for(x of fruits){
    console.log(x)
}
for (x in fruits){
    console.log(fruits[x])
}

// update arrays

fruits[0]="green apple"
console.log(fruits)

