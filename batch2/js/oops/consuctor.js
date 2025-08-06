// class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  setname(name){
    this.name=name
  }

  getname(){
    return this.name
  }

}


// object creations
const person1 = new Person("Alice", 30);

console.log(person1.getname())

person1.setname("suriya")

console.log(person1.getname())