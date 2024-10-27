document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelector('.menu-items');
    const menuIcon = document.querySelector('.menu-icon');

    // Função para alternar o menu
    function toggleMenu() {
        if (menuItems.style.display === 'none' || menuItems.style.display === '') {
            menuItems.style.display = 'flex'; // Mostra o menu
        } else {
            menuItems.style.display = 'none'; // Oculta o menu
        }
    }

    // Função para ajustar o menu com base no tamanho da tela
    function handleResize() {
        if (window.innerWidth > 768) {
            menuItems.style.display = 'flex'; // Mostra o menu em telas maiores
        } else {
            menuItems.style.display = 'none'; // Oculta o menu em telas menores
        }
    }

    // Adiciona o evento de clique ao ícone do menu
    menuIcon.addEventListener('click', toggleMenu);

    // Adiciona o evento de redimensionamento da janela
    window.addEventListener('resize', handleResize);

    // Garante o estado inicial correto
    handleResize();
});
