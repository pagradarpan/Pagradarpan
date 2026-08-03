/* =====================================
   PAGRA DARPAN
   script.js
===================================== */

// ================= Slider =================

const slides = document.querySelectorAll(".slide");

const prevBtn = document.querySelector(".prev");

const nextBtn = document.querySelector(".next");

let currentSlide = 0;

function showSlide(index){

slides.forEach(slide=>{

slide.classList.remove("active");

});

slides[index].classList.add("active");

}

function nextSlide(){

currentSlide++;

if(currentSlide >= slides.length){

currentSlide = 0;

}

showSlide(currentSlide);

}

function prevSlide(){

currentSlide--;

if(currentSlide < 0){

currentSlide = slides.length-1;

}

showSlide(currentSlide);

}

// Next Button

if(nextBtn){

nextBtn.addEventListener("click",()=>{

nextSlide();

});

}

// Previous Button

if(prevBtn){

prevBtn.addEventListener("click",()=>{

prevSlide();

});

}

// Auto Slider

setInterval(()=>{

nextSlide();

},4000);

showSlide(currentSlide);
// ================= Smooth Scroll =================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

const target = document.querySelector(this.getAttribute("href"));

if(target){

window.scrollTo({

top: target.offsetTop - 80,

behavior: "smooth"

});

}

});

});



// ================= Sticky Header Shadow =================

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY > 30){

header.style.boxShadow="0 8px 25px rgba(0,0,0,.12)";

}else{

header.style.boxShadow="0 3px 15px rgba(0,0,0,.08)";

}

});



// ================= Active Menu =================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop = section.offsetTop - 120;

const sectionHeight = section.clientHeight;

if(window.pageYOffset >= sectionTop){

current = section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href") === "#" + current){

link.classList.add("active");

}

});

});



// ================= Image Safety =================

document.querySelectorAll("img").forEach(img=>{

img.onerror=function(){

this.style.display="none";

};

});



console.log("Pagra Darpan Website Loaded Successfully");
