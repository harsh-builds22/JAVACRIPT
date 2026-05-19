 /*  spread and rest operator 


 both uses   (...)three dots based on context
  
 spread expands/unpacks iterables into individual elements
 rest collects multiple elements and condenses them into a single element (array or object)  */




  let arr = [1, 2, 3, 6 , 8];

  console.log(...arr); // 1 2 3 6 8 ;


//  old items bhi chaiye or kuch add bhi karna he .  

  let newArr = [...arr, 10, 12,"harsh"];
  console.log(newArr); // [1, 2, 3, 6, 8, 10, 12]







  let arr2 = [1,3,4];
  let copyArr = arr;   //refrenece copy agar ,kisi me bhi change karoege dono me hoga

  copyArr.push(5);

  console.log(arr);     // [1, 3, 4, 5] dono me change hoga
  console.log(copyArr);  // [1, 3, 4, 5] dono me change hoga


   //   to copy to hua nhi only refrence copy hua .

  

   

// shallow copy

let arr3  = [3,22,4,55];
let copyArr2 = [...arr3];  //shallow copy

copyArr2.push(66);
console.log(arr3);      // [3, 22, 4, 55]
console.log(copyArr2);  // [3, 22, 4, 55, 66]


//  shallow copy me agar nested array ya object hoga to uska reference copy hoga

let arr4 = [1,2,3,[4,5]];
let copyArr3 = [...arr4];
copyArr3.push(6);

console.log(arr4);      // [1, 2, 3, [4, 5]]
console.log(copyArr3);  // [1, 2, 3, [4, 5], 6]

copyArr3[3].push(7);
console.log(arr4);      // [1, 2, 3, [4, 5, 7]]  nested array me change hoga dono me hoga
console.log(copyArr3);  // [1, 2, 3, [4, 5, 7], 6] nested array me change hoga dono me hoga





//  merge twoo array

let hero = [ "captain", "ironman", "thor"];
let villain = ["thanos", "loki", "ultron"];

let  film = [...hero, ...villain]
console.log(film);  // [ 'captain', 'ironman', 'thor', ' thanos', 'loki', 'ultron' ]



// spread string 

let str = "hello woorld";
console.log(...str);  // h e l l o   w o o r l d

// best way to cnvrt string into array
let arr10 = [...str];
console.log(arr10);  // [ 'h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'o', 'r', 'l', 'd' ]


//   spraed in function call

let user = ["harsh", "muskan", "mahek"];


function consoleThreeUsers(user1, user2, user3){
  console.log(user1);  // harsh
    console.log(user2);  // muskan
    console.log(user3)    
}

consoleThreeUsers(...user);  //harsh muskan mahek  spread se array ke elements ko individual arguments me convert kar diya




// one more method to convert string into array
let sentance = "hello i am very  good";
let arr22 = sentance.split(" ");
console.log(arr22);  // [ 'hello', 'i', 'am', 'very', 'good' ]  split me space se split hoga to har word ek element ban jayega




//   spread object

let obj ={
    name : "harsh",
    age : 22,
    city : "kota"
}

let objCpy = {...obj};

objCpy.age = 23;
console.log(objCpy); // { name: 'harsh', age: 23, city: 'kota' }  age change hoga
console.log(obj);    // { name: 'harsh', age: 22, city: 'kota' }  original object me change nhi hoga



let objcpy2 = {
    ...obj,

    age: 25,
    passion : "developer",
    city: "delhi",
}

console.log(objcpy2);  // { name: 'harsh', age: 25, city: 'delhi', passion: 'developer' }  age change hoga , city change hoga , passion add hoga
console.log(obj);     // { name: 'harsh', age: 22, city: 'kota' }  original object me change nhi hoga






//  rest operator


function sum(a,b,c){
    return a+b+c;
}
 let output = sum(2,3,5  ,9,8);
console.log(output);  // 10     extra arguments ka koi frk nhi pad rha he;



function sum1(...arr){
    let sum2  = arr.reduce((acc, prev)=>{
        return acc + prev;
    })
return sum2;
}

let output2 = sum1(2,3,5,9,8 , 8 , 9 , 0 ,66);
console.log(output2);  // 100   rest operator se sare arguments ko ek array me collect kar diya aur reduce se sum kar diya



//   destructuring me rest operator

let arr5 = [1,2,3,4,5,6];
let [a,b,...rest] = arr5;
console.log(a);  // 1
console.log(b);  // 2
console.log(rest);  // [3, 4, 5, 6] rest operator se b ke baad ke sare elements ko rest me collect kar diya


// object destructuring me rest operator
let obj2 = {
    name : "harsh",
    age : 22,
    city : "kota",
    passion : "developer"
}
let {name, ...restObj} = obj2;
console.log(name);  // harsh
console.log(restObj);  // { age: 22, city: 'kota', passion: 'developer' } rest operator se name ke baad ke sare properties ko restObj me collect kar diya





