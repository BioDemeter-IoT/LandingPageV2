export function initNavbar() {
    const header = document.getElementById('main-header');
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (!header) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            header.classList.add('glass', 'shadow-lg', 'shadow-primary/5');
            header.classList.remove('bg-transparent');
        } else {
            header.classList.remove('glass', 'shadow-lg', 'shadow-primary/5');
            header.classList.add('bg-transparent');
        }
    });

    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
            const isHidden = mobileMenu.classList.contains('hidden');
            if (isHidden) {
                mobileMenu.classList.remove('hidden');
                mobileMenu.style.opacity = '0';
                setTimeout(() => mobileMenu.style.opacity = '1', 10);
            } else {
                mobileMenu.classList.add('hidden');
            }
        });
    }
}