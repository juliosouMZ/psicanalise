// =============================
// HEADER
// =============================

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>50){

header.classList.add("scrolled");

}else{

header.classList.remove("scrolled");

}

});document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

target.scrollIntoView({

behavior:"smooth"

});

});

});const faq=document.querySelectorAll(".faq-item");

faq.forEach(item=>{

item.addEventListener("click",()=>{

item.classList.toggle("active");

});

});
const back=document.getElementById("backTop");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

back.style.display="block";

}else{

back.style.display="none";

}

});

back.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});
