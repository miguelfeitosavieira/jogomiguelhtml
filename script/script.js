document.addEventListener("DOMContentLoaded", () => {
    const input = document.querySelector(".TamanhoDaCaixa input");

    if (!input) return; // segurança: evita erro se não achar o input

    // Texto com pausa no final
    let texto = input.value + "   "; 
    let posicao = 0;

    function moverTexto() {
        input.value = texto.substring(posicao) + texto.substring(0, posicao);
        posicao = (posicao + 1) % texto.length;
    }

    // velocidade: 200ms
    setInterval(moverTexto, 200);
});
