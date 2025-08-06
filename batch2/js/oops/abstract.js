class AbstractVehicle{


    constructor(){
        if (new.target===AbstractVehicle){
            throw new TypeError("cannot instantite abstact class directly")
        }
    }

    drive(){
        throw new Error("drive() method must be implemented in the derived class")
    }
}

class car extends AbstractVehicle{
    drive(){
        console.log("Drive a new car")
    }
}

const mycar=new car()
mycar.drive()
