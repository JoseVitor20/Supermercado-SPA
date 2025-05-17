// Menu Mobile com Animações
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileSearchBtn = document.querySelector('.mobile-search-btn');
    const mobileSearchContainer = document.querySelector('.mobile-search-container');

    mobileMenuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        mobileMenuBtn.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        
        if (mobileSearchContainer.classList.contains('active')) {
            mobileSearchContainer.classList.remove('active');
        }
    });

    mobileSearchBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        mobileSearchContainer.classList.toggle('active');
        
        if (mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        }
    });

// Fechar menus ao clicar fora
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.mobile-menu') && !e.target.closest('.mobile-menu-btn')) {
            mobileMenu.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        }

        if (!e.target.closest('.mobile-search-container') && !e.target.closest('.mobile-search-btn')) {
            mobileSearchContainer.classList.remove('active');
        }
        
    });

// Header no scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.fixed-header');
        if (window.scrollY > 10) {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
    });

// Redimensionamento da tela
    window.addEventListener('resize', function() {
        if (window.innerWidth > 992) {
            mobileMenu.classList.remove('active');
            mobileSearchContainer.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        }
    });

// Ativar links
const VALID_HASHES = [
  '#ofertas',
  '#mercado',
  '#bebidas',
  '#utilidades',
  '#acougue-frios',
  '#hortifruti',
  '#bebe-criancas',
  '#pet-shop'
];

function updateSelectedNavItem () {
  const currentHash = window.location.hash;

  document.querySelectorAll('.selected').forEach(item =>
    item.classList.remove('selected')
  );

  if (VALID_HASHES.includes(currentHash)) {
    // Pode repetir esse mesmos sistema para outras estruturas que usem os mesmos links
        const link = document.querySelector(
          `.nav-item a[href="${currentHash}"]`
        );
        link?.closest('.nav-item')?.classList.add('selected');

    // Aqui estou replicando o mesmo sistema para outra estrutura de links
        const linkmenu = document.querySelector(
          `.mobile-menu-item a[href="${currentHash}"]`
        );
        linkmenu?.closest('.mobile-menu-item')?.classList.add('selected');
  }
}

document.addEventListener('DOMContentLoaded', updateSelectedNavItem);

window.addEventListener('hashchange', updateSelectedNavItem);

document.addEventListener('click', e => {
    // Pode repetir esse mesmos sistema para outras estruturas que usem os mesmos links
        const link = e.target.closest('.nav-item a[href^="#"]');
        if (link) {
          updateSelectedNavItem();
        }

   // Aqui estou replicando o mesmo sistema para outra estrutura de links
       const linkmenu = e.target.closest('.mobile-menu-item a[href^="#"]');
       if (linkmenu) {
         updateSelectedNavItem();
       }
});
