// 20. Jogo da Forca
// Descrição: O clássico jogo da forca com palavras ocultas.
// Entradas: Letras digitadas.
// Exemplo de Saída: “_ _ R R A M _ (Tentativas restantes: 3)”
function jogoDaForca() {
    const palavras = ["banana", "laranja", "abacaxi", "manga", "uva"];
    const palavraEscolhida = palavras[Math.floor(Math.random() * palavras.length)];
    let tentativasRestantes = 6;
    let letrasErradas = [];
    let letrasCorretas = Array(palavraEscolhida.length).fill("_");

    while (tentativasRestantes > 0 && letrasCorretas.includes("_")) {
        console.log(letrasCorretas.join(" ") + ` (Tentativas restantes: ${tentativasRestantes})`);
        const letra = prompt("Digite uma letra: ").toLowerCase();

        if (letra.length !== 1 || !/^[a-z]$/.test(letra)) {
            console.log("Por favor, digite apenas uma letra.");
            continue;
        }

        if (palavraEscolhida.includes(letra)) {
            for (let i = 0; i < palavraEscolhida.length; i++) {
                if (palavraEscolhida[i] === letra) {
                    letrasCorretas[i] = letra;
                }
            }
        } else {
            if (!letrasErradas.includes(letra)) {
                letrasErradas.push(letra);
                tentativasRestantes--;
            } else {
                console.log("Você já tentou essa letra.");
            }
        }
    }

    if (letrasCorretas.includes("_")) {
        console.log(`Você perdeu! A palavra era "${palavraEscolhida}".`);
    } else {
        console.log(`Parabéns! Você adivinhou a palavra: "${palavraEscolhida}".`);
    }
}