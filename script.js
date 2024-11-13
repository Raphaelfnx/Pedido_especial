document.addEventListener('DOMContentLoaded', () => {
    const btnNao = document.getElementById('nao');
    const btnSim = document.getElementById('sim');
    const container = document.querySelector('.container');
    const celebracao = document.getElementById('celebracao');
    let primeiraInteracao = true;

    function moverBotao() {
        if (primeiraInteracao) {
            btnNao.style.position = 'absolute';
            primeiraInteracao = false;
        }
        
        const maxX = window.innerWidth - btnNao.offsetWidth;
        const maxY = window.innerHeight - btnNao.offsetHeight;
        
        const novoX = Math.random() * maxX;
        const novoY = Math.random() * maxY;
        
        btnNao.style.left = novoX + 'px';
        btnNao.style.top = novoY + 'px';
    }

    // Evento para mouse
    btnNao.addEventListener('mouseover', moverBotao);

    // Eventos para touch
    btnNao.addEventListener('touchstart', (e) => {
        e.preventDefault();
        moverBotao();
    });

    // Evento do botão SIM
    btnSim.addEventListener('click', () => {
        container.style.display = 'none';
        celebracao.classList.remove('hidden');
    });
});
