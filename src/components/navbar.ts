export function initNavbar() {
    const header = document.getElementById('main-header');
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (!header) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            header.classList.add('shadow-lg');
            header.classList.remove('bg-background/80');
            header.classList.add('bg-background/95');
        } else {
            header.classList.remove('shadow-lg');
            header.classList.add('bg-background/80');
            header.classList.remove('bg-background/95');
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