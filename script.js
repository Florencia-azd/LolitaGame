$(document).ready(function () {
	//OBJETO PARA ALMACENAR KEYCODE DE LAS FECLAS DEL TECLADO
	var flechas = {
		UP: 38,
		DOWN: 40,
		LEFT: 37,
		RIGHT: 39
	};

	var estadosKeys = {
		key1: false,
		key2: false,
		key3: false,
		entrada: false
	};

	var left = 150;
	var top = 200;
	$("#personaje1").css("top", top);
	$("#personaje1").css("left", left);
	$("#personaje1").show();

	var width = parseInt($("#area-juego").css("width")) - 150;
	var height = parseInt($("#area-juego").css("height")) - 150;

	//DETECCIÓN CUANDO SE PRESIONA UNA TECLA
	document.addEventListener("keydown", deteccionTeclado);

	function verificarPuerta (keys) {
		if (top == 300 && left == 600 && keys.entrada == true) {
			$("#checkpoint1").css("opacity", 1);
			$("#personaje1").css("opacity", 0);
			$("#checkpoint2").css("opacity", 0);
		}
	}

	function checkPoints(top, left) {
		if (top == 100 && left == 50 && estadosKeys.key1 == false) {
			estadosKeys.key1 = true;
			$("#keyCheck1").hide();
			$("#keyCheck2").show();
			$("#key1").attr("src", "assets/key1.png");
		}

		if (top == 150 && left == 550 && estadosKeys.key1 == true && estadosKeys.key2 == false) {
			estadosKeys.key2 = true;
			$("#keyCheck2").hide();
			$("#keyCheck3").show();
			$("#key2").attr("src", "assets/key1.png");
		}

		if (top == 300 && left == 250 && estadosKeys.key2 == true && estadosKeys.key3 == false) {
			estadosKeys.key3 = true;
			estadosKeys.entrada = true;
			$("#keyCheck3").hide();
			$("#key3").attr("src", "assets/key1.png");
			$(".led-red").toggleClass("led-green");
		}

		verificarPuerta(estadosKeys);
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
				if (top > 50){
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
				if (left > 50) {
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
