document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var contra = document.getElementById("contra").value;
    var rol = document.getElementById("rol").value;
    var codigo = document.getElementById("codigo").value;
  
    if (nombre !== "" && correo !== "" && contra !== "" && rol !== "" && codigo !== "") {
      var popup = new bootstrap.Modal(document.getElementById("popup"));
      popup.show();
  
      // Redireccionar al usuario a la página de inicio después de 3 segundos
      setTimeout(function() {
        window.location.href = "/index.html";
      }, 3000);
    }
  });