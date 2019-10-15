
function alternatingChar(s){
    let result=0;

    if (s.length >=1 && s.length <= 100000) {
        //continue    
        let arr=s.split('');
        //console.log(arr);
        //console.log(typeof(arr));
        
        //console.log(arr.join(""));
        //console.log(typeof (arr.join("")));
        
        let past=arr[0];
        //console.log(past);
        
        arr=arr.filter((item,key)=>{
            //console.log(item);
            //console.log(key);
            if (item !== past && key !=0) {
                past=item;
                return item;
            }
            
        });

        //console.log(arr);
        //result=[s.charAt(0),...arr];
        result=s.length-[s.charAt(0),...arr].length;

    }

    return result;

}

//let str = "AAAA";
//let str = "AAABBB";
//let str = "AAABBB";
//let str = "BABABA";
let str = "ABABABAB";
console.log(alternatingChar(str));
