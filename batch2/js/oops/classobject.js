class Student{
    Student(s1,s2){
        this.s1=s1
        this.s2=s2
    }

    hello() {
        this.s2="hoo"
        console.log("Hello world")
    }
}

const d1=new Student("foo","boo")

console.log(d1.s2)
d1.hello()
console.log(d1.s2)