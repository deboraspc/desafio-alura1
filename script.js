// Função para criptografar o texto
function criptografarTexto(texto) {
    return texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}


function descriptografarTexto(texto) {
    return texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}


function copiarTexto() {
    const resultado = document.getElementById('resultado');
    resultado.select();
    document.execCommand('copy');
}


document.getElementById('criptografar').addEventListener('click', function() {
    const texto = document.getElementById('texto').value;
    const resultado = criptografarTexto(texto);
    document.getElementById('resultado').value = resultado;
});

document.getElementById('descriptografar').addEventListener('click', function() {
    const texto = document.getElementById('texto').value;
    const resultado = descriptografarTexto(texto);
    document.getElementById('resultado').value = resultado;
});

document.getElementById('copiar').addEventListener('click', function() {
    copiarTexto();
});
