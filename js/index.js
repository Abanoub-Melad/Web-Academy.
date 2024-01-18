const btnMenu = document.querySelector('.navbar-collapse ')
const btnToggler = document.querySelector('.navbar-toggler ')

btnToggler.addEventListener('click', Toggler)
function Toggler() {
    btnMenu.classList.toggle('d-block')
    btnMenu.classList.toggle('show-style')
    btnToggler.classList.toggle('open')
}

// swiper library
var swiper = new Swiper(".mySwiper", {

    autoplay: {
        autoplay: true,
        delay: 2500,
        disableOnInteraction: false,
    },

    breakpoints: {
        0: {
            slidesPerView: 2,

        },
        768: {
            slidesPerView: 4,
        },
        1024: {
            slidesPerView: 5,
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
// swiper library


// DOMContent
document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            document.getElementById('navbar-top').classList.add('fixed-top');
        } else {
            document.getElementById('navbar-top').classList.remove('fixed-top');
        }
    });
});
// DOMContent

// Back to top
var btn = document.getElementById('button');
window.onscroll = function () {
    if (window.scrollY >= 300) {
        btn.classList.add('show');
    } else {
        btn.classList.remove('show');
    }
};
console.log(btn);
btn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
}

