document.addEventListener('DOMContentLoaded', function() {
    const menuBurger = document.querySelector('.menu-burger');  // El botón hamburguesa
    const menu = document.querySelector('.menu');               // El menú de navegación

    menuBurger.addEventListener('click', function() {
        menu.classList.toggle('active');  // Alternar la clase 'active' en el menú
    });
});
//Script para las cajas de dispositivos//
    const images = document.querySelectorAll(".image-slideshow img");
    let currentIndex = 0;

    function showNextImage() {
        images[currentIndex].style.opacity = "0"; // Oculta la imagen actual
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].style.opacity = "1"; // Muestra la siguiente imagen
    }