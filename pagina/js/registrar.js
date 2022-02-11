
 var qw=0;
$(document).ready(function () {
   
    $("#btnRegistrar").click(function () {
        guardar();
    });
    
});



function guardar(){
    
    console.log("Es una prueba de impresion");
    let statusGuardar=0;
    var nombre = $("#txtNombre").val();
    var correo = $("#txtCorreo").val();
    var rfc = $("#txtRfc").val();
    var password = $("#txtContrasena").val();
    var passcordConfirm = $("#txtContrasenaCon").val();
    var valid =0;
    if (nombre.length < 1 || nombre.trim().length == 0) {
        console.log("El nombre es obligatorio");
        alert("El nombre es obligatorio");
        return false;

    }
    if (correo.length < 1 || correo.trim().length == 0) {
        alert("correo es obligatorio");
        return false;
    }

    if (rfc.length < 1 || rfc.trim().length == 0) {
        alert("RFC es requerido.")
        return false;
    }
    if (password.trim().length < 1) {
        alert("Contraseña es obligatorio");
        return false;
    }

    if (passcordConfirm.length < 1 || passcordConfirm.trim().length == 0) {
        alert("Se requiere confirmacion de contraseña")
        return false;
    }

    if (password != passcordConfirm) {
        alert("Su confirmacion de contraseña no coincide ")
    }


    //        return true;
    let _rfc_pattern_pm = '^(([A-Z]|[a-z]|\s){1})(([A-Z]|[a-z]){3})([0-9]{6})((([A-Z]|[a-z]|[0-9]){3}))';
    //let rfc = rfc2;
                                
        if (rfc.match(_rfc_pattern_pm)){
            console.log("es rfc")
            return true;
        }else {
            console.log("RFC esta mal")
            alert("Verifique su RFC")
            return false;
        }


    
    $.ajax(

        {
            url: 'http://127.0.0.1:8080/api/usuarios',
            type: "POST",
            data: {
                "nombre": nombre,
                "correo": correo,
                "rfc": rfc,
                "passwordd": password
            }
        })
        .done(function (data) {
            //$("#respuesta").html(<div class="alert alert-success" role="alert">This is a success alert—check it out!</div>); 
            console.log("Usuario guardado" + data);
            
            

        })
        .fail(function (data, jqXHR, textStatus) {
            console.log("error " +data.status+" "+data.statusText,data.responseText+" "+ jqXHR, textStatus);
            if (data.status == 500) {
                console.log('ocurrio un error al guardar');
            }
        }
    );
    
    //
    //localStorage.clear();
}