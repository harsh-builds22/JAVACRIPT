/*   event propagation describe the way events through the DOM tree after they are triggered . There are three phases of event propagation: capturing (trickling), target, and bubbling.

1. Capturing Phase: In this phase, the event starts from the root of the DOM tree and travels down to the target element. Event listeners registered for the capturing phase will be triggered during this phase.
2. Target Phase: This is the phase where the event has reached the target element. Event listeners registered for the target phase will be triggered during this phase.
3. Bubbling Phase: After the target phase, the event starts bubbling up from the target element back to the root of the DOM tree. Event listeners registered for the bubbling phase will be triggered during this phase.


By default, event listeners are registered for the bubbling phase. However, you can specify the phase during which an event listener should be triggered by passing a third argument to the addEventListener method.   */


  /*            ----------------------------------->
             grand parents ------parent------child
             <----------------------------------                                     

  like if u trigger the child vo uper se ayega fir ,niche se uper jayega 




    */

let grandParent = document.querySelector('.grand-parent');
let parent = document.querySelector('.parent');
let child = document.querySelector('.child');


// child.addEventListener("click",()=>{                                 this is without true , if u click on child  it travel from child->parent->garndparent move so on,  same if u click on parent it will move from parent->grandparent but if u click on grandparent it will not move anywhere because there is no parent of grandparent  
//    alert("child clicked");                                
// })

// parent.addEventListener("click",()=>{
//    alert("parent clicked");
// })

// grandParent.addEventListener("click",()=>{
//    alert("grandParent clicked");
// })






// child.addEventListener("click",()=>{                        //   with true , if u click on child  it travel from grandparent->parent->child move so on,  same if u click on parent it will move from grandparent->parent but if u click on grandparent it will not move anywhere because there is no parent of grandparent      
//     alert("child clicked");                                        //  by default bubling phase unlock hua hota he ,true dne se capturing unlock ho  jata he
// },true)


//  parent.addEventListener("click",()=>{
//     alert("parent clicked");
//  },true)

//  grandParent.addEventListener("click",()=>{
//     alert("grandParent clicked");
//  },true)


 


/* question


 child.addEventListener("click",()=>{
    alert("child clicked");
 },true)

  parent.addEventListener("click",()=>{
    alert("parent clicked");
 },true)
                                                             grand-parent--->parent-->child---->grandparent
 grandParent.addEventListener("click",()=>{
    alert("grandParent clicked");
 },true)

  grandParent.addEventListener("click",()=>{
    alert("grandParent clicked");
 })                                                        */





//  event.target gives the element that triggered the event, while event.currentTarget gives the element that the event listener is attached to. 
// In the capturing phase, event.target will be the element that initiated the event, while event.currentTarget will be the element that is currently processing the event.
//  In the bubbling phase, event.target will still be the element that initiated the event, but event.currentTarget will be the element that is currently processing the event as it bubbles up through the DOM tree.    



child.addEventListener("click",(e)=>{                                 
            console.log("child")   ;  
            console.log(e.target)   ;  //  it will give the element that triggered the event
            console.log(e.currentTarget)   ;  // it will give the element that the event listener is attached to   
})

parent.addEventListener("click",(e)=>{
    console.log("parent")   ;                    
    console.log(e.target)   ;  //  it will give the element that triggered the event
    console.log(e.currentTarget)   ;  // it will give the element that the event listener is attached to
})

grandParent.addEventListener("click",(e)=>{
   console.log("grandParent")   ;
   console.log(e.target)   ;  //  it will give the element that triggered the event
   console.log(e.currentTarget)   ;  // it will give the element that the event listener is attached to
   console.log(this); // it will give the window object because arrow function does not have its own this it takes this from its parent scope which is window object in this case
})              //  nrml function ke liye  act like current.target



// e.stopPropagation() is used to stop the propagtion
//   isme jesse parent pe lagya ,to jitne bhi parent pe event listener lag rha hoga vo sab hoga then furter move nhi hoga

//e.stopImmediatePropagation()   ye strict hota he  vhii stop ho jayega














