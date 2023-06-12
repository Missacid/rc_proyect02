const productoDestacado = JSON.parse(localStorage.getItem("destacado"));
console.log(productoDestacado);
const contenedorDestacado = document.getElementById(
  "juego-destacado-container"
);

contenedorDestacado.innerHTML = `
<div class="contenedor-juego-destacado">
        <div class="imagen-destacada">
          <img
            src="${productoDestacado.banner}"
            alt="${productoDestacado.nombre}"
            class="imagen-destacada-img"
          />
        </div>
        <div class="infojuego-contenedor">
          <div class="etiqueta-juego-destacado">Juego destacado</div>
          <div class="info-juego">
            <h2 class="juego-destacado-titulo">${productoDestacado.nombre}</h2>
            <p class="descripcion-juego-destacado">
              ${productoDestacado.descripcion}
            </p>
            <a href="/pages/product-page/plantilla/plantilla.html?id=${productoDestacado.codigo}">
            <button class="boton-comprar-ahora-juego-destacado">
              Comprar ahora
            </button>
          </a>
          </div>
        </div>
      </div>
`;
