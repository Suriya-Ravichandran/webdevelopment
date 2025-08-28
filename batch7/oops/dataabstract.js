class User{
    #name
    #age

    constructor (name,age){
        this.#name=name
        this.#age=age
    }

    getname(){
        return this.#name
    }
    setname(name){
        this.#name=name
    }
     getage(){
        return this.#age
    }
    setage(age){
        this.#age=age
    }

}

h1=new User("foo",35)

console.log(h1.getname())
console.log(h1.getage())
h1.setage(23)
console.log(h1.getage())