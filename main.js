document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }

    // Scroll Effect on Navbar
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navbar.contains(e.target) && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });

    // Cursor Gear Effect
    const gearIcon = `<svg viewBox="0 0 100 100" fill="currentColor"><path d="M93.3,44.7l-9.3-1.6c-0.6-2.5-1.5-4.8-2.6-7l5.4-7.8c0.8-1.2,0.6-2.8-0.5-3.8l-7.1-7.1c-1-1-2.6-1.3-3.8-0.5l-7.8,5.4 c-2.2-1.1-4.5-2-7-2.6l-1.6-9.3c-0.2-1.4-1.4-2.4-2.8-2.4h-10c-1.4,0-2.6,1-2.8,2.4l-1.6,9.3c-2.5,0.6-4.8,1.5-7,2.6l-7.8-5.4 c-1.2-0.8-2.8-0.6-3.8,0.5l-7.1,7.1c-1,1-1.3,2.6-0.5,3.8l5.4,7.8c-1.1,2.2-2,4.5-2.6,7l-9.3,1.6c-1.4,0.2-2.4,1.4-2.4,2.8v10 c0,1.4,1,2.6,2.4,2.8l9.3,1.6c0.6,2.5,1.5,4.8,2.6,7l-5.4,7.8c-0.8,1.2-0.6,2.8,0.5,3.8l7.1,7.1c1,1,2.6,1.3,3.8,0.5l7.8-5.4 c2.2,1.1,4.5,2,7,2.6l1.6,9.3c0.2,1.4,1.4,2.4,2.8,2.4h10c1.4,0,2.6-1,2.8-2.4l1.6-9.3c2.5-0.6,4.8-1.5,7-2.6l7.8,5.4 c1.2,0.8,2.8,0.6,3.8-0.5l7.1-7.1c1-1,1.3-2.6,0.5-3.8l-5.4-7.8c1.1-2.2,2-4.5,2.6-7l9.3-1.6c1.4-0.2,2.4-1.4,2.4-2.8v-10 C95.7,46.1,94.7,44.9,93.3,44.7z M50,65.5c-8.6,0-15.5-6.9-15.5-15.5S41.4,34.5,50,34.5S65.5,41.4,65.5,50S58.6,65.5,50,65.5z"/></svg>`;

    const gear1 = document.createElement('div');
    gear1.className = 'cursor-gear';
    gear1.innerHTML = gearIcon;
    gear1.style.width = '60px';
    gear1.style.height = '60px';
    gear1.style.transformOrigin = '50% 50%';

    const gear2 = document.createElement('div');
    gear2.className = 'cursor-gear';
    gear2.innerHTML = gearIcon;
    gear2.style.width = '35px';
    gear2.style.height = '35px';
    gear2.style.transformOrigin = '50% 50%';

    const gear3 = document.createElement('div');
    gear3.className = 'cursor-gear';
    gear3.innerHTML = gearIcon;
    gear3.style.width = '20px';
    gear3.style.height = '20px';
    gear3.style.transformOrigin = '50% 50%';

    document.body.appendChild(gear1);
    document.body.appendChild(gear2);
    document.body.appendChild(gear3);

    let mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2;
    let gear1X = mouseX, gear1Y = mouseY;
    let gear2X = mouseX, gear2Y = mouseY;
    let gear3X = mouseX, gear3Y = mouseY;
    let rotation = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateGears() {
        gear1X += (mouseX - gear1X) * 0.15;
        gear1Y += (mouseY - gear1Y) * 0.15;
        
        gear2X += (mouseX - gear2X) * 0.1;
        gear2Y += (mouseY - gear2Y) * 0.1;

        gear3X += (mouseX - gear3X) * 0.05;
        gear3Y += (mouseY - gear3Y) * 0.05;
        
        rotation += 1;

        gear1.style.transform = `translate(${gear1X + 15}px, ${gear1Y + 15}px) rotate(${rotation}deg)`;
        gear2.style.transform = `translate(${gear2X - 25}px, ${gear2Y - 5}px) rotate(${-rotation * 1.5}deg)`;
        gear3.style.transform = `translate(${gear3X + 35}px, ${gear3Y - 20}px) rotate(${rotation * 2.5}deg)`;
        
        requestAnimationFrame(animateGears);
    }
    animateGears();
});

// Preloader Removal
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.classList.add('fade-out');
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500); // Wait for transition to finish
    }
});
