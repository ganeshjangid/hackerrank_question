// Complete the sockMerchant function below.
function sockMerchant(ar, n) {

    let sort=ar.sort();
    console.log(sort); 

    var counter = 0;
    for (var i = 0; i < ar.length-1; i++) {
        if (ar[i] === ar[i + 1]) {
            counter++;

            i++;
        }
    }
    return counter;
    
}


//let ar = [1,2,1,2,1,3,2];
let ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]; 

let n = 7;

console.log(sockMerchant(ar, n));

