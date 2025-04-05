class studentBio{
    name=""
    email=""


    setname(data){
        this.name=data
    }
    setemail(email){
        this.email=email
    }
    getname(){
        return this.name
    }

    getemail(){
        return this.email
    }

}

s1= new studentBio()
s2=new studentBio()

s1.setname("Arul")
s2.setname("suriya")
console.log(s1.name)
console.log(s1.getname())
console.log(s2.getname())