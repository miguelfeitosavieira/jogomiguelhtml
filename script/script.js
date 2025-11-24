// script.js
document.addEventListener("DOMContentLoaded", () => {
    const input = document.querySelector(".TamanhoDaCaixa input");
    let texto = input.value + "   "; // adiciona espaços para suavizar a transição
    let posicao = 0;

    function moverTexto() {
        // desloca o texto horizontalmente simulando um marquee
        input.value = texto.substring(posicao) + texto.substring(0, posicao);
        posicao = (posicao + 1) % texto.length;
    }

    // atualiza a cada 200ms (pode ajustar a velocidade)
    setInterval(moverTexto, 200);
});
    