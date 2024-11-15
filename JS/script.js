document.addEventListener('DOMContentLoaded', function() {
    const menuBurger = document.querySelector('.menu-burger');
    const menu = document.querySelector('.menu');              

    menuBurger.addEventListener('click', function() {
        menu.classList.toggle('active'); 
    });
});
    const images = document.querySelectorAll(".image-slideshow img");
    let currentIndex = 0;

    function showNextImage() {
        images[currentIndex].style.opacity = "0";
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].style.opacity = "1";
    }