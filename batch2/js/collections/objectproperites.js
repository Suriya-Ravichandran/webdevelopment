const student={
    name:"foo",
    sid:"01",
    dept:"BE.cs"
}

// way 1
name=student.name
console.log(name)

// way 2

name=student["name"]
console.log(name)

// way 3

x="name"
y="sid"

console.log("Sid:"+student[y]+" "+"Sname:"+student[x])
//  add values
student.nationality="India"

console.log(student)

// delete values

delete student["dept"]
console.log(student)

