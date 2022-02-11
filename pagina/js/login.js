$(document).ready(function () {


    $("#btnLogin").click(function () {
        var correo = $("#txtNombre").val();
        var password = $("#txtPass").val();
        if (correo.length < 1 || correo.trim().length == 0) {
            alert("Ingrese correo");
            return false;
        }
        if (password.length < 1 || password.trim().length == 0) {
            alert("Ingrese su contraseña");
            return false;
        }
        console.log("prueba log");
        $.ajax({
            url: 'http://127.0.0.1:8080/api/usuarios/iniciar',
            type: "POST",
            dataType: "json",
            data: {
                "correo": correo,
                "passwordd": password
            },
            success: function (data) {
                console.log("iniciado " + data.correo   );
                location.href ="menu.html";
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                
                console.log("error "+errorThrown +" "+textStatus) ;
            }
        });



     
    });
});


