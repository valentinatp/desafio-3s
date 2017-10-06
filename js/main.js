$(document).ready(function() {
	$("#open").on('click', function(){
		$(".segunda-seccion").show();
		$(".primera-seccion").hide();
		$(".cuadro").hide();
	});

	$("#eliminar").on('click', function(){
		$(".cuadro").show();
	});


	$("#si").on('click', function(){
		$(".cuadro").hide();
		$(".segunda-seccion").hide();
	});
});
