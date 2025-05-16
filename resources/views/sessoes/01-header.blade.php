<header class="supermarket-header" id="home"> 
    <div class="top-bar">
        <div class="logo">
            <img src="{{asset('img/supermercado.png')}}" alt="Logo Supermercado">
        </div>
        
        <div class="user-actions">
            <div class="action-icon">
                <i class="fas fa-user"></i>
                <span>Conta</span>
            </div>
            <div class="action-icon">
                <i class="fas fa-heart"></i>
                <span>Favoritos</span>
            </div>
            <div class="action-icon">
                <i class="fas fa-shopping-cart"></i>
                <span>Carrinho</span>
            </div>
        </div>
        
    </div>
    
    <nav class="main-nav" id="mainNav">
        <div class="search-container">
            <div class="search-input">
                <input type="text" placeholder="Buscar produtos...">
                <button type="submit"><i class="fas fa-search"></i></button>                
            </div>
            <div class="search-gear">
                <span><i class="fas fa-moon"></i></span>                
                <span><i class="fas fa-gear"></i></span>                
            </div>
        </div>       
        <div class="main-sessoes">            
            <a href="#home" class="active" data-page="home"><i class="fas fa-home"></i> Home</a>
            <a href="#promocoes" data-page="promocoes"><i class="fas fa-tag"></i> Promo</a>
            <a href="#mercearia" data-page="mercearia"><i class="fas fa-wheat-alt"></i> Mercearia</a>
            <a href="#frios" data-page="frios"><i class="fas fa-snowflake"></i> Frios</a>
            <a href="#bebidas" data-page="bebidas"><i class="fas fa-wine-bottle"></i> Bebidas</a>
            <a href="#hortifruti" data-page="hortifruti"><i class="fas fa-carrot"></i> Hortifruti</a>
            <a href="#limpeza" data-page="limpeza"><i class="fas fa-broom"></i> Limpeza</a>
            <a href="#contato" data-page="contato"><i class="fas fa-phone-alt"></i> Contato</a>
        </div>
    </nav>
</header>

<div class="demo-section section1">Seção 1</div>
<div class="demo-section section2">Seção 2</div>
<div class="demo-section section3">Seção 3</div>
<div class="demo-section section4">Seção 4</div>
