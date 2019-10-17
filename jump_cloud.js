// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c) {

    //console.log(c);
    let jump=[];

    for (const ele of c) {
        //console.log(ele);
        if (ele !== '1') {
            jump.push(ele);
        }
    }

    console.log(jump.length-1);
    
    //console.log(Object.keys(jump));
    
    
    return jump;
    
}


//let arr = ['0' ,'0' ,'1' ,'0' ,'0' ,'1' ,'0'];
let arr = ['0' ,'0' ,'0' ,'0' ,'1' ,'0'];

console.log(jumpingOnClouds(arr));
