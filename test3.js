/* let a = [5,6,7];
let b = [3,6,10];
 */
let a = [17,28,30];
let b = [99,16,8];

// Complete the compareTriplets function below.
function compareTriplets(a, b) {
    //console.log(a,b);

    let a_res=0;
    let b_res=0;
    let result=[];

    for (const key in a) {
        //console.log(key);
        //console.log(a[key]);
        
        //console.log(b[key]);
        
        if (a[key] > b[key]) {
            //a_res.push(1);
           a_res +=1;
        }

        if (a[key] < b[key]) {
            //b_res.push(1);
            b_res += 1;
        }
    }
    

    //console.log(a_res);
    //console.log(b_res);
   
    result[0] = a_res;
    result[1] = b_res;
     
   //console.log(result);
    return result;
}

compareTriplets(a,b);

