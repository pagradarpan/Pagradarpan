// ===== PAGRA DARPAN =====

const slides = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let current = 0;

function showSlide(index){

    slides.forEach(slide=>{
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");
}

function nextSlide(){

    current++;

    if(current >= slides.length){
        current = 0;
    }

    showSlide(current);
}

function prevSlide(){

    current--;

    if(current < 0){
        current = slides.length - 1;
    }

    showSlide(current);
}

if(next){
    next.addEventListener("click",nextSlide);
}

if(prev){
    prev.addEventListener("click",prevSlide);
}

// हर 5 सेकंड में स्लाइड बदलेगी
setInterval(nextSlide,5000);

// शुरू में पहली स्लाइड दिखाओ
showSlide(current);


// ===== Smooth Scroll =====

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            window.scrollTo({

                top:target.offsetTop-70,

                behavior:"smooth"

            });

        }

    });

});


// ===== Header Shadow =====

window.addEventListener("scroll",()=>{

    const header=document.querySelector("header");

    if(window.scrollY>40){

        header.style.boxShadow="0 5px 20px rgba(0,0,0,.15)";

    }else{

        header.style.boxShadow="0 2px 10px rgba(0,0,0,.08)";

    }

});
