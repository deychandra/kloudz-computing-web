const glowImage = document.querySelector('.glow-move');

document.addEventListener('mousemove', (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const offsetX = (mouseX / windowWidth - 0.5) * 50;
    const offsetY = (mouseY / windowHeight - 0.5) * 50;

    glowImage.style.transform = `translate(-50%, -50%) translate(${offsetX}%, ${offsetY}%)`;
});

const weserveImageGlobe = document.querySelector('.we-serve-move');

document.addEventListener('mousemove', (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const offsetX = (mouseX / windowWidth - 0.5) * 40;
    const offsetY = (mouseY / windowHeight - 0.5) * 40;

    weserveImageGlobe.style.transform = `translate(-50%, -50%) translate(${offsetX}%, ${offsetY}%)`;
});




const CaseStudiesGlobe = document.querySelector('.case-studies-glow');

document.addEventListener('mousemove', (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const offsetX = (mouseX / windowWidth - 0.5) * 40;
    const offsetY = (mouseY / windowHeight - 0.5) * 40;

    CaseStudiesGlobe.style.transform = `translate(-50%, -50%) translate(${offsetX}%, ${offsetY}%)`;
});



// Scroll
const tabScroll = document.querySelector('.tab-scroll');
let isDown = false;
let startX;
let scrollLeft;
tabScroll.addEventListener('mousedown', (e) => {
    isDown = true;
    tabScroll.classList.add('active');
    startX = e.pageX - tabScroll.offsetLeft;
    scrollLeft = tabScroll.scrollLeft;
});

tabScroll.addEventListener('mouseleave', () => {
    isDown = false;
    tabScroll.classList.remove('active');
});

tabScroll.addEventListener('mouseup', () => {
    isDown = false;
    tabScroll.classList.remove('active');
});

tabScroll.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - tabScroll.offsetLeft;
    const walk = (x - startX) * 2;
    tabScroll.scrollLeft = scrollLeft - walk;
});

// Scroll


var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });