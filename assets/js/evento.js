// Desplazarme hasta la galeria de fotos
function moverpagina() {
    const secciontarjetas = document.getElementById("secciontarjetas");

    secciontarjetas.scrollIntoView({
        behavior: "smooth",
        block: "start",
    });
}

// enviar mensaje

function enviarmensaje() {
    alert(
        " ¡Gracias por comunicarte con nosotros!. Muy pronto te responderemos"
    );
}
contador = document.getElementById("contador");

function sumar() {
    //console.log(contador.textContent); t y C
    let valor = contador.textContent;
    if (valor < 20) {
        // if(variable condicion {})
        contador.textContent = parseInt(valor) + 1;
    } else {
        alert("Hay tope de 20 peoductos");
    }
}

function multiplicar() {
    let valor = contador.textContent;
    contador.textContent = parseInt(valor) * 2;
}
