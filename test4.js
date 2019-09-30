// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
    //console.log(n);
     
    let matchCheck=[];
    let pairInsert=[];


    ar.forEach(val => {
        //console.log(val);
        
        if (matchCheck.indexOf(val) != -1) {
            //console.log("exist");

            if (!pairInsert.includes(val)) {
                pairInsert.push(val);
            }


        }else{
            //console.log("not exist");
            matchCheck.push(val);
        }

    });

    //console.log(matchCheck);
    
    //console.log(pairInsert);

    return pairInsert.length;
    
}
//let ar = [1,2,1,2,1,3,2];
//let ar = [10,20,20,10,10,30,50,10,20]; //[20,10,10,10,20] [20,10,]
let ar = [1,1,3,1,2,1,3,3,3,3]; //[20,10,10,10,20] [20,10,]

let n=7;

console.log(sockMerchant(n, ar));




