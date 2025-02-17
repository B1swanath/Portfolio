// Menu

function toggleMenu() {
    const menuIcon = document.getElementById("menu-icon");
    const closeMenuIcon = document.getElementById("close-menu-icon");
    const nav = document.querySelector("nav");

    if (nav.classList.contains("active")) {
        nav.classList.remove("active");
        menuIcon.style.display = "block";
        closeMenuIcon.style.display = "none";
    } else {
        nav.classList.add("active");
        menuIcon.style.display = "none";
        closeMenuIcon.style.display = "block";
    }
}


// Popup

function openPop() {
    const popDialog = document.getElementById("popupDialog");
    popDialog.style.visibility = popDialog.style.visibility === "visible" ? "hidden" : "visible";
}


// Carousel

// let currentSlide = 0;

// function moveSlide(direction) {
//     const slides = document.querySelectorAll('.projects-list');
//     const totalSlides = slides.length;
    
//     currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    
//     const offset = -currentSlide * 100;
    
//     document.querySelector('.projects-slides').style.transform = `translateX(${offset}%)`;
// }


// Filter

// document.addEventListener("DOMContentLoaded", function () {
//     const filterButtons = document.querySelectorAll(".pmbtn");
//     const workItems = document.querySelectorAll(".projects-item");

//     filterButtons.forEach(button => {
//         button.addEventListener("click", function () {
//             filterButtons.forEach(btn => btn.classList.remove("active"));
//             this.classList.add("active");

//             let filter = this.getAttribute("data-filter");

//             workItems.forEach(item => {
//                 if (filter === "all") {
//                     item.style.display = "flex";
//                 }
//                 else if(item.classList.contains(filter)){
//                     item.style.display = "flex";
//                 }
//                  else {
//                     item.style.display = "none";
//                 }
//             });
//         });
//     });
// });



