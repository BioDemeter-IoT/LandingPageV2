export function initAccordion() {
    const accordionTriggers = document.querySelectorAll('.accordion-trigger');

    accordionTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            const btn = e.currentTarget as HTMLButtonElement;
            const content = btn.nextElementSibling as HTMLElement;
            const icon = btn.querySelector('.lucide-chevron-down') as HTMLElement;
            
            const isOpen = btn.getAttribute('aria-expanded') === 'true';

            accordionTriggers.forEach(t => {
                t.setAttribute('aria-expanded', 'false');
                t.nextElementSibling?.classList.add('hidden');
                t.parentElement?.classList.remove('border-accent/30', 'shadow-lg');
                const tIcon = t.querySelector('.lucide-chevron-down');
                if(tIcon) tIcon.classList.remove('rotate-180');
            });

            if (!isOpen) {
                btn.setAttribute('aria-expanded', 'true');
                content.classList.remove('hidden');
                btn.parentElement?.classList.add('border-accent/30', 'shadow-lg');
                if(icon) icon.classList.add('rotate-180');
            }
        });
    });
}