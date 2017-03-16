$(document).ready(function () {
    //OBJETO PARA ALMACENAR KEYCODE DE LAS FECLAS DEL TECLADO
    var flechas = {
        UP: 38,
        DOWN: 40,
        LEFT: 37,
        RIGHT: 39
    };

    var left = 150;
    var top = 200;
    $("#personaje1").css("top", top);
    $("#personaje1").css("left", left);
    $("#personaje1").css("opacity", 1);

    $("#check1 img").css("opacity", 1);
    $("#check1").css("top", 250);
    $("#check1").css("left", 300);

    var width = parseInt($("#area-juego").css("width")) - 50;
    var height = parseInt($("#area-juego").css("height")) - 50;

    //DETECCIÓN CUANDO SE PRESIONA UNA TECLA
    document.addEventListener("keydown", deteccionTeclado);

    function checkPoints() {
        if (top == 250 && left == 300) {
            $(".gif").css("opacity", 1);
        } else {
            $(".gif").css("opacity", 0);
        }
    }

    function movimientoElemento(top, left) {
        $("#personaje1").css("top", top);
        $("#personaje1").css("left", left);
        console.log(top + " " + left);

        checkPoints(top, left);
    }

    //funcion que ejecuta un movimiento según la tecla presionada
    function deteccionTeclado(evento){
        var movimiento = 50;
        switch(evento.keyCode){
            case flechas.UP:
                if (top > 0){
                    top = top - movimiento;
                    movimientoElemento(top, left);
                } else {
                    console.log("Llegó al límite top");
                }
                break;
            case flechas.DOWN:
                if (top < height) {
                    top = top + movimiento;
                    movimientoElemento(top, left);
                } else {
                    console.log("Llegó al límite top");
                }
                break;
            case flechas.LEFT:
                if (left > 0) {
                    left = left - movimiento;
                    movimientoElemento(top, left);
                } else {
                    console.log("left llegó al límite");
                }
                break;
            case flechas.RIGHT:
                if (left < width) {
                    left = left + movimiento;
                    movimientoElemento(top, left);
                } else {
                    console.log("left llegó al límite");
                }
                break;
        }
    }
});
