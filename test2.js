/* 
ForEach vs for in

*/    

let arr=[1,2,3,5,6];

arr.forEach((val,index)=>{
    console.log(val,index);         
})
    

for (const key in arr) {
    console.log(arr[key]);  
}



for (const i of arr) {
    console.log(i);
    
} 



const arr1 = ['a', 'b', 'c'];

arr1.test="bad";
//arr1[3]='bad';
console.log(arr1);

arr1.forEach((v,i)=>{
    console.log(v);    
})

console.log("For Loop.....");


for (let i = 0; i < arr1.length; i++) {
    const element = arr1[i];
    console.log(element);    
}

console.log("for of Loop.....");

for (const i of arr1) {
    console.log(i);
    
}


console.log("For in for object in array");

for (const key in arr1) {
    console.log(arr1[key]);
}


console.log("Object loop..........................");

const obj={
    name:"ganesh",
    age:25,
    add:'malad'
};

for (const key in obj) {
    console.log(obj[key]);
    
}
 

console.log("Loop in async await..........................");

async function run(){
    const arr = ['a', 'b', 'c'];
   /*  arr.forEach(ele=>{

        await new Promise((resolve)=>setTimeout(resolve, 1000));

        console.log(ele);
        

    });
 */

  for (const cl of arr) {
      await new Promise(resolve=>setTimeout(resolve, 1000));

      console.log(cl);
      
  }  

}

 run();
