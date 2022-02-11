$(document).ready(function () {
    $("#btnSave").click(function (e) {
        var correo = $("#txtCorreo").val();
        var rfc = $("#txtRfc").val();;
        var pass = $("#txtPass").val();

        if (correo.length < 1 || correo.trim().length == 0) {
            alert("El correo es obligatorio");
            return false;
        }
        if (rfc.length < 1 || rfc.trim().length == 0) {
            alert("EL RFC es requerido");
            return false;
        }
        if (pass.length < 1 || pass.trim().length == 0) {
            alert("La contraseña se obligatorio");
            return false;
        }
        $.ajax({
            type: "PUT",
            url: "http://127.0.0.1:8080/api/usuarios/passwordd/1",
            data: {
                "passwordd": pass,
                "correo": correo,
                "rfc": rfc

            },
            dataType: "JSON",
            success: function (response) {
                location.href = "login.html";
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {

                console.log("error " + errorThrown + " " + textStatus);
            }
        });

    });
});

