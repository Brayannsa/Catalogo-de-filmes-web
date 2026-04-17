// 1. Seleciona o formulário (o "galho" principal) [cite: 61, 62]
const formulario = document.getElementById('meuFormulario');

// 2. Escuta o "aviso" (evento) de envio do formulário [cite: 109, 110, 113]
formulario.addEventListener('submit', function(evento) {
    
    // Impede o comportamento padrão de recarregar a página [cite: 131, 135]
    evento.preventDefault();

    // 3. Pega os valores digitados pelo usuário usando .value [cite: 114, 136]
    const tituloDigitado = document.getElementById('nomeFilme').value;
    const imagemDigitada = document.getElementById('urlImagem').value;
    const descDigitada = document.getElementById('descImagem').value;

    // 4. Cria uma estrutura (objeto) para guardar esses valores [cite: 147, 153]
    const novoFilme = {
        titulo: tituloDigitado,
        imagem: imagemDigitada,
        descricao: descDigitada
    };

    // Mostra o resultado no console (Aperte F12 no navegador para ver) [cite: 94, 96]
    console.log("Novo filme cadastrado:", novoFilme);
    
    alert("Filme " + tituloDigitado + " enviado com sucesso!");
});