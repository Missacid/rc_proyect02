const divContenedorAudio = document.getElementById("contenedor-accion");
divContenedorAudio.addEventListener("click", reproducirSonido);
let contadorMonedas = 0;
function reproducirSonido() {
  let audio = document.getElementById("audio-moneda");
  audio.currentTime = 0;
  audio.play();

  contadorMonedas++;
  let textoContador = document.getElementById("contador-monedas");
  textoContador.innerHTML = "";
  textoContador.innerHTML = `<img class="mario-moneda" src="/assets/images/404/coin.gif">Tienes ${contadorMonedas} monedas`;
}
