// Verificación de administrador
const usuarioActual = JSON.parse(localStorage.getItem("usuarioActual")) || [];

if (usuarioActual.rol !== "ADMIN_ROLE") {
  window.location = "/index.html";
}
