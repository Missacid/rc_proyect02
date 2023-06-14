const productosLocal = JSON.parse(localStorage.getItem("products"));
console.log(productosLocal);
const contenedorJuegos = document.getElementById("contenedor-juegos");
function mostrarProductos() {
  productosLocal.forEach((producto) => {
    contenedorJuegos.innerHTML += `
    <div class="producto-inicio">
    <img
      src="${producto.portada}"
      alt="${producto.nombre}"
      class="imagen-juego-inicio"
    />
    <h5 class="titulo-juego-inicio">${producto.nombre}</h5>
    <h6 class="categoría-juego-inicio">${producto.categoria}</h6>
    <a class="hipervinculo-ver-mas-juego-inicio" href="/pages/product-page/plantilla/plantilla.html?id=${producto.codigo}">Ver Más</a>
  </div>
        `;
  });
}
mostrarProductos();

