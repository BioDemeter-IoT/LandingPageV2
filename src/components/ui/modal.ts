export function initModal() {
    const openButtons = document.querySelectorAll('[data-modal-target]');
    const closeButtons = document.querySelectorAll('[data-modal-close]');

    openButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const targetId = (e.currentTarget as HTMLElement).getAttribute('data-modal-target');
            if (targetId) {
                const modal = document.getElementById(targetId);
                if (modal) {
                    modal.classList.remove('hidden');
                    modal.classList.add('flex', 'animate-in', 'fade-in', 'zoom-in-95');
                    document.body.style.overflow = 'hidden';
                }
            }
        });
    });

    closeButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const modal = (e.currentTarget as HTMLElement).closest('.fixed.inset-0'); 
            if (modal) {
                modal.classList.add('hidden');
                modal.classList.remove('flex', 'animate-in', 'fade-in', 'zoom-in-95');
                document.body.style.overflow = ''; 
            }
        });
    });
}