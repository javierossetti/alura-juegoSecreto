
let numeroSecreto = 0;
let numeroIntentos = 0;
let listaSorteados = [];
let maximosIntentos = 3;

function asignarElementoTexto(elemento, texto) {
    let elementoHtml = document.querySelector(elemento)
    elementoHtml.innerHTML = texto;
    return;
}
function generarRandomNum() {
    let numeroGenerado = Math.floor(Math.random()*10)+1;
        if (listaSorteados.includes(numeroGenerado)) {
            return numeroGenerado;
        } else {
            listaSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario === numeroSecreto){
        asignarElementoTexto ("p", `¡Acertaste el número secreto! Te llevó ${numeroIntentos} ${(numeroIntentos===1 ? "intento" : "intentos")}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarElementoTexto("p","El número es menor");
        } else {
            asignarElementoTexto ("p","El número es mayor");
        }

        numeroIntentos++;

        if (numeroIntentos > maximosIntentos) {
            asignarElementoTexto("p", `Llegaste al máximo de ${maximosIntentos} intentos. El juego se reiniciará.`);
            setTimeout(reiniciarJuego, 3000);
        } else {
            vaciarImput();
        }
    }
    return;
}
function vaciarImput(){
    let limpiarImput = document.querySelector("#valorUsuario").value = ""
}
function condicionesIniciales () {
    asignarElementoTexto ("h1", "Juego del número secreto");
    asignarElementoTexto ("p", "Coloca un número del 1 al 10");
    numeroSecreto = generarRandomNum();
    numeroIntentos = 1;
    console.log(numeroSecreto)

}

function reiniciarJuego () {
    vaciarImput();
    condicionesIniciales();
    document.getElementById("reiniciar").setAttribute("disabled","true");
    
}
condicionesIniciales(); 