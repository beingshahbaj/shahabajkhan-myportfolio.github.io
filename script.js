$(document).ready(function () {
    $('.slider').slick({
        arrows: false,
        dots: true,
        appendDots: '.slider-dots',
        dotsClass: 'dots'

    });

    let hamburger = document.querySelector('.hamburger')
    let times = document.querySelector('.times')
    let tabNav = document.querySelector('.tabnav')

    hamburger.addEventListener('click', function () {

        tabNav.classList.add('open');
         
    });


    times.addEventListener('click', function () {
        tabNav.classList.remove('open');

    });

});