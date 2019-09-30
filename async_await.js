setTimeout(() => {
    console.log('This runs after 1000 milliseconds.');
}, 1000);

/* const asyncCallOne=((a)=>{
    asyncCallTwo(()=>{
        asyncCallThree(()=>{
            asyncCallFour(()=>{
                asyncCallFive(()=>{

                })
            })
        })

    })
});

let a="ganesh";
asyncCallOne(a); */



/* 
Promises
*/

const promise=new Promise((resolve,reject)=>{

    const add=(a,b)=>a+b;

    resolve(add(10,20));

});

promise
.then((result) => {
    console.log(result);
    
}).catch((err) => {
   console.log(err);
    
});


// Async/Await
const asyncGreeting = async () => 'Greetings123';

// Promises
const promiseGreeting = () => new Promise(((resolve) => {
    resolve('Greetings');
}));

asyncGreeting().then(result => console.log(result));

promiseGreeting().then(result => console.log(result));