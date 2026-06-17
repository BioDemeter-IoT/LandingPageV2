export function initCarousel() {
    const carouselContainer = document.getElementById('testimonials-carousel');
    const btnPrev = document.getElementById('carousel-prev');
    const btnNext = document.getElementById('carousel-next');

    if (!carouselContainer || !btnPrev || !btnNext) return;

    btnNext.addEventListener('click', () => {
        carouselContainer.scrollBy({ left: 350, behavior: 'smooth' });
    });

    btnPrev.addEventListener('click', () => {
        carouselContainer.scrollBy({ left: -350, behavior: 'smooth' });
    });
}