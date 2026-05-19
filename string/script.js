/*  String 
   immutable in js
  it can be words , letter  , even empty space is also a string . 
 you can use double , single , backtick quotes       */

let greeting = "hello greeting";
let name = 'harsh sharma';
let empty = " ";
let number = "10";
let backtick = `hey,I am ${name}`;         //  important

console.log(greeting, typeof greeting); 


//   string concatation 
let firstName = "harsh";
let lastName = "sharma";

let fullName = "I am " + firstName + " " + lastName;

//  string interpolation
let fullName2 = `I am ${firstName} ${lastName} my  age is ${number}`;   //  important ,   ${} known as placeholder

console.log(fullName);
console.log(fullName2);





//  string positon

//        0  1 2 3 4 5 6 7 8 9 10
let str = "H E L L O   W O R L D";
//      -11-10-9-8 -7 -6 -5 -4 -3 -2 -1


//   positive index start from 0 , and neg index from -1.


let double =  " hello i am 'i am harsh' ";           //important ,u can use single  quoates in double ,vive versa.




let line = "hello world";
console.log(line[0]);  // h              
console.log(line[6]);  // w
console.log(line[line.length - 1]);  // d


// line[0] = w;
  console.log(line);   //  string is immutable , it will not change the value of line. it will print the same line.
                           //  change karke dusre variable me save karr sakte ho.



//  for accessing each character of string.
     for(let ch of line ){
        console.log(ch);
     }                       



//  STRING PROPERTIES AND METHODS
//       properties  = giving information
//        function/methods = kaam kar rha hota he
  


let myName = "harsh sharma";

//  length property
    myName.length;   // 12
console.log(myName.length);  // 12


//Methods

//   toUpperCase() method
console.log(myName.toUpperCase());  // HARSH SHARMA

//  original string same rhega ,ye original pe kaam karega or uska copy dega aapko, save karo usko new variable me.

 
//  toLowerCase() method    
console.log(myName.toLowerCase());  // harsh sharma       


//  variable.trim() method
let str2 = "   hello world   ";
console.log(str2.trim());  // "hello world"   , it will remove the extra space from both sides. but not from middle.



//  includes() method
let str3 = "hello world";
console.log(str3.includes("world"));    // true , it will check if the string contains the specified substring or not. it is case sensitive. if you write "World" it will return false.


// indexOf() method
console.log(str3.indexOf("o"));  // 4 , it will return the index of the first occurrence of the specified substring. if you write "O" it will return -1 because it is case sensitive.


//  charAt() method
console.log(str3.charAt(0));  // h , it will return the character at the specified index. if you write charAt(100) it will return empty string because it is out of range.


//  replace() method
let str4 = "hello world";
console.log(str4.replace("world", "harsh"));  // hello harsh , it will replace the first occurrence of the specified substring with the new substring. if you write replace("World", "harsh") it will return the same string because it is case sensitive.



//  slice() method    important
                                    //  kha se kha tak ka part aapko chaiye 
let str5 = "hello world";
console.log(str5.slice(0, 5));  // hello , it will return the substring from the start index to the end index (not included).  jha tak chaiye uske ek aage tak ka index do
//  if you write slice(6) it will return "world" because it will take all the characters from index 6 to the end of the string.
//  if you write slice(-5) it will return "world" because it will take all the characters from index -5 to the end of the string. 
// if you write slice(-11, -6) it will return "hello" because it will take all the characters from index -11 to index -6 (not included).




/*  slice and substring 
slice neg index also include karta he , substring nhi  */


// split() method
let str6 = "hello world";
console.log(str6.split(" "));  // ["hello", "world"] , it will split the string into an array of substrings based on the specified separator. 
// if you write split("") it will split the string into an array of characters. 
// if you write split("o") it will split the string into an array of substrings based on the letter "o". it will return ["hell", " w", "rld"].



// question
// let str5 = " i am a boy"
str5 = str5.replace("boy" , "girl");
console.log(str5);  // i am a girl

//  methods apan ko copy denge vhi copy apan save kar rhe bss 




/*  question 

  Create a program to take the fulll name form user and generate a username start with @ ,followed by their name and ends with underscore followed by the length of their name.
    for example if user enter "harsh sharma" then username will be @harshsharma_12.   */

    let fullname = prompt("enter your name ");
    let username = `@${fullname.trim().replace(" " , "")}_${fullname.length}`;
    console.log(username);



//   count the word prresent in string

let str7 = "hello world";
let count = str7.split(" ").length; 
console.log(count);  // 2 , it will split the string into an array of substrings based on the space and then return the length of the array which is the count of words in the string. 
// if you write split("") it will return the count of characters in the string.


