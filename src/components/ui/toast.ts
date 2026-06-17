import { createIcons, icons } from 'lucide';

export function initToast() {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        container.className = 'fixed bottom-4 right-4 z-[100] flex flex-col gap-3 pointer-events-none';
        document.body.appendChild(container);
    }
}

export function showToast(message: string, type: 'success' | 'error' | 'info' = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    
    // Estilos basados en Tailwind (coinciden con la UI original)
    const baseClasses = 'pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg text-sm font-medium transition-all duration-300 transform translate-y-0 opacity-100';
    let typeClasses = '';
    let iconName = '';

    switch (type) {
        case 'success':
            typeClasses = 'bg-green-50 text-green-900 border border-green-200';
            iconName = 'check-circle';
            break;
        case 'error':
            typeClasses = 'bg-red-50 text-red-900 border border-red-200';
            iconName = 'alert-circle';
            break;
        default:
            typeClasses = 'bg-white text-gray-900 border border-gray-200';
            iconName = 'info';
    }

    toast.className = `${baseClasses} ${typeClasses}`;
    toast.innerHTML = `
        <i data-lucide="${iconName}" class="w-5 h-5 shrink-0"></i>
        <span class="flex-grow">${message}</span>
        <button class="ml-2 opacity-70 hover:opacity-100 transition-opacity" onclick="this.parentElement.style.opacity='0'; setTimeout(()=>this.parentElement.remove(), 300)">
            <i data-lucide="x" class="w-4 h-4"></i>
        </button>
    `;

    container.appendChild(toast);
    createIcons({ icons, nameAttr: 'data-lucide' });

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(10px)';
        setTimeout(() => toast.remove(), 300);
    }, 4000);
}