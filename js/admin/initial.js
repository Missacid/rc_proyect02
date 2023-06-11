let datatable;
let storedData = localStorage.getItem("products");
let products = [];
let editIndex;
const botonSubmit = document.getElementById("boton-submit");
if (storedData) {
  products = JSON.parse(storedData);
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
            `<button class="editar btn btn-success" data-id="` +
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

  datatable.rows.add(products).draw();

  // Evento de click para el botón de destacado
  $("#example tbody").on("click", ".destacado", function () {
    let codigo = $(this).data("id");
    let element = products.find(function (item) {
      return item.codigo === codigo;
    });

    if (element) {
      localStorage.setItem("destacado", JSON.stringify(element));
    }
    swal({
      title: "¡Producto destacado!",
      text: "El producto ha sido destacado",
      icon: "success",
    });
  });

  // Evento de click para el botón de eliminar
  $("#example tbody").on("click", ".eliminar", function () {
    let codigo = $(this).data("id");
    let index = products.findIndex(function (item) {
      return item.codigo === codigo;
    });

    if (index !== -1) {
      products.splice(index, 1);
      datatable.row($(this).parents("tr")).remove().draw(false);

      // Almacenar datos en el localStorage
      localStorage.setItem("products", JSON.stringify(products));
    }
  });

  // Evento de click para el botón de editar
  $("#example tbody").on("click", ".editar", function () {
    let codigo = $(this).data("id");
    let producto = products.find((pais, index) => {
      if (pais.codigo === codigo) {
        editIndex = index;
        return true;
      }
    });
    let videoId = producto.link_de_video.split("embed/")[1];
    document.getElementById("nombre").value = producto.nombre;
    document.getElementById("categoria").value = producto.categoria;
    document.getElementById("descripcion").value = producto.descripcion;
    document.getElementById("link_de_video").value = videoId;
    document.getElementById("requisitos").value = producto.requisitos;
    document.getElementById("precio").value = producto.precio;
    document.getElementById("banner").value = producto.banner;
    document.getElementById("portada").value = producto.portada;
    botonSubmit.innerHTML = "Actualizar producto";
  });
});
function imprimirDatos() {
  if (editIndex !== undefined) {
    products[editIndex].nombre = document.getElementById("nombre").value;
    products[editIndex].categoria = document.getElementById("categoria").value;
    products[editIndex].descripcion =
      document.getElementById("descripcion").value;
    products[editIndex].link_de_video =
      "https://www.youtube.com/embed/" +
      document.getElementById("link_de_video").value;
    products[editIndex].requisitos =
      document.getElementById("requisitos").value;
    products[editIndex].precio = document.getElementById("precio").value;
    products[editIndex].banner = document.getElementById("banner").value;
    products[editIndex].portada = document.getElementById("portada").value;

    datatable.clear().rows.add(products).draw();

    // Actualizar datos en el localStorage
    localStorage.setItem("products", JSON.stringify(products));

    // Reiniciar el índice de edición
    editIndex = undefined;
    botonSubmit.innerHTML = "Subir producto";
  } else {
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

    products.push(x);
    datatable.row.add(x).draw(false);

    // Almacenar datos en el localStorage
    localStorage.setItem("products", JSON.stringify(products));
  }
}
const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  imprimirDatos();
  formulario.reset();
});
