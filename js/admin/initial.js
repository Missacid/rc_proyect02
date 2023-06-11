var datatable;
var storedData = localStorage.getItem("datos");
var lista = [];

if (storedData) {
  lista = JSON.parse(storedData);
}

$(document).ready(function () {
  datatable = $("#example").DataTable({
    language: {
      sProcessing: "Procesando...",
      sLengthMenu: "Mostrar _MENU_ registros",
      sZeroRecords: "No se encontraron resultados",
      sEmptyTable: "Ningún dato disponible en esta tabla",
      sInfo:
        "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
      sInfoEmpty: "Mostrando registros del 0 al 0 de un total de 0 registros",
      sInfoFiltered: "(filtrado de un total de _MAX_ registros)",
      sInfoPostFix: "",
      sSearch: "Buscar:",
      sUrl: "",
      sInfoThousands: ",",
      sLoadingRecords: "Cargando...",
      oPaginate: {
        sFirst: "Primero",
        sLast: "Último",
        sNext: "Siguiente",
        sPrevious: "Anterior",
      },
      oAria: {
        sSortAscending:
          ": Activar para ordenar la columna de manera ascendente",
        sSortDescending:
          ": Activar para ordenar la columna de manera descendente",
      },
      buttons: {
        copy: "Copiar",
        colvis: "Visibilidad",
      },
    },

    columns: [
      { data: "nombre" },
      { data: "categoria" },
      { data: "descripcion" },
      { data: "link_de_video" },
      { data: "requisitos" },
      { data: "precio" },
      {
        data: null,
        render: function (data, type, row) {
          return (
            '<button class="eliminar btn btn-danger" data-id="' +
            row.codigo +
            '"><i class="fa-solid fa-trash"></i></button>' +
            '<button class="editar btn btn-success" data-id="' +
            row.codigo +
            '"><i class="fa-solid fa-pen-to-square"></i></button>' +
            '<button class="destacado btn btn-warning" data-id="' +
            row.codigo +
            '"><i class="fa-solid fa-star"></i></button>'
          );
        },
      },
    ],
  });

  datatable.rows.add(lista).draw();

  // Evento de click para el botón de destacado
  $("#example tbody").on("click", ".destacado", function () {
    var codigo = $(this).data("id");
    var element = lista.find(function (item) {
      return item.codigo === codigo;
    });

    if (element) {
      localStorage.setItem("destacado", JSON.stringify(element));
      console.log(localStorage.getItem("destacado"));
    }
    swal({
      title: "¡Producto destacado!",
      text: "El producto ha sido destacado",
      icon: "success",
    });
  });

  // Evento de click para el botón de eliminar
  $("#example tbody").on("click", ".eliminar", function () {
    var codigo = $(this).data("id");
    var index = lista.findIndex(function (item) {
      return item.codigo === codigo;
    });

    if (index !== -1) {
      lista.splice(index, 1);
      datatable.row($(this).parents("tr")).remove().draw(false);

      // Almacenar datos en el localStorage
      localStorage.setItem("datos", JSON.stringify(lista));
    }
  });

  // Evento de click para el botón de editar
  $("#example tbody").on("click", ".editar", function () {
    swal("Boton Anda");
  });
});

function imprimirDatos() {
  let x = {
    codigo: Date.now(), // Generar un código único para el elemento
    nombre: document.getElementById("nombre").value,
    categoria: document.getElementById("categoria").value,
    descripcion: document.getElementById("descripcion").value,
    link_de_video:
      "https://www.youtube.com/embed/" +
      document.getElementById("link_de_video").value,
    requisitos: document.getElementById("requisitos").value,
    precio: document.getElementById("precio").value,
    banner: document.getElementById("banner").value,
    portada: document.getElementById("portada").value,
  };

  lista.push(x);
  console.log(lista);

  datatable.row.add(x).draw(false);

  // Almacenar datos en el localStorage
  localStorage.setItem("datos", JSON.stringify(lista));
}
