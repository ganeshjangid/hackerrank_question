

function countingValleys(n, s) {

    let draw="-";
    for (let i = 0; i < n.length; i++) {
       console.log(n[i]);
       
       if (n[i] === "U") {
           draw +="/";
       }else{
           draw += '|';
       }
        
    }

    console.log(draw);
    
}


let arr = ['U','D','D','D','U','D','U','U'];

/* 
UDDDUDUU // 1
DDUUDDUDUUUD  // 2*/

let step=8;

console.log(countingValleys(arr,step));
