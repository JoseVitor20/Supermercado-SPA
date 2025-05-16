const mainNav = document.getElementById('mainNav');
const navLinks = mainNav.getElementsByTagName('a');
const topBar = document.querySelector('.top-bar');
const header = document.querySelector('.supermarket-header');
const topBarHeight = topBar.offsetHeight;
const mainNavHeight = mainNav.offsetHeight;

// Configuração inicial
header.style.height = (topBarHeight + mainNavHeight) + 'px';

// Verificar se há um link ativo armazenado no localStorage
const activePage = localStorage.getItem('activePageNav');

// Se houver, ativar o link correspondente
if (activePage) {
    for (let link of navLinks) {
        if (link.dataset.page === activePage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    }
}

// Adicionar evento de clique a todos os links
for (let link of navLinks) {
    link.addEventListener('click', function(e) {
        // Remover a classe 'active' de todos os links
        for (let l of navLinks) {
            l.classList.remove('active');
        }
        
        // Adicionar a classe 'active' apenas ao link clicado
        this.classList.add('active');
        
        // Armazenar o link ativo no localStorage
        localStorage.setItem('activePageNav', this.dataset.page);
    });
}

// Controle preciso do scroll
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    
    if (scrollPosition === 0) {
        // Topo da página - ambas as barras visíveis
        topBar.style.transform = 'translateY(0)';
        mainNav.style.transform = 'translateY(0)';
    } else if (scrollPosition >= 70) {
        // Scroll para baixo - main-nav no topo, top-bar escondida
        topBar.style.transform = 'translateY(-100%)';
        mainNav.style.transform = 'translateY(-70px)';
    } else {
        // Scroll intermediário - transição suave
        const ratio = scrollPosition / 70;
        topBar.style.transform = `translateY(${-ratio * topBarHeight}px)`;
        mainNav.style.transform = `translateY(${-ratio * topBarHeight}px)`;
    }
});