import './styles/globals.css';
import { createIcons, icons } from 'lucide';
import { initI18n } from './i18n/i18n';
import { initNavbar } from './components/navbar';
import { initAIBot } from './components/ai-bot';
import { initAccordion } from './components/ui/accordion';
import { initCarousel } from './components/ui/carousel';
import { initModal } from './components/ui/modal';
import { initTabs } from './components/ui/tabs';
import { initToast } from './components/ui/toast';
import { initPricing } from './components/pricing';

document.addEventListener('DOMContentLoaded', () => {
    createIcons({ icons });

    initI18n();
    initNavbar();
    initAIBot();
    
    initAccordion();
    initCarousel();
    initModal();
    initTabs();
    initToast();
    initPricing();
});