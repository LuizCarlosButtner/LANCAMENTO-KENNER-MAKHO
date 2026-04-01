// Script do Countdown - Contador regressivo
const targetDate = new Date('2026-04-29T09:00:00');
let countdownInterval;

function updateCountdown() {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
        clearInterval(countdownInterval);
        const label = document.getElementById('countdown-label');
        if (label) {
            label.innerText = 'AO VIVO';
            label.classList.add('animate-pulse', 'text-lg', 'font-bold');
            label.classList.remove('font-medium');
        }
        document.getElementById('days').innerText = '00';
        document.getElementById('hours').innerText = '00';
        document.getElementById('minutes').innerText = '00';
        document.getElementById('seconds').innerText = '00';
        return;
    }

    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    if(daysEl) daysEl.innerText = Math.floor(diff / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
    if(hoursEl) hoursEl.innerText = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
    if(minutesEl) minutesEl.innerText = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
    if(secondsEl) secondsEl.innerText = Math.floor((diff % (1000 * 60)) / 1000).toString().padStart(2, '0');
}

countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();
