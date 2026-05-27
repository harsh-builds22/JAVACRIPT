


let input = document.querySelector("#todo-input");
let addButton = document.querySelector("#add-btn");
let todoCont = document.querySelector(".todo-cont");


addButton.addEventListener("click", postData);
  





let api = "https://6a12d0df78d0434e0d5d8277.mockapi.io/task/v1/todos" ;

async function  fetchData(){

 let result = await fetch(api);
 let data = await result.json();
 console.log(data);
  
 
   if(data){
    todoCont.innerHTML = "";

    data.forEach((item)=>{
     let div = document.createElement("div");
div.className = "todo";
div.innerHTML = `<p>${item.text}</p>
                                 <div class="btns">
                                     <button class=" button delete-btn">Delete</button>
                                     <button class=" button edit-btn">Edit</button>
                                 </div>`;


      let del =  div.querySelector(".delete-btn").addEventListener("click", ()=>{
       dltData(item.id);
      })
                
        

 todoCont.appendChild(div);
    })
     
   }

        
}


async function postData(){ 
    
    let value  = input.value;
    
    
    let objdata = {
        text : value.trim()
    }
    
    
    let result = await fetch(api, {
        method : "POST",
        headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(objdata)
 });

 let data = await result.json();

   if(result.status === 201){
  fetchData();
 input.value = "";
   }


}


async function dltData(id){
     let result = await fetch(`${api}/${id}`, {
    method : "DELETE", 
   
    });
        if(result.status === 200){
            fetchData();
        }
};


fetchData();




