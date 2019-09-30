// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
    //console.log(ar);

    let match=[];
    let get=[];
    let result=[];
    //[10,20,20,10,10,30,50,10,20];
    ar.forEach((v,i) => {
        //console.log(v);
       // if (match.indexOf(v) != -1) {
        if (match.indexOf(v) != -1) {
            //console.log("yes");
            get.push(v);
        }else{
            //console.log("no");
            match.push(v);
        }

       // console.log(get);
        
       if (get[v]) {
           result.push(v)
       }

        /* console.log(match);
        console.log(get); */
    });
    
   console.log(get);
    //console.log(result);

    return result.length;
    

}
//let ar = [1,2,1,2,1,3,2];
let ar = [10,20,20,10,10,30,50,10,20];

let n=7;

console.log(sockMerchant(n, ar));




