let sm =  document.querySelector(".spiderman");
let text = document.querySelector(".span");
let picture1 = document.querySelector(".picture1");
let picture2 = document.querySelector(".picture2");
let picture3 = document.querySelector(".picture3");
console.log(picture1, picture2, picture3);




picture1.addEventListener("click",()=>{
    sm.src = "images/tm.png";
    text.innerHTML = 'Tobey Maguire';

});



picture2.addEventListener('click',()=>{
    sm.src = "images/ag.png";
    text.innerHTML = 'Andrew Garfield';
    text.style.fontSize ="1.099em"
});


picture3.addEventListener('click',()=>{
    sm.src = "images/th.png";
    text.innerHTML = 'Tom Holland';
});






