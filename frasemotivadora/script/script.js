// script.js
document.addEventListener("DOMContentLoaded", () => {
    const input = document.querySelector(".TamanhoDaCaixa input");

    // ✅ Se quiser sem espaços extras, basta deixar só input.value
    // let texto = input.value; 
    // ✅ Se quiser apenas um espaço de pausa:
    // let texto = input.value + " ";
    // ✅ Se quiser mais pausa, mantenha os três espaços:
    let texto = input.value + "   "; 

    let posicao = 0;

    function moverTexto() {
        // desloca o texto horizontalmente simulando um marquee
        input.value = texto.substring(posicao) + texto.substring(0, posicao);
        posicao = (posicao + 1) % texto.length;
    }

    // atualiza a cada 200ms (pode ajustar a velocidade)
    setInterval(moverTexto, 200);
});
