var hora = document.getElementById("hora");
var Talking = document.getElementById("Talking");
var pSalida = document.getElementById("salida");



function calcular() {
    var valhora = hora.value;
    var valTalking = Talking.value;

    var ishora = true;
    var isTalking = false;


    if (valhora == "" || valTalking == "") {
        hora.placeholder="Rellenar el campo!";
        hora.style.backgroundColor = "rgba(247, 118, 23, 0.2)";
        Talking.placeholder="Rellenar el campo!";
        Talking.style.backgroundColor = "rgba(247, 118, 23, 0.2)";
    } else {
        Talking.style.backgroundColor = "#fff";
        hora.style.backgroundColor = "#fff";

      if (valhora< 7 && valTalking == "1") {
            pSalida.innerHTML = "1-Estamos en Problemas >.<";
        } 
        
        else if (valhora>20 && valTalking == "1") {
            pSalida.innerHTML = "1-Estamos en problemas >.<";
        }

        else if (valhora<20 && valTalking == "2") {
            pSalida.innerHTML = "0-Yay! No estamos en problemas!.";
        }

         else if (valhora>20 && valTalking == "2") {
            pSalida.innerHTML = "0-Yay! No estamos en problemas!.";
        }

         else if (valhora<20 && valTalking == "1") {
            pSalida.innerHTML = "0-Yay! No estamos en problemas!.";
        }
        
        else {
            pSalida.innerHTML = "Escribe la hora y elige una opcion";
        }
    }
}