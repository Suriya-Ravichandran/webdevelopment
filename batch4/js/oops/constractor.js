let s1

class student{
    constructor (name,age,dept){
        this.name=name
        this.age=age
        this.dept=dept
    }

    setname(name){
        this.name=name
    }

    setage(age){
        this.age=age
    }

    setDept(dept){
        this.dept=dept
    }

    getname(){
        return this.name
    }

    getage(){
        return this.age
    }

    getdept(){
        return this.dept
    }



}


function addstudentData(){
    name=document.getElementById("name").value 
    age=document.getElementById("age").value 
    dept=document.getElementById("dept").value
    const s1=new student(name,age,dept)  
    document.getElementById("nameresult").innerHTML="Name:"+s1.getname()
    document.getElementById("ageresult").innerHTML="Age:"+s1.getage()
    document.getElementById("deptresult").innerHTML="Dept:"+s1.getdept()
}

function updatename(){
    name=document.getElementById("nameupdate").value 
    s1.setname(name)
    document.getElementById("nameresult").innerHTML="Name:"+s1.getname()

}

function updateage(){
    age=document.getElementById("ageupdate").value 
    s1.setage(age)
    document.getElementById("ageresult").innerHTML="Age:"+s1.getage()
    
}

function updatedept(){
    dept=document.getElementById("deptupdate").value 
    s1.setdept(dept)
    document.getElementById("deptresult").innerHTML="Dept:"+s1.getdept()
}




