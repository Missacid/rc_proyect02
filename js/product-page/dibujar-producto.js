const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
console.log(id);
const productosLocal = JSON.parse(localStorage.getItem("products"));
console.log(productosLocal);

const producto = productosLocal.find((producto) => producto.id == id);
console.log(producto);

function dibujarPagina() {
  const infoPrincipal = document.getElementById("product-main-info");

  infoPrincipal.innerHTML = `
        
    <div class="product-main-info" >
      <section class="title-container">
        <h2 class="game-title-product-page">${producto.titulo}</h2>
        <h3 class="game-category-product-page">${producto.categoria}</h3>
      </section>
      <section class="game-info-container">
        <div class="info-game-container game-video-container">
          <iframe width="100%" height="100%" src="${producto.video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div class="info-game-container game-description-container">
          <h3>Descripción</h3>
          <hr>
          <p>${producto.descripcion}</p>
        </div>
      </section>
      
    </div>
    <div class="product-main-background" style="background-image: url(${producto.banner});background-size: cover;">
      
      
    </div>
  `;
  const compra = document.getElementById("requisitos-y-compra");
  compra.innerHTML = `
  <div class="product-requeriments-column requeriments-product">
  <h3 class="requeriment-title">Requisitos </h3>
  <hr>
  <p>${producto.requisitos}</p>
</div>
<div class="product-requeriments-column purchase-column">
  <div class="sticky-container">
  <h3 class="purchase-title">Comprar ahora</h3>
  <img  class="product-cover-art" src="${producto.cover}" alt="" >
  <h3 id="precio-juego" class="product-price">$${producto.precio}</h3>
  <div class="button-container">
    <a href="/pages/404/404.html">
    <button class="btn btn-danger">Comprar ahora</button>
  </a>
  <a href="/pages/404/404.html">
    <button class="btn btn-secondary">Agregar al carrito</button>
  </a>
  </div>
</div>

</div>
  `;
  const precioJuego = document.getElementById("precio-juego");
  if (producto.precio === 0) {
    precioJuego.innerHTML = " Gratis";
  } else {
    precioJuego.innerHTML = `$${producto.precio}`;
  }
}
dibujarPagina();
