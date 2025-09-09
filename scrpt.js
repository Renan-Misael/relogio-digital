function atualizarRelogio() {
    const agora = new Date();
    const horas = String(agora.getHours()).padStart(2, '0');
    const minutos = String(agora.getMinutes()).padStart(2, '0');
    const segundos = String(agora.getSeconds()).padStart(2, '0');

    const tempoFormatado = `${horas}:${minutos}:${segundos}`;

    document.getElementById('relogio').textContent = tempoFormatado;
}

// Atualiza o relógio a cada segundo (1000 milissegundos)
setInterval(atualizarRelogio, 1000);

// Chama a função uma vez ao carregar a página para exibir o horário imediatamente
atualizarRelogio();
