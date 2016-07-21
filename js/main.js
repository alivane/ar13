
$(document).ready(function(){
	myFunction()
	function cambiarFondo(){
		$('body').css('background-image','url(img/header/foto.jpg)')//cambia el fondo
	}
	function cambiarFondo1(){
		$('body').css('background-image','url(img/header/gwen.jpg)')//cambia el fondo1
	}
	function cambiarFondo2(){
		$('body').css('background-image','url(img/header/crespita.jpg)')//cambia el fondo2
	}
	var nuevoFondo;
	function myFunction(){
		nuevoFondo = setInterval(cambiarFondo,10000);
		nuevoFondo = setInterval(cambiarFondo1,20000);
		nuevoFondo = setInterval(cambiarFondo2,30000);
	}
})