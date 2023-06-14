document.getElementById("registro-btn").addEventListener("click", function() {
  // Obtener los valores de los campos de formulario
  var nombre = document.getElementById("nombre").value;
  var correo = document.getElementById("correo").value;
  var contra = document.getElementById("contra").value;

  // Validar los campos del formulario
  if (nombre === "" || correo === "" || contra === "") {
    alert("Por favor, completa todos los campos del formulario.");
    return;
  }

  // Guardar los datos del usuario en el almacenamiento local
  var usuario = {
    nombre: nombre,
    correo: correo,
    contra: contra
  };
  localStorage.setItem("usuario", JSON.stringify(usuario));

  // Redireccionar a la página de inicio y pasar el nombre de usuario como parámetro
  window.location.href = "/index.html?username=" + encodeURIComponent(nombre);
});

document.addEventListener("DOMContentLoaded", function() {
  // Obtener el parámetro del nombre de usuario de la URL
  var params = new URLSearchParams(window.location.search);
  var username = params.get("username");

  // Verificar si se proporcionó un nombre de usuario
  if (username) {
    // Actualizar el elemento de marcador de posición en la página de inicio
    document.getElementById('username-placeholder').textContent = username;
    document.getElementById('login-section').style.display = 'none';
    document.getElementById('logged-in-section').style.display = 'block';
  }
});

function logout() {
  // Eliminar datos de sesión o realizar otras acciones necesarias al cerrar sesión.
  document.getElementById('username-placeholder').textContent = '[Nombre de usuario]';
  document.getElementById('login-section').style.display = 'block';
  document.getElementById('logged-in-section').style.display = 'none';
}

// Obtener el parámetro de la URL
function getURLParameter(name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  var results = regex.exec(location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Obtener el nombre de usuario de la URL y mostrarlo en el botón de "Iniciar sesión"
var username = getURLParameter('username');
if (username !== '') {
  document.getElementById('username-placeholder').textContent = username;
  document.getElementById('login-section').style.display = 'none';
  document.getElementById('logged-in-section').style.display = 'block';
} else {
  document.getElementById('username-placeholder').textContent = '[Nombre de usuario]';
  document.getElementById('login-section').style.display = 'block';
  document.getElementById('logged-in-section').style.display = 'none';
}