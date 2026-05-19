 /*  Array
   Array is a data structure that can hold multiple values at once. It is a collection of items stored at contiguous memory locations.
  The items can be of any data type, and they are accessed using an index.
  Arrays are commonly used to store lists of data, such as numbers, strings, or objects.

   Creating an Array
   You can create an array in JavaScript using square brackets [] or the Array constructor. Here are some examples:   */


   let colors = ['red', 'green', 'blue']; 
   let number = [10,50,500,400,100];

   let collect = ["red" , 50 , "blue"];


   
   /*  array are mutable
   array is a special type of object .
   type of arr is object    */
   
   
   let arr1  = [ "harsh", "naitik" , "ayan" , [18,17,19] ];
   // index        0         1          2          3
   
  
   console.log(arr1);
   console.log(arr1[0][0]);  //h
   console.log(arr1[3][1]);  //17




  //   Mutability

   let name = ["kalu", "aalu", "balu"];
    name[0] = "harsh";  // mutability

    console.log(name);



 let arr0  = [ "harsh", "naitik" , "ayan" , [18,17,19] ];

 for(let i = 0; i < arr0.length; i++){
    console.log(arr0[i]);
    for(let j = 0; j < arr0[i].length; j++){
        console.log(arr0[i][j]);
    }
 }
 

 for(let elem of arr0){
    console.log(elem)            // values dega
 }
     
    
for(let inn in arr0){
    console.log(inn)            // index dega
}





 /* Array methods

  push() - adds an element to the end of the array     ,    change in original 
  pop() - removes the last element from the array         ,    change in original 
  shift() - removes the first element from the array           ,    change in original 
  unshift() - adds an element to the beginning of the array    ,    change in original 
  indexOf() - returns the index of the first occurrence of a specified element in the array
  includes() - checks if an array contains a specified element and returns true or false           */





  let myArray = [1, 2, 3, 4, 5];

    myArray.push(6 , 6, 8); // Adds 6 to the end of the array   ,add as many u cann ,  push to karta he sath sath  array ke length bhi return karta he
    console.log(myArray); // Output: [1, 2, 3, 4, 5, 6]

   let b =  myArray.pop(); // Removes the last element (6) from the array    , remove only one at a time,  if u add (6) number anything in brackets it will remove that many element from the end of the array
    console.log(myArray , b); // Output: [1, 2, 3, 4, 5]        returnn karta he jo remove hota h , isliye b me vo save hoga jo remove hoga as return
   


    myArray.unshift(0,3); // Adds 0 to the beginning of the array    ,add as many u cann 
    console.log(myArray); // Output: [0, 3, 1, 2, 3, 4, 5]


    myArray.shift(); // Removes the first element (0) from the array  , remove only one at a time,  if u add (6) number anything in brackets it will remove that many element from the end of the array
    console.log(myArray); // Output: [3, 1, 2, 3, 4, 5]





//  slice()  
  
 let a =  myArray.slice(2, 5); // Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. 
 let c = myArray.slice(2); //  If end is not specified, it will slice until the end of the array.
  // The original array will not be modified.
  console.log(c); // Output: [2, 3, 4, 5]   , original array is not modified    
  console.log(a); // Output: [2, 3, 4]   , original array is not modified
  console.log(myArray); // Output: [3, 1, 2, 3, 4, 5]   , original array is not modified

 


  //   splice() - changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. It modifies the original array and returns an array containing the removed elements (if any).

    let d = myArray.splice(2, 3 , 10 , 11); // Removes 3 elements starting from index 2 and adds 10 and 11 at index 2. It modifies the original array and returns an array containing the removed elements.
    console.log(d); // Output: [2, 3, 4]   , original array is modified
    console.log(myArray); // Output: [3, 1, 10, 11, 5]   , original array is modified

//  jo dlt karta he vhi return karta he .




//  concat

let arr6 = [5,6]
let arr7 = [7,8]

let arr8 = arr6.concat(arr7);;
console.log(arr8); // Output: [5, 6, 7, 8]   , original arrays are not modified 

 
// spread operator  best method   important

let newArr = [...arr6 , ...arr7];
console.log(newArr); // Output: [5, 6, 7, 8]   , original arrays are not modified   




//   toString() - converts an array to a string and returns the result. The elements of the array are separated by commas in the resulting string.

let arr9 = [1, 2, 3, 4, 5];
let str = arr9.toString();
console.log(str); // Output: "1,2,3,4,5"   , original array is not modified


//  join() - joins all elements of an array into a string and returns the result. You can specify a separator to be used between the elements in the resulting string.
let arr10 = [1, 2, 3, 4, 5];    
let str2 = arr10.join("-"); // Joins the elements of the array into a string with a hyphen as a separator.
console.log(str2); // Output: "1-2-3-4-5"   , original array is not modified



//  includes() - checks if an array contains a specified element and returns true or false.

let arr11 = [1, 2, 3, 4, 5];
console.log(arr11.includes(3)); // Output: true   , original array is not modified
console.log(arr11.includes(6)); // Output: false   , original array is not modified



//   reverse() - reverses the order of the elements in an array. It modifies the original array and returns a reference to the same array.
let arr12 = [1, 2, 3, 4, 5];
arr12.reverse(); // Reverses the order of the elements in the array. It modifies the original array and returns a reference to the same array.
console.log(arr12); // Output: [5, 4, 3, 2, 1]   , original array is modified




//  find() - returns the value of the first element in the array that satisfies the provided testing function. If no elements satisfy the testing function, it returns undefined.

let arr13 = [1, 2, 3, 4, 5];
let found = arr13.find(function(elem){
   return elem === 2;

});
console.log(found); // Output: 2   , original array is not modified 






//     sorting    
//  for string    variabel.sort()  works properly

let arr14 = ["banana", "apple", "grape", "orange"];
arr14.sort();
console.log(arr14); // Output: ["apple", "banana", "grape", "orange"]   , original array is modified


let arr15 = [40, 100, 1, 5, 25, 10];
arr15.sort((a, b)=>{
    return a - b; // ascending order
   //  return b-a   descending
});



 /* Array iternatio methods or functional array method 

   map() - creates a new array populated with the results of calling a provided function on every element in the calling array. It does not modify the original array.
  filter() - creates a new array with all elements that pass the test implemented by the provided function. It does not modify the original array.
  reduce() - executes a reducer function on each element of the array, resulting in a single output value. It does not modify the original array.
  forEach() - executes a provided function once for each array element. It does not modify the original array.   */



let arr16 = [1, 2, 3, 4, 5];

let sqr  = arr16.map((elem , index)=>{       //important   ek ek element pe kaam ho or new array return ho isliye use karte he 
    console.log(elem , index);
    return elem * elem;
    // return elem %2 === 0;         give false true false true false output
});

console.log(arr16); // Output: [1, 2, 3, 4, 5]   , original array is not modified
console.log(sqr); // Output: [1, 4, 9, 16, 25]   , original array is not modified



let arr17 = [1, 2, 3, 4, 5];
  
let sqr1 = arr17.forEach((elem , index)=>{
    console.log(elem , index);
    return elem * elem;
    
});

console.log(arr17); // Output: [1, 2, 3, 4, 5]   , original array is not modified
console.log(sqr1); // Output: undefined   , forEach does not return a new array, it returns undefined




let arr18 = [1, 2, 3, 4, 5];

let sqr2 = arr18.filter((elem)=>{
    return elem % 2 === 0; // Returns a new array containing only the even numbers from the original array. It does not modify the original array.
})
console.log(sqr2); // Output: [2, 4]   , original array is not modified
console.log(arr18); // Output: [1, 2, 3, 4, 5]   , original array is not modified



let arr19 = [1, 2, 3, 4, 5];

let sum = arr19.reduce((acc , elem)=>{            // result me single valur return ho rha
    return acc + elem; // Returns the sum of all the elements in the array. It does not modify the original array.
}, 0);             // intermediate result previous me save hota he..eg acc me save hoga
console.log(sum); // Output: 15   , original array is not modified
console.log(arr19); // Output: [1, 2, 3, 4, 5]   , original array is not modified



//   question 
 
 let arr20 = [1,2,4,5,6];

 let sum1 = arr20.reduce((acc,elem)=>{
    return acc + elem;
 });

 console.log(sum1); // Output: 18   , original array is not modified

    //   18 because vha set nhi kiya he apan ne 0;  0 is deafult previous value ,vha di nhi isliye 1 set ho gya jo array me given tha




// question

//  for an array with marks of students find the average marks of class

let arr21 = [ 20,88,99,66];

let sum22 = arr21.reduce((acc,elem)=>{
    return (acc + elem)/arr21.length;  // average nikalne ke liye length se divide karna padega   

});

console.log(sum22); // Output: 68.25   , original array is not modified 



//  create an array with the length (n) given by user and fill it with 0;
 

let number22 = prompt("Enter the length of the array:");
let n = parseInt(number); // Convert the input to an integer;
let arr23 = new Array(n).fill(0); // Creates a new array of length n and fills it with 0. It modifies the original array and returns a reference to the same array.
console.log(arr23); // Output: [0, 0, 0, 0, 0]   , original array is modified



//  array.of we can make a array 
 let e = 1;
 let f = "harsh"
 let g = {
    name: "naitik"
 }
 let h = [2,3,4,5]


 let newArray1 = Array.of(e,f,g,h); // Creates a new array with the given elements. It does not modify the original array.
 console.log(newArray1); // Output: [1, "harsh", {name: "naitik"}, [2, 3, 4, 5]]   , original array is not modified




 // check palindrome of given string  [concept learn only from solution]

 let str22 = "harsh";


 let arr44 = Array.from(str22); // Creates a new array from the given string. It does not modify the original string.
 arr44 = arr44.reverse().join(""); // Reverses the order of the elements in the array and joins them back into a string. It modifies the original array and returns a reference to the same array.
 console.log(arr44); // Output: "hsrah"   , original array is modified
 console.log(str22); // Output: "harsh"   , original string is not modified


 

    //    for more check documentation on MDN JS DOCS....