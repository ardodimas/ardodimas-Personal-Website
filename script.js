// Scroll Animation Functionality
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const scrollObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll-active');
            scrollObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all elements with scroll animation classes
document.addEventListener('DOMContentLoaded', function() {
    // Add scroll animations to sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        if (index !== 0) { // Skip home section
            section.classList.add('scroll-fade');
            scrollObserver.observe(section);
        }
    });

    // Add animations to skill boxes
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box, index) => {
        box.classList.add('scroll-slide-up');
        box.style.animationDelay = `${index * 0.2}s`;
        scrollObserver.observe(box);
    });

    // Add animations to portfolio items
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach((item, index) => {
        item.classList.add('scroll-zoom');
        item.style.animationDelay = `${(index % 3) * 0.15}s`;
        scrollObserver.observe(item);
    });

    // Add animation to about section content
    const pic = document.getElementById('pic');
    if (pic) {
        pic.classList.add('scroll-zoom');
        scrollObserver.observe(pic);
    }

    // Portfolio Modal Functionality
    const portfolioItemsModal = document.querySelectorAll('.portfolio-item');
    const modal = document.getElementById('portfolio-modal');
    const modalImg = document.getElementById('modal-img');
    const modalCaption = document.querySelector('.modal-caption');
    const closeBtn = document.querySelector('.modal-close');

    // Open modal when portfolio item is clicked
    portfolioItemsModal.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            const title = this.getAttribute('data-title');
            
            modalImg.src = img.src;
            modalImg.alt = img.alt;
            modalCaption.textContent = title;
            modal.classList.add('show');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        });
    });

    // Close modal when X is clicked
    closeBtn.addEventListener('click', function() {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    });

    // Close modal when clicking outside the image
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            modal.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
    });
});

