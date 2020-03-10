// Your code goes here
const link = document.querySelector('a');

link.href = 'index.html';


link.addEventListener("click", 
() => {
      event.preventDefault();
     link.style.color = "orange";
   
})



let intro = document.querySelector(".intro");

intro.addEventListener("click", 
() => {
    intro.style.color = "blue";
})

let test = document.querySelector(".intro h2");
test.addEventListener("click", 
() => {
    test.style.color = "red";
    event.stopPropagation();
})

let introChildren = Array.from(intro.children);

introChildren[1].addEventListener("mouseover",
() => {
    introChildren[1].style.transform = "scale(1.2)";
    introChildren[1].style.transition = "transform 1s";
   
  })

   introChildren[2].addEventListener("wheel",
() => {
    introChildren[2].style.fontSize = "35px";
   

  })

 let input = document.createElement('input');

 input.addEventListener("keydown",
 () => {
       input.style.backgroundColor = "yellow";
     
   })
 intro.appendChild(input);

 input.addEventListener("focus",
() => {
      input.style.backgroundColor = "pink";
     
  })

  input.addEventListener("select",
  () => {
        input.style.display = "none";
       event.stopPropagation();
    })
  
let divs = document.querySelector(".text-content");

 let content = document.querySelector(".content-section");
 
let contentChildren = Array.from(content.children);

let go = contentChildren[0].children;

go[0].addEventListener("drag",
() => {
      go[0].textContent = "Lambda School";
    
  })

  window.addEventListener("resize",
  () => {
        go[1].style.color = "red";
    })
  
  window.addEventListener("scroll",
    () => {
          go[2].textContent = "Message changes on scroll";
      })
    
  let image = contentChildren[1].children;
image[0].addEventListener("load",
() => {
    image[0].style.border = "10px solid green";
})

