const glowImage = document.querySelector('.glow-move');
const whyChooseUsSection = document.querySelector('.why-choose-us');

let offsetD = 0;
let offsetC = 0;

whyChooseUsSection.addEventListener('mousemove', (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;


    offsetX = (mouseX / windowWidth - 0.5) * 50;
    offsetY = (mouseY / windowHeight - 0.5) * 50;


    glowImage.style.transform = `translate(-50%, -50%) translate(${offsetX}%, ${offsetY}%)`;
});


whyChooseUsSection.addEventListener('mouseenter', () => {

    glowImage.style.transform = `translate(-50%, -50%) translate(${offsetX}%, ${offsetY}%)`;
});


whyChooseUsSection.addEventListener('mouseleave', () => {

    glowImage.style.transform = `translate(-50%, -50%) translate(${offsetX}%, ${offsetY}%)`;
});






// animation
const weServeImageGlobe = document.querySelector('.we-serve-move');
const weServeSection = document.querySelector('.We-Serve');

let offsetXh = 0;
let offsetYw = 0;


weServeSection.addEventListener('mousemove', (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;


    offsetX = (mouseX / windowWidth - 0.5) * 40;
    offsetY = (mouseY / windowHeight - 0.5) * 40;


    weServeImageGlobe.style.transform = `translate(-50%, -50%) translate(${offsetX}%, ${offsetY}%)`;
});


weServeSection.addEventListener('mouseenter', () => {

    weServeImageGlobe.style.transform = `translate(-50%, -50%) translate(${offsetX}%, ${offsetY}%)`;
});


weServeSection.addEventListener('mouseleave', () => {

    weServeImageGlobe.style.transform = `translate(-50%, -50%) translate(${offsetX}%, ${offsetY}%)`;
});









// animation
const caseStudiesGlobe = document.querySelector('.case-studies-glow');
const caseStudiesSection = document.querySelector('.case-studies');

let isMouseInsidee = false;
let offsetXx = 0;
let offsetYy = 0;


caseStudiesSection.addEventListener('mousemove', (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;


    offsetX = (mouseX / windowWidth - 0.5) * 50;
    offsetY = (mouseY / windowHeight - 0.5) * 50;


    caseStudiesGlobe.style.transform = `translate(-50%, -50%) translate(${offsetX}%, ${offsetY}%)`;
});


caseStudiesSection.addEventListener('mouseenter', () => {
    isMouseInside = true;

    caseStudiesGlobe.style.transform = `translate(-50%, -50%) translate(${offsetX}%, ${offsetY}%)`;
});


caseStudiesSection.addEventListener('mouseleave', () => {
    isMouseInside = false;

    caseStudiesGlobe.style.transform = `translate(-50%, -50%) translate(${offsetX}%, ${offsetY}%)`;
});



// animation
const getInTouch = document.querySelector('.get-in-touch-glow');
const getInTouchSection = document.querySelector('.get-in-touch');

let isMouseInside = false;
let offsetX = 0;
let offsetY = 0;


getInTouchSection.addEventListener('mousemove', (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;


    offsetX = (mouseX / windowWidth - 0.5) * 30;
    offsetY = (mouseY / windowHeight - 0.5) * 30;


    getInTouch.style.transform = `translate(-50%, -50%) translate(${offsetX}%, ${offsetY}%)`;
});


getInTouchSection.addEventListener('mouseenter', () => {
    isMouseInside = true;

    getInTouch.style.transform = `translate(-50%, -50%) translate(${offsetX}%, ${offsetY}%)`;
});


getInTouchSection.addEventListener('mouseleave', () => {
    isMouseInside = false;

    getInTouch.style.transform = `translate(-50%, -50%) translate(${offsetX}%, ${offsetY}%)`;
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