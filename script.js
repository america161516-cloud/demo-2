// Scroll Animation for fade-in elements
document.addEventListener('DOMContentLoaded', function() {

    // Generate repeating SUHAIL background grid
    const bgContainer = document.getElementById('bgTextContainer');
    if (bgContainer) {
        const textWord = 'SUHAIL';
        const rowHeight = window.innerHeight / 4.5;
        const totalRows = Math.ceil(window.innerHeight / rowHeight) + 2;
        const copiesPerRow = 5;

        for (let r = 0; r < totalRows; r++) {
            const row = document.createElement('div');
            row.classList.add('bg-row');
            // Offset every other row for staggered look
            if (r % 2 === 1) row.style.marginLeft = '-6vw';
            for (let c = 0; c < copiesPerRow + 1; c++) {
                const span = document.createElement('span');
                span.classList.add('bg-text');
                span.textContent = textWord;
                row.appendChild(span);
            }
            bgContainer.appendChild(row);
        }
    }

    // Parallax effect for background grid
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        if (bgContainer) {
            bgContainer.style.transform = `translateY(${scrollY * 0.08}px)`;
        }
    });

    // Add fade-in class to all portfolio cards and sections
    const animateElements = document.querySelectorAll('.portfolio-card, .section-badge, .section-title, .about-text, .contact-item, .pill-badge');

    animateElements.forEach((el, index) => {
        el.classList.add('fade-in');
        el.style.transitionDelay = `${(index % 5) * 0.1}s`;
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    animateElements.forEach(el => observer.observe(el));

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Portfolio card hover z-index
    const cards = document.querySelectorAll('.portfolio-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.zIndex = '10';
        });
        card.addEventListener('mouseleave', function() {
            this.style.zIndex = '1';
        });
    });

    console.log('Suhail Portfolio website loaded successfully!');
});