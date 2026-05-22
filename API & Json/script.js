
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

let json = `{
    "name":"harsh",
    "age":19,
    "city":"delhi",
    "isMarried":false
}`

// Number, string, boolean, null, array, object are data types in json


 //  .json  ---->very strict format, it should be in double quotes, it should be in key value pair, it should be in curly braces, it should be in square brackets for array,
 //  it should be in comma separated values for multiple key value pairs.


 