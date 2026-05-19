
//               Event Delegation


//  it is a technique where you attach a single event listener to a parent element instead of attaching event listeners to individual child elements.
//  The event listener on the parent element can then handle events that are triggered by its child elements. 
// This is particularly useful when you have a large number of child elements or when child elements are dynamically added or removed from the DOM.

//  For example, if you have a list of items and you want to handle click events on each item, instead of attaching a click event listener to each item,
//  you can attach a single click event listener to the parent element (the list) and use event.target to determine which item was clicked.
//  This can improve performance and simplify your code.



let container = document.querySelector('.container');   
let  box = document.querySelector('.box');



// container.childNodes.forEach((child) => {
//     child.addEventListener('click', (e) => {
//         console.log(e.target);
//     })
// }) 


//  loop performance kam karega ,site slow hoga
//  Instead of attaching event listeners to each child element, we attach a single event listener to the parent container.

container.addEventListener("click",(e)=>{
if(e.target.classList.contains("box")){
    console.log("Box clicked:", e.target.textContent);
}
})




// useful when you have a large number of child elements or when child elements are dynamically added or removed from the DOM.
//  For example, if you have a list of items and you want to handle click events on each item, instead of attaching a click event listener to each item,
//  you can attach a single click event listener to the parent element (the list) and use event.target to determine which item was clicked.
//  This can improve performance and simplify your code.