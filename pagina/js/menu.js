$(document).ready(function () {
    llenarTabla();
});

function eliminarUsuario(id) {
    $("#btnEliminar").click(function (e) { 
        console.log(id);
        $.ajax({
            type: "DELETE",
            url: "http://127.0.0.1:8080/api/usuarios/" + id,
            success: function (response) {
                console.log("usuario elimonado");
    
                llenarTabla();
            }, error: function (XMLHttpRequest, textStatus, errorThrown) {
                console.log("error");
            }
        });
        
    });
   
}
function getUsuarioId(id) {
    $("#txtPassworddE").empty();
    console.log("antes de " + id)
    $.ajax({
        type: "GET",
        url: "http://127.0.0.1:8080/api/usuarios/" + id,
        success: function (data) {
            $.each(data, function (index, item) {
                console.log(item.nombre)
                $('#txtNombreE').val(item.nombre);
                $('#txtRfcE').val(item.rfc);
                $('#txtDireccionE').val(item.direccion);
                $('#txtTelefonoE').val(item.telefono);
                $('#txtWebsiteE').val(item.website);
                $("#txtIdE").val(item.id);
            });
        }, error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log("error " + textStatus);
        }
    });
    //$('#txtUsuario').val(respuesta.usuario);
}
function actualisarUsuario() {
    var nombre = $('#txtNombreE').val();
    var rfc = $('#txtRfcE').val();
    var direccion = $('#txtDireccionE').val();
    var telefono = $('#txtTelefonoE').val();
    var web = $('#txtWebsiteE').val();
    var idd = $("#txtIdE").val();
    var passwordd = $("#txtPassworddE").val();
    if (passwordd < 1 || passwordd.trim().length == 0) {
        $.ajax({
            type: "PUT",
            url: "http://127.0.0.1:8080/api/usuarios/" + idd,
            data: {
                "nombre": nombre,
                "rfc": rfc,
                "direccion": direccion,
                "telefono": telefono,
                "website": web
            },
            dataType: "JSON",
            success: function (response) {
                llenarTabla();
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {

                console.log("error " + errorThrown + " " + textStatus);
            }
        });
    } else {
        $.ajax({
            type: "PUT",
            url: "http://127.0.0.1:8080/api/usuarios/pas/" + idd,
            data: {
                "nombre": nombre,
                "rfc": rfc,
                "passwordd": passwordd,
                "direccion": direccion,
                "telefono": telefono,
                "website": web
            },
            dataType: "JSON",
            success: function (response) {
                llenarTabla();
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {

                console.log("error " + errorThrown + " " + textStatus);
            }
        });
    }
}

function llenarTabla() {
    $('#TBbod').empty();
    $.ajax({
        type: "GET",
        url: "http://127.0.0.1:8080/api/usuarios",
        dataType: "JSON",
        success: function (data) {
            var html = '';
            $.each(data, function (index, item) {
                html += '<tr><td>' + item.nombre + '</td>'
                    + "<td>" + item.rfc + '</td>'
                    + "<td>" + item.correo + '</td>'
                    + "<td>" + item.direccion + '</td>'
                    + "<td>" + item.telefono + '</td>'
                    + "<td>" + item.website + '</td>'
                    
                    + '<td><button type="button" class="btn btn-primary btn-fw" onclick="getUsuarioId(' + item.id + ')" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Editar</button></td>'
                    + '<td><button type="button" class="btn btn-danger btn-fw" onclick="eliminarUsuario(' + item.id + ') " data-toggle="modal" data-target="#exampleModalCenter ">Eliminar</button></td></tr>';
                //console.log(item.nombre);
            });
            $('#TBbod').html(html);
        }, error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log("error");
        }
    });
}



  