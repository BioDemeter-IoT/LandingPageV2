import es from './es.json';
import en from './en.json';

const translations: Record<string, any> = { es, en };
let currentLang = 'es'; 

export function initI18n() {
    applyTranslations(currentLang);

    const langButtons = document.querySelectorAll('[data-lang-switch]');
    langButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const target = e.currentTarget as HTMLElement;
            const lang = target.getAttribute('data-lang-switch');
            
            if (lang && translations[lang]) {
                currentLang = lang;
                
                applyTranslations(lang);
                
                langButtons.forEach(b => {
                    b.classList.remove('bg-secondary/50', 'font-bold');
                    b.classList.add('hover:bg-secondary/50');
                });
                
            
                target.classList.add('bg-secondary/50', 'font-bold');
                target.classList.remove('hover:bg-secondary/50'); 
            }
        });
    });
}

function applyTranslations(lang: string) {
    document.documentElement.lang = lang;
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(el => {
        const path = el.getAttribute('data-i18n');
        if (!path) return;

        const text = path.split('.').reduce((obj, key) => (obj ? obj[key] : null), translations[lang]);
        
        if (typeof text === 'string') {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                (el as HTMLInputElement).placeholder = text;
            } else {
                el.innerHTML = text; 
            }
        }
    });
}