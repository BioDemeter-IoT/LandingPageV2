import { createIcons, icons } from 'lucide';

export function initAIBot() {
    const form = document.getElementById('ai-chat-form') as HTMLFormElement;
    const input = document.getElementById('ai-chat-input') as HTMLInputElement;
    const chatContainer = document.getElementById('ai-chat-messages') as HTMLElement;
    const typingIndicator = document.getElementById('ai-typing-indicator');

    if (!form || !input || !chatContainer) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const userMessage = input.value.trim();
        if (!userMessage) return;

        appendMessage(userMessage, 'user', chatContainer);
        input.value = '';

        if (typingIndicator) typingIndicator.classList.remove('hidden');
        scrollToBottom(chatContainer);

        setTimeout(() => {
            if (typingIndicator) typingIndicator.classList.add('hidden');
            const botResponse = "Analizando la telemetría IoT... Noto que la humedad está en 85%. Te recomiendo reducir la frecuencia de riego para evitar hojas amarillas 🌱.";
            appendMessage(botResponse, 'bot', chatContainer);
            scrollToBottom(chatContainer);
        }, 1500);
    });
}

function appendMessage(text: string, sender: 'user' | 'bot', container: HTMLElement) {
    const div = document.createElement('div');
    const isBot = sender === 'bot';

    div.className = `flex ${isBot ? 'justify-start' : 'justify-end'} animate-fade-in-up mt-4`;
    
    if (!isBot) {
        div.innerHTML = `
            <div class="flex items-start gap-3 max-w-[80%]">
                <div class="bg-primary text-primary-foreground rounded-2xl rounded-tr-sm px-4 py-3">
                    <p class="text-sm">${text}</p>
                </div>
                <div class="w-8 h-8 rounded-full bg-secondary flex items-center justify-center shrink-0">
                    <i data-lucide="user" class="w-4 h-4 text-muted-foreground"></i>
                </div>
            </div>
        `;
    } else {
        div.innerHTML = `
            <div class="flex items-start gap-3 max-w-[85%]">
                <div class="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center shrink-0">
                    <i data-lucide="bot" class="w-4 h-4 text-white"></i>
                </div>
                <div class="bg-secondary/50 border border-border/50 rounded-2xl rounded-tl-sm px-4 py-3">
                    <p class="text-sm text-foreground leading-relaxed">${text}</p>
                </div>
            </div>
        `;
    }

    container.appendChild(div);
    createIcons({ icons, nameAttr: 'data-lucide' });
}

function scrollToBottom(container: HTMLElement) {
    container.scrollTo({ top: container.scrollHeight, behavior: 'smooth' });
}