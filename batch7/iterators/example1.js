fruits=["apple","mango","orange"]

user={name:"foo",age:23}

const keys = Object.keys(user);
console.log(keys)
for(let i=0;i<keys.length;i++){
    console.log(user[keys[i]])
}

// for (x of fruits){
//     console.log(x)
// }

// console.log(user)

// for(x in user){
//     console.log(user[x])
// }