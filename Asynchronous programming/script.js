//   all indian mother are by deafult asynchronous[multitasking aap smjh sakte ho] in nature
//  js is by default synchronous programming language but it has some asynchronous features like setTimeout, setInterval, fetch, etc.


//  asynchronous programming is a programming paradigm that allows a program to perform multiple tasks at the same time without blocking the main thread. It is achieved through the use of callbacks, promises, and async/await.


//  js is a single-threaded language, which means that it can only execute one task at a time. However, 
// it can perform asynchronous tasks using the event loop and callback functions. When an asynchronous task is initiated, 
// it is added to the event queue, and the main thread continues to execute other tasks.
//  Once the asynchronous task is completed, it is removed from the event queue and executed.




//  example of asynchronous programming in js using setTimeout function

console.log("Start");
console.log("Start2");

    setTimeout(() => {
        console.log("Timeout executed");
    }, 4000);


console.log("Start3");
console.log("Start4");



 //  synchronous code run line by line .each operation must complete before the next one starts.
 // asynchronous code can start a task and move on without waiting for it to finish.



//   why do we get a promise instead of data 

let data  = fetch("https://jsonplaceholder.typicode.com/posts/1");
console.log(data); 
// this will log a promise because fetch is an asynchronous function that returns a promise.
//  The promise will eventually resolve to the data from the API, 
// but it is not available immediately. To access the data, you can use the .
// .then() method or async/await syntax to wait for the promise to resolve.


async function fetchData() {
      let data1  = await fetch("https://jsonplaceholder.typicode.com/users");
      console.log(await data1.json());
}
fetchData();

// await is only used inside async function




/* 
API call are asynchronous 
fetching data takes times.
JS doesnt want to stop everything and wait (its a single threaded language)
so instead ,it gives u promise saying ,i will give u data later when i get it.
*/





//  what is crud
//  crud stands for create, read, update, delete.


/*

crud operation  |  HTTP METHOD  | Purpose
create          |  POST         | To addd new data
read            |  GET          | get/fetch exixting data
update          |  PUT/PATCH    | To update an existing data
delete          |  DELETE       | To delete a data

*/



  
//  js is single threaded language.this means it does one thing at a time.
// suppose u want to fetch data from server.it takes 2 seconds.if we wait nrmlly ,the whole app frzes.users cant click or scroll.
    
 //               Callback -----> Promises----> async await


/* 

  explain syncroous and asynchronous programming with example

 1.synchronous 
   2.asynchronous            all synchronous code goes in main stack and asychronous in side stack,first all main stack code will excheuted first
   3.synchronous              then asynchronous code will be executed when the main stack is empty and the "event loop" will check for any asynchronous code in the side stack and execute it.
   4.synchronous             
   5.asynchronous            
   6.synchronous             
                             
*/                           



 


//   Callbacks are function that are passed as arguments to other functions and are executed after a certain event or condition is met.
//  They are commonly used in asynchronous programming to handle the results of asynchronous operations.
 

//  callback vo function hota he jisko ham as a argument pass kar rhe hote he .

function hod(name , callback){
     callback(name);
}
    function printname(name){
        console.log("hello " , name);
    }


hod("harsh sharma", printname);




function calculate (a,b, callback1){
    callback1(a,b);
}


function printsum(a,b){
    console.log("sum is " , a+b);
}

function substract(a,b){
    console.log("difference is " , a-b);
}


calculate(10,5, printsum);
calculate(10,5, substract);




function fetchData(processData){
    setTimeout(() => {
        const data = { name: "harsh sharma", age: 22 };
        processData(data);
    }, 2000);
}

function displayData(data){
    console.log("Data received: ", data);
}

fetchData(displayData);



//   example more



function fetchData1(data2 , callback2){
    setTimeout(() => {
         console.log(data2);
         callback2();
    },3000);
}


console.log("fetching data...");

/*
 fetchData1('data 1   ', giveData);

 fetchData1( giveData1);  

 function giveData(){                            u can do it by this 
     console.log("data 2 aa gya");
     giveData1()
 }

 function  giveData1(){
     console.log("data 3");
    
 }

*/

 fetchData1(' data 1', ()=>{
      fetchData1('data 2', ()=>{                     //   best method to do it
          fetchData1('data 3', ()=>{
              console.log("all data fetched");
          })
        })
    })



    '='