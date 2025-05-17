let currentSlide = 0;
const slidesContainer = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;
const indicatorsContainer = document.querySelector('.indicators');

function showSlide(index) {
if (index >= totalSlides) currentSlide = 0;
else if (index < 0) currentSlide = totalSlides - 1;
else currentSlide = index;

slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
updateIndicators();
}

function plusSlides(n) {
showSlide(currentSlide + n);
}

function goToSlide(index) {
showSlide(index);
}

function createIndicators() {
for (let i = 0; i < totalSlides; i++) {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  dot.addEventListener('click', () => goToSlide(i));
  indicatorsContainer.appendChild(dot);
}
}

function updateIndicators() {
const dots = document.querySelectorAll('.dot');
dots.forEach(dot => dot.classList.remove('active'));
if (dots[currentSlide]) dots[currentSlide].classList.add('active');
}

// Auto-play
setInterval(() => {
plusSlides(1);
}, 5000); // Troca a cada 4 segundos

// Inicialização
createIndicators();
showSlide(currentSlide);

// Tornar função acessível globalmente
window.plusSlides = plusSlides;