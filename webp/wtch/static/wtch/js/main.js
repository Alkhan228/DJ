$(function () {
    $('.main-slider').slick({
        arrows: false,
        dots: false,
        slidesToShow: 1,
        autoplay: true
    });


    $('.slider-box').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        dots: false,
        autoplay: true
    });


});

// const allModals = document.querySelectorAll('[data-modal]');
// const modalButtons = document.querySelectorAll('[data-modal-button]');
// const modalCloseButtons = document.querySelectorAll('[data-modal-close]');

// allModals.forEach(function (item) {
//     item.addEventListener('click', function () {
//         this.classList.toggle('hidden');
//     })


// });
//1
document.getElementById("open-modal-btn").addEventListener("click", function () {
    document.getElementById("my-modal").classList.add("open")
})

document.getElementById("modal-close").addEventListener("click", function () {
    document.getElementById("my-modal").classList.remove("open")
})

window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("my-modal").classList.remove("open")
    }
})

//2
document.getElementById("open-modal-btn-2").addEventListener("click", function () {
    document.getElementById("my-modal-2").classList.add("open")
})

document.getElementById("modal-close-2").addEventListener("click", function () {
    document.getElementById("my-modal-2").classList.remove("open")
})

window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("my-modal-2").classList.remove("open")
    }
})
//3 
document.getElementById("open-modal-btn-3").addEventListener("click", function () {
    document.getElementById("my-modal-3").classList.add("open")
})

document.getElementById("modal-close-3").addEventListener("click", function () {
    document.getElementById("my-modal-3").classList.remove("open")
})

window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("my-modal-3").classList.remove("open")
    }
})

//4
document.getElementById("open-modal-btn-4").addEventListener("click", function () {
    document.getElementById("my-modal-4").classList.add("open")
})

document.getElementById("modal-close-4").addEventListener("click", function () {
    document.getElementById("my-modal-4").classList.remove("open")
})

window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("my-modal-4").classList.remove("open")
    }
})

//5
document.getElementById("open-modal-btn-5").addEventListener("click", function () {
    document.getElementById("my-modal-5").classList.add("open")
})

document.getElementById("modal-close-5").addEventListener("click", function () {
    document.getElementById("my-modal-5").classList.remove("open")
})

window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("my-modal-5").classList.remove("open")
    }
})
//6
document.getElementById("open-modal-btn-6").addEventListener("click", function () {
    document.getElementById("my-modal-6").classList.add("open")
})

document.getElementById("modal-close-6").addEventListener("click", function () {
    document.getElementById("my-modal-6").classList.remove("open")
})

window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("my-modal-6").classList.remove("open")
    }
})

////LOGIN
////open
//document.getElementById("login-open").addEventListener("click", function () {
//    document.getElementById("login-modal").classList.add("open")
//})
////close X
//document.getElementById("login-close").addEventListener("click", function () {
//    document.getElementById("login-modal").classList.remove("open")
//})
//close ESC
//
//window.addEventListener('keydown', (e) => {
//    if (e.key === "Escape") {
//        document.getElementById("login-modal").classList.remove("open")
//    }
//})

//SIGN UP
//
//document.getElementById("login").addEventListener("click", function () {
//    document.getElementById("login-modal").classList.remove("open")
//    document.getElementById("sign-modal").classList.add("open")
//})


document.getElementById("click-button").addEventListener(
    "click", function () {
        document.getElementById("open-thanks").classList.add("open")

    })
document.getElementById("close-thanks").addEventListener("click",function(){
    document.getElementById("open-thanks").classList.remove("open")
})