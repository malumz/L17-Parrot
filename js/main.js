var aSmile = document.getElementById("aSmile");
var bSmile = document.getElementById("bSmile");
var pSalida = document.getElementById("salida");



function calcular() {
    var valaSmile = aSmile.value;
    var valbSmile = bSmile.value;

    var isaSmile = true;
    var isbSmile = false;


    if (valaSmile == "" || valbSmile == "") {
        aSmile.placeholder="Rellenar el campo!";
        aSmile.style.backgroundColor = "rgba(247, 118, 23, 0.2)";
        bSmile.placeholder="Rellenar el campo!";
        bSmile.style.backgroundColor = "rgba(247, 118, 23, 0.2)";
    } else {
        bSmile.style.backgroundColor = "#fff";
        aSmile.style.backgroundColor = "#fff";

      if (valaSmile == "1" && valbSmile == "2") {
            pSalida.innerHTML = "0-No Estamos en Problemas";
        } 
        
        else if (valaSmile == "1" && valbSmile == "1") {
            pSalida.innerHTML = "1-Estamos en problemas >.<";
        }
        
        else if (valaSmile == "2" && valbSmile == "1") {
            pSalida.innerHTML = "0-No Estamos en Problemas";
        }
        
        else if (valaSmile == "2" && valbSmile == "2") {
            pSalida.innerHTML = "1-Estamos en problemas >.<";
        }
        
        else {
            pSalida.innerHTML = "Escribe 'si' o 'no'";
        }
    }
}