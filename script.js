// Menu

// function menud() {
//     document.getElementById("nav a").classList.toggle("show");
// }

// Popup

function openPop() {
    const popDialog = document.getElementById("popupDialog");
    popDialog.style.visibility = popDialog.style.visibility === "visible" ? "hidden" : "visible";
}


// Carousel

let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.projects-list');
    const totalSlides = slides.length;
    
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    
    const offset = -currentSlide * 100;
    
    document.querySelector('.projects-slides').style.transform = `translateX(${offset}%)`;
}




// filter

{/* <div class="portfolio__area-1 pt-145" id="portfolio">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="portfolio__menu text-center mb-50">
                            <button class="filter-btn active" data-filter="all">Show all</button>
                            <button class="filter-btn" data-filter="cat1">Developing</button>
                            <button class="filter-btn" data-filter="cat2">Designing</button>
                            <button class="filter-btn" data-filter="cat3">Figma</button>
                        </div>
                    </div>
                </div>
                <div class="row grid">
                    <div class="col-xl-4 col-lg-4 col-md-6 work-item cat1">
                        <div class="portfolio laptop-frame">
                            <div class="portfolio__thumb">
                                <img src="https://tse3.mm.bing.net/th?id=OIP.MCLzVoExgXPyNi_V5gb1AwHaE7&pid=Api&P=0&h=180" alt="">
                                <div class="overlay">
                                    <h4><a href="#">Preview</a></h4>
                                    <span><a href="#">Source Code</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 work-item cat2">
                        <div class="portfolio laptop-frame">
                            <div class="portfolio__thumb">
                                <img src="https://tse4.mm.bing.net/th?id=OIP.qDvAlhidTBzXiGyDfq_O0gHaE7&pid=Api&P=0&h=180" alt="">
                                <div class="overlay">
                                    <h4><a href="#">Preview</a></h4>
                                    <span><a href="#">Source code</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 work-item cat3">
                        <div class="portfolio laptop-frame">
                            <div class="portfolio__thumb">
                                <img src="https://tse1.mm.bing.net/th?id=OIP.E4IJcali_762Oo_vNhhbFgHaEK&pid=Api&P=0&h=180" alt="">
                                <div class="overlay">
                                    <h4><a href="#">Preview</a></h4>
                                    <span><a href="#">Source Code</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



I specialize in crafting responsive and dynamic web experiences using HTML, CSS, and JavaScript, ensuring websites are visually appealing and user-friendly. With proficiency in Bootstrap and React, I build modern, mobile-first, and high-performance interfaces. My experience extends to WordPress, where I create custom themes and plugins to deliver tailored solutions. For design, I utilize Figma to create seamless user interfaces and Adobe Photoshop and Illustrator for crafting visually engaging graphics and assets. Combining these skills allows me to deliver both functional and aesthetic websites that are optimized for user experience.





document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const workItems = document.querySelectorAll(".work-item");

    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            let filter = this.getAttribute("data-filter");

            workItems.forEach(item => {
                if (filter === "all") {
                    item.style.display = "flex";
                }
                else if(item.classList.contains(filter)){
                    item.style.display = "flex";
                }
                 else {
                    item.style.display = "none";
                }
            });
        });
    });
}); */}





// dropdown 

// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onclick_dropdown

// <!DOCTYPE html>
// <html>
// <head>
// <style>
// .dropbtn {
//   background-color: #4CAF50;
//   color: white;
//   padding: 16px;
//   font-size: 16px;
//   border: none;
//   cursor: pointer;
// }

// .dropbtn:hover, .dropbtn:focus {
//   background-color: #3e8e41;
// }

// .dropdown {
//   position: relative;
//   display: inline-block;
// }

// .dropdown-content {
//   display: none;
//   position: absolute;
//   background-color: #f9f9f9;
//   min-width: 160px;
//   overflow: auto;
//   box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
// }

// .dropdown-content a {
//   color: black;
//   padding: 12px 16px;
//   text-decoration: none;
//   display: block;
// }

// .dropdown-content a:hover {background-color: #f1f1f1}

// .show {display:block;}
// </style>
// </head>
// <body>

// <h1>HTML DOM Events</h1>
// <h2>The onclick Event</h2>

// <p>Click on the button to open the dropdown menu.</p>

// <div class="dropdown">
//   <button id="myBtn" class="dropbtn" onclick="myb()">Dropdown</button>
//   <div id="myDropdown" class="dropdown-content">
//     <a href="#home">Home</a>
//     <a href="#about">About</a>
//     <a href="#contact">Contact</a>
//   </div>
// </div>

// <script>
// // Get the button, and when the user clicks on it, execute myFunction
// //document.getElementById("myBtn").onclick = function() {myFunction()};

// /* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
// function myb() {
//   document.getElementById("myDropdown").classList.toggle("show");
// }
// </script>

// </body>
// </html>