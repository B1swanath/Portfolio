// Popup

function openPop() {
    const popDialog =
        document.getElementById(
            "popupDialog"
        );
    popDialog.style.visibility =
        popDialog.style.visibility ===
            "visible"
            ? "hidden"
            : "visible";
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