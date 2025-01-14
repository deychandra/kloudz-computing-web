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

