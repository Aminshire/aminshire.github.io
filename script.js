// Theme Toggle (Light/Dark Mode)
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeToggle.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
});

// Scroll-triggered animations (Cross-browser compatible)
const sections = document.querySelectorAll('section');
const footer = document.querySelector('footer');

window.addEventListener('scroll', () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;
        if (sectionTop < screenHeight - 100) { // More forgiving threshold for browsers
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });

    // Show footer on scroll
    const footerTop = footer.getBoundingClientRect().top;
    if (footerTop < window.innerHeight) {
        footer.style.opacity = '1';
    }
});
