export function initPricing() {
    const toggle = document.getElementById('pricing-toggle') as HTMLInputElement;
    const monthlyPrices = document.querySelectorAll('.price-monthly');
    const annualPrices = document.querySelectorAll('.price-annual');
    const monthlyLabels = document.querySelectorAll('.label-monthly');
    const annualLabels = document.querySelectorAll('.label-annual');

    if (!toggle) return;

    toggle.addEventListener('change', () => {
        const isAnnual = toggle.checked;

        if (isAnnual) {
            monthlyPrices.forEach(p => p.classList.add('hidden'));
            annualPrices.forEach(p => p.classList.remove('hidden'));
            
            monthlyLabels.forEach(l => l.classList.remove('text-primary', 'font-bold'));
            annualLabels.forEach(l => l.classList.add('text-primary', 'font-bold'));
        } else {
            monthlyPrices.forEach(p => p.classList.remove('hidden'));
            annualPrices.forEach(p => p.classList.add('hidden'));

            monthlyLabels.forEach(l => l.classList.add('text-primary', 'font-bold'));
            annualLabels.forEach(l => l.classList.remove('text-primary', 'font-bold'));
        }
    });
}