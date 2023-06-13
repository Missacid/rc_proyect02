// Función para verificar el rol y la contraseña al aprobar la venta
function verificarVenta() {
    // Acción de aprobación
    alert('Aprobación exitosa');
  
    // Cerrar el modal de verificación
    const modalElement = document.getElementById('verificarModal');
    const bootstrapModal = bootstrap.Modal.getInstance(modalElement);
    bootstrapModal.hide();
  
    // Obtener la fila de la solicitud aprobada
    const filaSolicitud = document.querySelector('#solicitudesPendientes .btn-success').closest('tr');
  
    // Mover la fila de la solicitud aprobada a la sección "Ventas despachadas/aprobadas"
    const tablaVentasDespachadas = document.querySelector('#ventasDespachadasAprobadas');
    tablaVentasDespachadas.appendChild(filaSolicitud);
  
    // Ocultar el botón "Aprobar" en la fila de la solicitud aprobada
    const botonAprobar = filaSolicitud.querySelector('.btn-success');
    botonAprobar.style.display = 'none';
  }
  
  
  function eliminarSolicitud(solicitudId) {
    // Obtener el elemento de la solicitud a eliminar
    const solicitudElement = document.getElementById(solicitudId);
  
  
    solicitudElement.remove();
  }
  
  function agregarSolicitud() {
    // Obtener los valores del formulario
    var cliente = document.getElementById("clienteInput").value;
    var fecha = document.getElementById("fechaInput").value;
  
    // Crear una nueva fila en la tabla
    var tableBody = document.querySelector("#solicitudesPendientes");
    var newRow = document.createElement("tr");
    newRow.innerHTML = `
      <td>${tableBody.childElementCount + 1}</td>
      <td>${cliente}</td>
      <td>${fecha}</td>
      <td>
        <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#verificarModal">Aprobar</button>
        <button class="btn btn-danger" onclick="eliminarSolicitud('solicitud${tableBody.childElementCount + 1}')">Eliminar</button>
      </td>
    `;
    newRow.id = `solicitud${tableBody.childElementCount + 1}`;
  
    tableBody.appendChild(newRow);
  
    var modal = bootstrap.Modal.getInstance(document.getElementById("agregarModal"));
    modal.hide();
  }