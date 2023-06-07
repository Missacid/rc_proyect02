var datatable;
var storedData = localStorage.getItem('datos');
var lista = [];

if (storedData) {
    lista = JSON.parse(storedData);
}

$(document).ready(function () {
    datatable = $('#example').DataTable({
        language: {
            // Configuración de idioma
        },
        columns: [
            { data: 'nombre' },
            { data: 'categoria' },
            { data: 'plataforma' },
            { data: 'año_de_lanzamiento' },
            { data: 'codigo' },
            { data: 'precio' },
            { data: null,
                render: function (data, type, row) {
                    return '<button class="eliminar" data-id="' + row.codigo + '">Eliminar</button>' +
                           '<button class="seleccionar" data-id="' + row.codigo + '">Seleccionar</button>';
                
                }
             }

            
        ]
   });

    datatable.rows.add(lista).draw();

      // Evento de click para el botón de eliminar
      $('#example tbody').on('click', '.eliminar', function () {
        var codigo = $(this).data('id');
        var index = lista.findIndex(function (element) {
            return element.codigo === codigo;
        });

// Evento de click para el botón de seleccionar
$('#example tbody').on('click', '.seleccionar', function () {
    var codigo = $(this).data('id');
    seleccionarElemento(codigo);
});

        if (index !== -1) {
            lista.splice(index, 1);
            datatable.row($(this).parents('tr')).remove().draw(false);

            // Almacenar datos en el localStorage
            localStorage.setItem('datos', JSON.stringify(lista));
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
        precio: document.getElementById("precio").value
    };

    lista.push(x);
    console.log(lista);

    datatable.row.add(x).draw(false);

    // Almacenar datos en el localStorage
    localStorage.setItem('datos', JSON.stringify(lista));
}


function seleccionarElemento(codigo) {
    // Redireccionar a otra página y pasar el código como parámetro
    window.location.href = 'otra_pagina.html?codigo=' + codigo;
}