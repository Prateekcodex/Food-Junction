'use strict';




// navbar toggle

const navbar = document.querySelector("[data-navbar]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const menuToggleBtn = document.querySelector("[data-nav-toggle-btn");

menuToggleBtn.addEventListener("click", function (){
    navbar.classList.toggle("active");
    this.classList.toggle("active");
});

for(let i =0; i < navbarLinks.length; i++){
    navbarLinks[i].addEventListener("click", function(){
        navbar.classList.toggle("active");
        menuToggleBtn.classList.toggle("active");
    });
}


// header sticky and back to top

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function (){
    if(window.scrollY >= 100){
        header.classList.add("active");
        backTopBtn.classList.add("active");
    } else{
        header.classList.remove("active");
        backTopBtn.classList.remove("active");
    }
});

// Function to open the popup
function openPopup() {
    document.getElementById('popupContainer').style.display = 'flex';
  }

  // Function to close the popup
  function closePopup() {
    document.getElementById('popupContainer').style.display = 'none';
  }


// search box toggle

const searchBtn = document.querySelector("[data-search-btn]");
const searchContainer = document.querySelector("[data-search-container]");
const searchSubmitBtn = document.querySelector("[data-search-submit-btn]");
const searchCloseBtn = document.querySelector("[data-search-close-btn]");

const searchBoxElems = [searchBtn, searchSubmitBtn, searchCloseBtn];

for(let i=0; i < searchBoxElems.length; i++){
    searchBoxElems[i].addEventListener("click", function(){
        searchContainer.classList.toggle("active");
        document.body.classList.toggle("active");
    });
}



// move cycle on scroll

const deliveryBoy = document.querySelector("[data-delivery-boy]");

let deliveryBoyMove = -80;
let lastScrollPos = 0;

window.addEventListener("scroll", function(){
    let deliveryBoyTopPos = deliveryBoy.getBoundingClientRect().top;
    if(deliveryBoyTopPos < 500 && deliveryBoyTopPos > -250){
        let activeScrollPos = window.scrollY;

        if(lastScrollPos < activeScrollPos){
            deliveryBoyMove ++;
        }
        else{
            deliveryBoyMove --;
        }

        lastScrollPos = activeScrollPos;

        deliveryBoy.style.transform = 'translateX(${deliveryBoyMove}px)';
    }
})


function redirectToReservation() {
    window.location.href = "reserve.html";  
}

function redirectToPayment() {
    window.location.href = "payment.html";  
}

// Pop up
// function showAlert() {
//     alert("You have booked a table successfully. Thanks!");
// }


function showAlerts() {
    alert("Your feedback submitted successfully. Thanks!");
}


function redirectToPage(){
    window.location.href = "order1.html"
}

function redirectToPage2(){
    window.location.href = "order2.html"
}

function redirectToPage3(){
    window.location.href = "order3.html"
}

function redirectToPage4(){
    window.location.href = "order4.html"
}

function redirectToPage5(){
    window.location.href = "order5.html"
}

function redirectToPage6(){
    window.location.href = "order6.html"
}




$(document).ready(function ($) {
    "use strict";

    jQuery(".filters").on("click", function () {
        jQuery("#menu-dish").removeClass("bydefault_show");
    });
    $(function () {
        var filterList = {
            init: function () {
                $("#menu-dish").mixItUp({
                    selectors: {
                        target: ".dish-box-wp",
                        filter: ".filter",
                    },
                    animation: {
                        effects: "fade",
                        easing: "ease-in-out",
                    },
                    load: {
                        filter: ".all, .breakfast, .lunch, .dinner",
                    },
                });
            },
        };
        filterList.init();
    });


});