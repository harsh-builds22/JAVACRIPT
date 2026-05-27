
/*
   Client server architecture


  client --------------->request --------->    server
  client  <---------------response <--------   server 


  data in format of json generally.

  before json[javaScript Object Notation], data was in format of xml[Extensible Markup Language], but it was very difficult to parse and read, so json came into picture,
 it is very easy to read and parse.  

  json is a string, it is not a data type, it is a format of data, it is a way to represent data in a structured way.



*/


//  obj expample

let obj  = {
    name:"harsh",
age:19,
city:"delhi",
isMarried:false,
}



// json example
   //  typeof(json)  is object
 
let json22 = {
    "name":"harsh",
    "age":19,
    "city":"delhi",
    "isMarried":false
}

console.log(json22);
console.log(json22.name);
console.log(json22.age);
console.log(json22.city);
console.log(json22.isMarried);

  let json2 = [
    {
    "name":"harsh",
    "age":19,
    "city":"kota",
    "isMarried":false    

    },

     {
    "name":"ayan",
    "age":19,
    "city":"delhi",
    "isMarried":false    

    },

     {
    "name":"naitik",
    "age":18,
    "city":"jodhpur",
    "isMarried":false    

    }

  ]




// Number, string, boolean, null, array, object are data types in json


 //  .json  ---->very strict format, it should be in double quotes, it should be in key value pair, it should be in curly braces, it should be in square brackets for array,
 //  it should be in comma separated values for multiple key value pairs.




 //  json verson as string
 let jsonString = `{
  "name": "swati",
  "age": 25,
  "city": "mumbai",
  "isMarried": true
}`
 

console.log(jsonString);  

//  when u want to convert json string to json object, we use JSON.parse() method
let jsonObject = JSON.parse(jsonString);
console.log(jsonObject);
console.log(jsonObject.name);
console.log(jsonObject.age);
console.log(jsonObject.city);
console.log(jsonObject.isMarried);



//  when u want to convert json object to json string, we use JSON.stringify() method

let jsonString2 = JSON.stringify(jsonObject);
console.log(jsonString2);
console.log(typeof jsonString2); // string



//  Practice question 

let arr = [
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
      "name": "Deckow-Crist",
      "catchPhrase": "Proactive didactic contingency",
      "bs": "synergize scalable supply-chains"
    }
  }
]


console.log(arr[0].name);
console.log(arr[0].address.city);
console.log(arr[0].company.name);
console.log(arr[1].name);
console.log(arr[1].address.city);
console.log(arr[1].company.name);





//    API

// API stands for Application Programming Interface, 
// it is a set of rules and protocols for building and interacting with software applications.
//  It allows different software applications to communicate with each other, it is a way for different software applications to interact with each other,
//  it is a way for different software applications to share data and functionality with each other.




//eg
 
let response = fetch('https://jsonplaceholder.typicode.com/users/2');
console.log(response); 
// it will return a promise, because it is an asynchronous operation, 
// it will take some time to get the response from the server, so it will return a promise,
//  which will be resolved when the response is received from the server.


//   modern method

async function getData(){
  let response = await fetch('https://jsonplaceholder.typicode.com/users/1');
  console.log(await response.json()); 
}
getData();


