const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const cifra = (mensagem, chave, operacao) => {
    const alfabeto = "abcdefghijklmnopqrstuvwxyz";
    let mensagemFinal = "";

    for (let i = 0; i < mensagem.length; i++) {
        let char = mensagem[i];
        let isMaiuscula = char === char.toUpperCase();
        char = char.toLowerCase(); // Converter para minúscula para facilitar a busca

        let index = alfabeto.indexOf(char);
        if (index !== -1) {
            let novoIndex = operacao === "cripto"
                ? (index + chave) % alfabeto.length
                : (index - chave + alfabeto.length) % alfabeto.length;

            let novoChar = alfabeto[novoIndex];
            mensagemFinal += isMaiuscula ? novoChar.toUpperCase() : novoChar;
        } else {
            mensagemFinal += mensagem[i]; // Mantém caracteres não alfabéticos
        }
    }

    return mensagemFinal;
};

const criptografar = (mensagem, chave = 3) => cifra(mensagem, chave, "cripto");
const descriptografar = (mensagem, chave = 3) => cifra(mensagem, chave, "descripto");

const iniciarPrograma = () => {
    rl.question("\nDigite '1' para criptografar, '2' para descriptografar ou '0' para sair: ", (opcao) => {
        if (opcao === "0") {
            console.log("Saindo do programa...");
            rl.close();
            return;
        }

        if (opcao !== "1" && opcao !== "2") {
            console.log("Opção inválida! Tente novamente.");
            return iniciarPrograma();
        }

        rl.question("Digite a mensagem: ", (mensagem) => {
            rl.question("Digite a chave (1-25): ", (chave) => {
                chave = parseInt(chave);

                if (isNaN(chave) || chave < 1 || chave > 25) {
                    console.log("Chave inválida! Deve ser um número entre 1 e 25.");
                    return iniciarPrograma();
                }

                let resultado = opcao === "1"
                    ? criptografar(mensagem, chave)
                    : descriptografar(mensagem, chave);

                console.log(`Resultado: ${resultado}`);
                iniciarPrograma(); // Reinicia o loop
            });
        });
    });
};

iniciarPrograma();
