var datatable;
var storedData = localStorage.getItem("datos");
var lista = [];

if (storedData) {
  lista = JSON.parse(storedData);
}

$(document).ready(function () {
  datatable = $("#example").DataTable({
    language: {
        "sProcessing": "Procesando...",
        "sLengthMenu": "Mostrar _MENU_ registros",
        "sZeroRecords": "No se encontraron resultados",
        "sEmptyTable": "Ningún dato disponible en esta tabla",
        "sInfo": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
        "sInfoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
        "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
        "sInfoPostFix": "",
        "sSearch": "Buscar:",
        "sUrl": "",
        "sInfoThousands": ",",
        "sLoadingRecords": "Cargando...",
        "oPaginate": {
            "sFirst": "Primero",
            "sLast": "Último",
            "sNext": "Siguiente",
            "sPrevious": "Anterior"
        },
        "oAria": {
            "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
            "sSortDescending": ": Activar para ordenar la columna de manera descendente"
        },
        "buttons": {
            "copy": "Copiar",
            "colvis": "Visibilidad"
        }
    },
  
columns: [
      { data: "nombre" },
      { data: "categoria" },
      { data: "plataforma" },
      { data: "año_de_lanzamiento" },
      { data: "codigo" },
      { data: "precio" },
      {
        data: null,
        render: function (data, type, row) {
          return (
            '<button class="eliminar" data-id="' +
            row.codigo +
            '">Eliminar</button>' +
            '<button class="destacado" data-id="' +
            row.codigo +
            '">Destacado</button>'
          );
        },
      },
    ],
  });

  datatable.rows.add(lista).draw();

  // Evento de click para el botón de destacado
  $("#example tbody").on("click", ".destacado", function () {
    var codigo = $(this).data("id");
    var index = lista.findIndex(function (element) {
      return element.codigo === codigo;
    });
    if (index == -1) {
      return;
    }
    localStorage.setItem("destacado", JSON.stringify(lista[index]));
   console.log(localStorage.getItem("destacado"))
  });

  // Evento de click para el botón de eliminar
  $("#example tbody").on("click", ".eliminar", function () {
    var codigo = $(this).data("id");
    var index = lista.findIndex(function (element) {
      return element.codigo === codigo;
    });

    if (index !== -1) {
      lista.splice(index, 1);
      datatable.row($(this).parents("tr")).remove().draw(false);

      // Almacenar datos en el localStorage
      localStorage.setItem("datos", JSON.stringify(lista));
    }
  });
});

function imprimirDatos() {
  var x = {
    nombre: document.getElementById("nombre").value,
    categoria: document.getElementById("categoria").value,
    plataforma: document.getElementById("plataforma").value,
    año_de_lanzamiento: document.getElementById("año_de_lanzamiento").value,
    codigo: document.getElementById("codigo").value,
    precio: document.getElementById("precio").value,
  };

  lista.push(x);
  console.log(lista);

  datatable.row.add(x).draw(false);

  // Almacenar datos en el localStorage
  localStorage.setItem("datos", JSON.stringify(lista));
}



