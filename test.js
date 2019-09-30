function simpleArraySum(ar) {
    /*
     * One way to solution
     */
    let sum=0;
    ar.forEach((ele)=>{
        //console.log(ele);
        sum +=ele;
    });

    //console.log(sum);
    return sum;

}


let arr=[1,2,3];

console.log(simpleArraySum(arr))

console.log(arr.reduce(simpleArraySum2, 0));

function simpleArraySum2(ar,result) {
    /*
     * second way
     */
  
     return ar+result;

}