function cifra(mensagem, chave, operacao) {
    const alfabeto = "abcdefghijklmnopqrstuvwxyz";
    let resultado = "";

    for (let i = 0; i < mensagem.length; i++) {
        let char = mensagem[i];
        let isMaiuscula = char === char.toUpperCase();
        char = char.toLowerCase(); // Converter para minúscula para facilitar

        let index = alfabeto.indexOf(char);
        if (index !== -1) {
            let novoIndex = operacao === "cripto" 
                ? (index + chave) % alfabeto.length
                : (index - chave + alfabeto.length) % alfabeto.length;

            let novoChar = alfabeto[novoIndex];
            resultado += isMaiuscula ? novoChar.toUpperCase() : novoChar;
        } else {
            resultado += mensagem[i]; // Mantém caracteres não alfabéticos
        }
    }

    return resultado;
}

function criptografar() {
    let mensagem = document.getElementById("mensagem").value;
    let chave = parseInt(document.getElementById("chave").value);

    if (chave < 1 || chave > 25) {
        alert("A chave deve estar entre 1 e 25.");
        return;
    }

    let resultado = cifra(mensagem, chave, "cripto");
    document.getElementById("mensagemFinal").innerHTML = mensagem + " = " + resultado;
}

function descriptografar() {
    let mensagem = document.getElementById("mensagem").value;
    let chave = parseInt(document.getElementById("chave").value);

    if (chave < 1 || chave > 25) {
        alert("A chave deve estar entre 1 e 25.");
        return;
    }

    let resultado = cifra(mensagem, chave, "descripto");
    document.getElementById("mensagemFinal").innerHTML = mensagem + " = " + resultado;
}