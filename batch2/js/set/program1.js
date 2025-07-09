const data = new Set()

data.add("A")
data.add("A")
data.add("B")
data.add("C")
data.add("D")
data.add("C")

console.log(data.size)
console.log(data)
// console.log(data.clear())
// console.log(data)

for (x of data){
    console.log(x)
}