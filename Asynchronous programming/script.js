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
