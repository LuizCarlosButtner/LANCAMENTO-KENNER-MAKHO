// Script do Modal - Vem Assistir
const modal = document.getElementById('mediaModal');

function openModal() {
    modal.classList.remove('hidden');
    setTimeout(() => {
        modal.classList.remove('opacity-0');
        modal.classList.add('opacity-100');
    }, 10);
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('opacity-100');
    modal.classList.add('opacity-0');
    setTimeout(() => {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }, 300);
}

// Fechar modal com tecla ESC
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape" && !modal.classList.contains('hidden')) {
        closeModal();
    }
});
