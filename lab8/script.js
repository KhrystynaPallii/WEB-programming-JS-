const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

let currentSlide = 0;
const slides = document.getElementById('slides');
const images = slides.querySelectorAll('img');
const indicators = document.getElementById('indicators');

function showSlide(index) {
  if (index >= images.length) index = 0;
  if (index < 0) index = images.length - 1;
  currentSlide = index;
  slides.style.transform = `translateX(-${index * 100}%)`;
  updateIndicators();
}

function createIndicators() {
  for (let i = 0; i < images.length; i++) {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    dot.addEventListener('click', () => showSlide(i));
    indicators.appendChild(dot);
  }
}

function updateIndicators() {
  const dots = indicators.querySelectorAll('.dot');
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === currentSlide);
  });
}

document.querySelector('.prev').onclick = () => showSlide(currentSlide - 1);
document.querySelector('.next').onclick = () => showSlide(currentSlide + 1);

createIndicators();
showSlide(0);

setInterval(() => showSlide(currentSlide + 1), 4000);
