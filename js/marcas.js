// js/marcas.js

let currentIndex = 0;
const itemsToShow = 3; // NÃºmero de itens exibidos por vez

function moveCarousel(step) {
    const items = document.querySelectorAll('#brands-carousel .brand-item');
    const totalItems = items.length;
    const totalVisibleItems = Math.ceil(totalItems / itemsToShow);

    currentIndex = (currentIndex + step + totalVisibleItems) % totalVisibleItems;
    const offset = -currentIndex * 100 / itemsToShow; // Desloca a porcentagem correta para mostrar 3 itens por vez

    document.querySelector('#brands-carousel').style.transform = `translateX(${offset}%)`;
}

// InicializaÃ§Ã£o do carrossel (opcional)
document.addEventListener('DOMContentLoaded', () => {
    // ConfiguraÃ§Ã£o inicial, se necessÃ¡rio
});