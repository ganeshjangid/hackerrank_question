class  MathmaticOperation{

    construtor(){
        console.log("This is Mathmatic recursive");
    }

    sequre(x){
        return x*x;
    }

    factorial(x){
        if (x===0 || x===1) {
            return 1;
        }
        return x * this.factorial(x-1);
    }

    static available_method(){
        return "This class has two methods, sequre and factorial";
    }


};

const obj1 = new MathmaticOperation();

console.log(obj1.sequre(5));

console.log(obj1.factorial(5));

console.log(MathmaticOperation.available_method());
