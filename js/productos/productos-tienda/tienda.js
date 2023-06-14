const productosLocal = JSON.parse(localStorage.getItem("products"));
console.log(productosLocal);
const contenedorJuegos = document.getElementById("contenedor-juegos-tienda");
function mostrarProductos() {
  productosLocal.forEach((producto) => {
    contenedorJuegos.innerHTML += `
      <div class="producto-tienda">
        <img
          src="${producto.portada}"
          alt="${producto.nombre}"
          class="imagen-juego-tienda"
        />
        <h5 class="titulo-juego-tienda">${producto.nombre}</h5>
        <h6 class="categoría-juego-tienda">${producto.categoria}</h6>
        <a class="hipervinculo-ver-mas-juego-tienda" href="/pages/product-page/plantilla/plantilla.html?id=${producto.codigo}">Ver Más</a>
      </div>
        `;
  });
}
mostrarProductos();
