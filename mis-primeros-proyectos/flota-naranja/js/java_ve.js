function validarTransporte() {
	var transporte={
		trf: ['\\b(\\d|1[0-2])\\b$',"Para más de 12 pasajeros, por favor seleccioná otro vehículo"], //h 12 pax
		spr: ['\\b(\\d|1[0-5])\\b$',"Para más de 15 pasajeros, por favor seleccioná otro vehículo"], //h 15 pax
		bus: ['\\b(\\d|1[0-9]|2[0])\\b$',"Para más de 20 pasajeros, por favor seleccioná \"Grupos Grandes\""], //h 20 pax
		ggr: ['\\b(2[1-9]|3[0-9]|4[0-9]|5[0-9]|6[0-9]|7[0-9]|8[0-9]|9[0-9]|10[0])\\b$','Grupos Grandes admite hasta 100 pasajeros. Para menos de 21 pasajeros, te sugerimos que selecciones otra opción']
	}

	var vehiculo= document.getElementById('vehiculos').value;
	var cupo= document.getElementById('pasajeros');

	var validador= new RegExp(transporte[vehiculo][0]);

	if (validador.test(cupo.value)) {
		cupo.setCustomValidity('');
	}else{
		cupo.setCustomValidity(transporte[vehiculo][1]);
	}
}



window.onload= function(){
	document.getElementById('vehiculos').onchange= validarTransporte
	document.getElementById('pasajeros').oninput= validarTransporte
	document.getElementById('enviarForm').onsubmit= alert('Gracias por completar el formulario. Te contactaremos a la brevedad')
}


