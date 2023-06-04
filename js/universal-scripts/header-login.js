function validarSesion() {
  const usuarioLogueado = JSON.parse(localStorage.getItem("usuarioActual"));
  console.log(usuarioLogueado);
  const divLogin = document.getElementById("login-container");

  if (!usuarioLogueado) {
    // Pinto boton de login si es que no hay usuario logueado
    divLogin.innerHTML = `            <a  class="a-link-login" href="/pages/login/login.html">
    <button class="boton-iniciar-sesion-header"><i class="fa-solid fa-user" ></i> Iniciar Sesion</button>
  </a>`;
  }
  if (usuarioLogueado) {
    divLogin.innerHTML = `<span>Hola, ${usuarioLogueado.nombre}</span> <span class="separador-botones-header">|</span> <i onclick="cerrarSesion()" id="cerrarSessionBoton" class="boton-cerrar-sesión fa-solid fa-arrow-right-from-bracket"></i>`;
  }
  if (usuarioLogueado.rol === "ADMIN_ROLE") {
    const menuHeader = document.getElementById("menu-header");
    const nuevoLi = document.createElement("li");
    const nuevoEnlace = document.createElement("a");
    nuevoEnlace.textContent = "Panel de Administración";
    nuevoLi.classList.add("nav-item", "item-menu");
    nuevoEnlace.classList.add(
      "nav-link",
      "active",
      "panel-administracion-link"
    );
    nuevoLi.appendChild(nuevoEnlace);
    menuHeader.appendChild(nuevoLi);
    nuevoEnlace.href = "/index.html";
  }
}
function cerrarSesion() {
  localStorage.removeItem("usuarioActual");
  location.reload();
  validarSesion();
}
validarSesion();
