document.addEventListener("DOMContentLoaded", function () {
    // ✅ Menu Open/Close
    const toggleHamburger = document.querySelector('.toggle-hamburger');
    const mbContainer = document.querySelector('.mb-container');
    const tgl = document.querySelector('.tgl');

    if (toggleHamburger && mbContainer && tgl) {
        toggleHamburger.addEventListener('click', function () {
            mbContainer.classList.add('open-menu');
        });

        tgl.addEventListener('click', function () {
            mbContainer.classList.remove('open-menu');
        });
    }

    // ✅ Animation Function
    function addMouseMoveAnimation(imageClass, sectionClass, intensity) {
        const image = document.querySelector(imageClass);
        const section = document.querySelector(sectionClass);

        if (!image || !section) {
            console.warn(`Warning: Element ${imageClass} or ${sectionClass} not found.`);
            return;
        }

        let offsetX = 0;
        let offsetY = 0;

        section.addEventListener('mousemove', (event) => {
            const mouseX = event.clientX;
            const mouseY = event.clientY;
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;

            offsetX = (mouseX / windowWidth - 0.5) * intensity;
            offsetY = (mouseY / windowHeight - 0.5) * intensity;

            image.style.transform = `translate(-50%, -50%) translate(${offsetX}%, ${offsetY}%)`;
        });

        // ✅ Removed mouseleave event to prevent resetting the position
    }

    // ✅ Add animations to sections
    addMouseMoveAnimation('.glow-move', '.why-choose-us', 50);
    addMouseMoveAnimation('.why-choose-glow', '.why-choose-kloudz', 150);
    addMouseMoveAnimation('.we-serve-move', '.We-Serve', 40);
    addMouseMoveAnimation('.case-studies-glow', '.case-studies', 50);
    addMouseMoveAnimation('.get-in-touch-glow', '.get-in-touch', 30);
    addMouseMoveAnimation('.get-in-touch-glow-new', '.get-in-touch', 30);
    addMouseMoveAnimation('.get-in-touch-glow', '.contact-get-touch', 30);
    addMouseMoveAnimation('.smart-solutions-glow', '.smart-solutions', 30);
    addMouseMoveAnimation('.get-in-touch-glow', '.what-we-do', 30);
    addMouseMoveAnimation('.footer-glow', 'footer', 30);
    addMouseMoveAnimation('.ask-away-glow', '.ask-away', 30);
    addMouseMoveAnimation('.inner-glow', '.inner-banner', 40);

    // ✅ Swiper Scroll
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
});


// document.addEventListener('DOMContentLoaded', function () {
//     const boxWrap = document.querySelector('.box-wrap');
//     if (boxWrap) {
//         const rect = boxWrap.getBoundingClientRect();
//         const centerX = rect.left + rect.width / 2;
//         const centerY = rect.top + rect.height / 2;
//         document.addEventListener('mousemove', (e) => {
//             const mouseX = e.clientX - centerX;
//             const mouseY = e.clientY - centerY;
//             const maxDistance = 20;
//             const translateX = (mouseX / rect.width) * maxDistance;
//             const translateY = (mouseY / rect.height) * maxDistance;
//             boxWrap.style.transform = `translate(${translateX}px, ${translateY}px)`;
//         });
//         boxWrap.addEventListener('mouseleave', () => {
//             boxWrap.style.transform = 'translate(0, 0)';
//         });
//     }
// });




const box = document.querySelector('.box-wrap');

document.addEventListener('mousemove', (e) => {
    const { clientX: x, clientY: y } = e;
    const { innerWidth: width, innerHeight: height } = window;

    const boxRect = box.getBoundingClientRect(); // Get div size
    const maxMoveX = (width - boxRect.width) / 2; // Ensure full visibility
    const maxMoveY = (height - boxRect.height) / 2;

    const moveX = ((x / width) - 0.5) * maxMoveX;
    const moveY = ((y / height) - 0.5) * maxMoveY;

    box.style.transform = `translate(calc(-50% + ${moveX}px), calc(-50% + ${moveY}px))`;
});

document.addEventListener('mouseleave', () => {
    box.style.transition = "transform 1s ease-out"; // Smooth return
    box.style.transform = "translate(-50%, -50%)"; // Center back
});