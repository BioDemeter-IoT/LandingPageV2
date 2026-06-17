import es from './es.json';
import en from './en.json';

const translations: Record<string, any> = { es, en };
let currentLang = 'es'; 

export function initI18n() {
    applyTranslations(currentLang);

    const langButtons = document.querySelectorAll('[data-lang-switch]');
    langButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const lang = (e.currentTarget as HTMLElement).getAttribute('data-lang-switch');
            if (lang && translations[lang]) {
                currentLang = lang;
                applyTranslations(lang);
                
                const currentLangLabel = document.getElementById('current-lang-label');
                if (currentLangLabel) currentLangLabel.textContent = lang;
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