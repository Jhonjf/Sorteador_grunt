document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-sorteador').addEventListener('submit', function(evento) {
        evento.preventDefault(); // Evita o envio do formulário e o recarregamento da página

        let numeroMaximo = document.getElementById('numero-maximo').value;
        numeroMaximo = parseInt(numeroMaximo);

        // Verifica se o número máximo é válido
        if (isNaN(numeroMaximo) || numeroMaximo <= 1) {
            alert('Por favor, insira um número válido maior que 1');
            return;
        }

        // Gera um número aleatório entre 1 e numeroMaximo (inclusivo)
        let numeroAleatorio = Math.floor(Math.random() * numeroMaximo) + 1;

        // Exibe o número aleatório no elemento com ID resultado-valor
        document.getElementById('resultado-valor').innerText = numeroAleatorio;

        // Torna o elemento .resultado visível
        document.querySelector('.resultado').style.display = 'block';
    });
});
