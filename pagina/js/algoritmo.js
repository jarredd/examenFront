$(document).ready(function () {
    var s="jared"
    var cadenaRevers="";
    
    $("#btnAlalizar").click(function (e) {
        
        var palabraOriginal= $("#txtPalabras").val();
        var palindromo="";
        var original = palabraOriginal.split(" ");
        let arrayReversa= palabraOriginal.split("").reverse().join("")
        var arrPu=arrayReversa.split(" ").reverse()
        for (const key in arrPu) {
           
           for (const property in original) {
              if (arrPu[key]==original[property]) {
                  palindromo += " "+original[property];
              }
           }
        }
        console.log("palindromos "+palindromo);
        $("#txtPalidroma").empty();
        $("#txtPalidroma").val(palindromo);
        var comparacion =palabraOriginal;
        cadenaRevers=comparacion.split("").reverse().join("");
        if (palabraOriginal == cadenaRevers) {
            $("#txtPalidroma").val(cadenaRevers);
        }
    });
});