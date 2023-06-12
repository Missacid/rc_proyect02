const usuarioActivo = JSON.parse(localStorage.getItem("usuarioActual")) || [];

console.log(usuarioActivo);

if (usuarioActivo.rol !== "ADMIN_ROLE") {
  window.location = "/index.html";
}
