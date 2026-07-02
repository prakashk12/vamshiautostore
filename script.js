/*==========================================
Vamshi Auto Stores
Premium Website JavaScript
==========================================*/

// ================================
// Mobile Navigation
// ================================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if(navLinks.classList.contains("active")){
        menuBtn.innerHTML = '<i class="fas fa-times"></i>';
    }else{
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    }
});

// ================================
// Close Menu on Link Click
// ================================

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click",()=>{

        navLinks.classList.remove("active");

        menuBtn.innerHTML='<i class="fas fa-bars"></i>';

    });

});

// ================================
// Sticky Navbar Shadow
// ================================

window.addEventListener("scroll",()=>{

    const header=document.querySelector("header");

    if(window.scrollY>50){

        header.style.boxShadow="0 8px 20px rgba(0,0,0,.12)";
        header.style.background="#ffffff";

    }
    else{

        header.style.boxShadow="none";
        header.style.background="rgba(255,255,255,.95)";

    }

});

// ================================
// Active Navigation
// ================================

const sections=document.querySelectorAll("section");
const navItems=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-120;

if(window.scrollY>=top){

current=section.getAttribute("id");

}

});

navItems.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")=="#"+current){

link.classList.add("active");

}

});

});

// ================================
// Smooth Scroll
// ================================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

// ================================
// Gallery Animation
// ================================

const galleryImages=document.querySelectorAll(".gallery-grid img");

galleryImages.forEach(img=>{

img.addEventListener("mouseover",()=>{

img.style.transform="scale(1.05)";

img.style.transition=".4s";

});

img.addEventListener("mouseout",()=>{

img.style.transform="scale(1)";

});

});

// ================================
// Product Hover
// ================================

document.querySelectorAll(".product").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});

// ================================
// Floating Buttons Animation
// ================================

const floatButtons=document.querySelectorAll(".whatsapp,.call");

setInterval(()=>{

floatButtons.forEach(btn=>{

btn.style.transform="scale(1.1)";

setTimeout(()=>{

btn.style.transform="scale(1)";

},400);

});

},3000);

// ================================
// Fade Hero Content
// ================================

window.addEventListener("load",()=>{

document.querySelector(".hero-content").style.opacity="1";

document.querySelector(".hero-content").style.transform="translateY(0px)";

});

// ================================
// Scroll To Top Button
// ================================

const topButton=document.createElement("div");

topButton.innerHTML='<i class="fas fa-arrow-up"></i>';

topButton.id="scrollTop";

document.body.appendChild(topButton);

topButton.style.cssText=`

position:fixed;
bottom:170px;
right:20px;
width:55px;
height:55px;
background:#15395c;
color:white;
display:flex;
justify-content:center;
align-items:center;
border-radius:50%;
cursor:pointer;
font-size:22px;
display:none;
box-shadow:0 8px 20px rgba(0,0,0,.2);
z-index:999;

`;

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topButton.style.display="flex";

}
else{

topButton.style.display="none";

}

});

topButton.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

// ================================
// Simple Loading Animation
// ================================

window.addEventListener("load",()=>{

document.body.style.opacity="0";

setTimeout(()=>{

document.body.style.transition="opacity .7s";

document.body.style.opacity="1";

},100);

});

// ================================
// Console Message
// ================================

console.log("Welcome to Vamshi Auto Stores Website");