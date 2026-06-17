export function initTabs() {
    const tabButtons = document.querySelectorAll('[data-tab-target]');
    const tabContents = document.querySelectorAll('[data-tab-content]');

    tabButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const targetId = (e.currentTarget as HTMLElement).getAttribute('data-tab-target');

            tabButtons.forEach(t => {
                t.classList.remove('bg-background', 'text-foreground', 'shadow-sm');
                t.classList.add('text-muted-foreground');
                t.setAttribute('aria-selected', 'false');
            });
            tabContents.forEach(c => c.classList.add('hidden'));

            const currentBtn = e.currentTarget as HTMLElement;
            currentBtn.classList.remove('text-muted-foreground');
            currentBtn.classList.add('bg-background', 'text-foreground', 'shadow-sm');
            currentBtn.setAttribute('aria-selected', 'true');

            if (targetId) {
                const targetContent = document.getElementById(targetId);
                if (targetContent) targetContent.classList.remove('hidden');
            }
        });
    });
}