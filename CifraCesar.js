const criptografar = (mensagem) => {
    const alfabeto = "abcdefghijklmnopqrstuvwxyz"
    let mensagemFinal = ""
    for (i = 0; i < mensagem.length; i++) {
        if (alfabeto.indexOf(mensagem[i]) !== -1) {
            x = alfabeto.indexOf(mensagem[i])
            y = alfabeto[Math.abs((x + 3) % alfabeto.length)]
            mensagemFinal += y
        }
        else {
            mensagemFinal += mensagem[i]
        }

    }console.log(`${mensagem} = ${mensagemFinal}`)
}

const descriptografar = (mensagem) => {
    const alfabeto = "abcdefghijklmnopqrstuvwxyz"
    let mensagemFinal = ""
    for (i = 0; i < mensagem.length; i++) {
        if (alfabeto.indexOf(mensagem[i]) !== -1) {
            x = alfabeto.indexOf(mensagem[i])
            y = alfabeto[Math.abs((x - 3) % alfabeto.length)]
            mensagemFinal += y
        }
        else {
            mensagemFinal += mensagem[i]
        }

    }console.log(`${mensagem} = ${mensagemFinal}`)
}