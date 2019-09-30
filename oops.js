class Person{

    constructor(name,gender){
        this.name=name;
        this.gender=gender;
    }

    getPersonName(){
        return this.name;
    }

    getPersonGender(){
        return this.gender;
    }

};


class Male extends Person{

    constructor(name){
        super(name,"male");
    }
};   


class Female extends Person{

    constructor(name){
        super(name,"Female");
    }
}

const m = new Male("Ganesh");
const f= new Female("Sheeta");
