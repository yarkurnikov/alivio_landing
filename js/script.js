'use sctrict'
//Слайдер
let index = 1;
showSlides(index);

function nextSlide() {
    showSlides(index += 1);
}

function prevSlide() {
    showSlides(index -= 1);  
}

function currentSlide(n) {
    showSlides(index = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slider-line");
    let dots = document.getElementsByClassName("slider-dots_item");
    
    if (n > slides.length) {
        index = 1
    }
    if (n < 1) {
        index = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[index - 1].style.display = "block";
    dots[index - 1].className += " active";
}


// Меню бургер
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');

if (iconMenu) {
    iconMenu.addEventListener('click', function(event) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    })
}
// Прокрутка при клике 

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

            if (iconMenu.classList.contains('_active')) {
                document.body.classList.remove('_lock');
                iconMenu.classList.remove('_active');
                menuBody.classList.remove('_active');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }

}

//start trial

const trialModal = document.getElementById('trialModal');
const trialBtn = document.getElementById("trialBtn");
const trialSpan = document.getElementsByClassName("close")[0];

trialBtn.onclick = function() {
    trialModal.style.display = "block";
}

trialSpan.onclick = function() {
    trialModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == trialModal) {
        trialModal.style.display = "none";
    }
}
//sign in

const loginModal = document.getElementById('loginModal');
const loginBtn = document.getElementById("loginBtn");
const loginSpan = document.getElementsByClassName("close")[1];

loginBtn.onclick = function() {
    loginModal.style.display = "block";
}

loginSpan.onclick = function() {
    loginModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == trialModal) {
        trialModal.style.display = "none";
    }
}