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

// ================= Load Data From data.json =================

fetch("data.json")
.then(response => response.json())
.then(data => {

    // Website Title
    document.title = data.website.title + " | " + data.website.tagline;

    // Hero Section
    const heroHeading = document.querySelector(".hero-content h2");
    const heroDesc = document.querySelector(".hero-content p");

    if(heroHeading) heroHeading.textContent = data.hero.heading;
    if(heroDesc) heroDesc.textContent = data.hero.description;

    // Village Table
    const villageValues = document.querySelectorAll(".village-card td:nth-child(2)");

    villageValues[0].textContent = data.village.name;
    villageValues[1].textContent = data.village.janpad;
    villageValues[2].textContent = data.village.district;
    villageValues[3].textContent = data.village.state;
    villageValues[4].textContent = data.village.language;
    villageValues[5].textContent = data.village.business;
    villageValues[6].textContent = data.village.pincode;
    villageValues[7].textContent = data.village.population;

    // Thought
    document.querySelector(".thought-content h3").textContent = data.thought.title;
    document.querySelector(".thought-content p").textContent = data.thought.text;
    document.querySelector(".thought-content span").textContent = data.thought.date;

    // Officers
    const officers = document.querySelectorAll(".officer-card p");

    officers[0].textContent = data.officers.sarpanch;
    officers[1].textContent = data.officers.upsarpanch;
    officers[2].textContent = data.officers.secretary;
    officers[3].textContent = data.officers.rojgar;

})
.catch(error => {
    console.log("data.json load nahi hua:", error);
});
