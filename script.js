window.onload = function () {

    const cuadrados = document.querySelectorAll("button");

    var a = document.getElementsByClassName("cuadrado");

    for (c of cuadrados) {

        c.addEventListener("click", cambiaColorFondo);

    }

    function cambiaColorFondo() {
        

        switch (this.getAttribute("data-nombre")) {

            case "ROJO":

                for (let cambia of a) {

                    cambia.style.backgroundColor = "red";

                    cambia.style.color = "pink";

                    cambia.textContent = "Javi";

                }

                break;



            case "AMARILLO":

                for (let cambia of a) {

                    cambia.style.backgroundColor = "green";

                }

                break;



            case "VERDE":

                for (let cambia of a) {

                    cambia.style.backgroundColor = "yellow";

                }

                break;

            case "Poner en fila":

                for (let cambia of a) {

                    cambia.style.cssText = "float:none";

                }

                break;

            case "Poner en columna":

                for (let cambia of a) {

                    cambia.style.cssText = "float:left";
                }

                break;
                case "Reset":

                    for (let cambia of a) {
    
                        cambia.style.cssText = "float:left";
                    }
    
                    break;
    



            default:

                break;

        }

    }




}