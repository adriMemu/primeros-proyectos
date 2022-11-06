var pax= [1,2,3,4,5]

var cantPax= parseInt(prompt("Ingresá la cantidad de pasajeros escolares que necesitas transportar (máximo 5)",""));

while(cantPax>5) {
	alert("Podes ingresar hasta 5 pasajeros. Intentá nuevamente");
	var cantPax= parseInt(prompt("Ingresá la cantidad de pasajeros escolares que necesitas transportar (máximo 5)",""));
	pax++;
}

function comparar ( a, b ){
	return a - b;
}

if (cantPax==1) {
	var edad1De1= parseInt(prompt('Ingresá la edad del pasajero',""));
	document.write('<h2 class="sombra_txt_1">La cantidad de pasajeros es: '+cantPax+' y su edad es: '+edad1De1+'.</br> Dejanos tus datos para poder brindarte más información.</h2>');
}

else if (cantPax==2) {
	var edad1De2= parseInt(prompt('Ingresá la edad del primer pasajero',""));
	var edad2De2= parseInt(prompt('Ingresá la edad del segundo pasajero',""));
	var arreglo1= [edad1De2, edad2De2];
	document.write('<h2 class="sombra_txt_1">La cantidad de pasajeros es: '+cantPax+' y sus edades son: '+arreglo1.sort(comparar).join(' y ')+'. </br>Consultá nuestras promociones para grupos familiares.</br> Dejanos tus datos para poder brindarte más información.</h2>')
}

else if (cantPax==3) {
	var edad1De3= parseInt(prompt('Ingresá la edad del primer pasajero',""));
	var edad2De3= parseInt(prompt('Ingresá la edad del segundo pasajero',""));
	var edad3De3= parseInt(prompt('Ingresá la edad del tercer pasajero',""));
	var arreglo2= [edad1De3, edad2De3, edad3De3];
	document.write('<h2 class="sombra_txt_1">La cantidad de pasajeros es: '+cantPax+' y sus edades son: '+arreglo2.sort(comparar).join(', ')+'. </br>Consultá nuestras promociones para grupos familiares.</br> Dejanos tus datos para poder brindarte más información.</h2>');
}

else if (cantPax==4) {
	var edad1De4= parseInt(prompt('Ingresá la edad del primer pasajero',""));
	var edad2De4= parseInt(prompt('Ingresá la edad del segundo pasajero',""));
	var edad3De4= parseInt(prompt('Ingresá la edad del tercer pasajero',""));
	var edad4De4= parseInt(prompt('Ingresá la edad del cuarto pasajero',""));
	var arreglo3= [edad1De4, edad2De4, edad3De4, edad4De4];
	document.write('<h2 class="sombra_txt_1">La cantidad de pasajeros es: '+cantPax+' y sus edades son: '+arreglo3.sort(comparar).join(', ')+'. </br>Consultá nuestras promociones para grupos familiares.</br> Dejanos tus datos para poder brindarte más información.</h2>');
}

else if (cantPax==5) {
	var edad1De5= parseInt(prompt('Ingresá la edad del primer pasajero',""));
	var edad2De5= parseInt(prompt('Ingresá la edad del segundo pasajero',""));
	var edad3De5= parseInt(prompt('Ingresá la edad del tercer pasajero',""));
	var edad4De5= parseInt(prompt('Ingresá la edad del cuarto pasajero',""));
	var edad5De5= parseInt(prompt('Ingresá la edad del quinto pasajero',""));
	var arreglo4= [edad1De5, edad2De5, edad3De5, edad4De5, edad5De5]
	document.write('<h2 class="sombra_txt_1">La cantidad de pasajeros es: '+cantPax+' y sus edades son: '+arreglo4.sort(comparar).join(', ')+'. </br>Consultá nuestras promociones para grupos familiares.</h2>');
}


	




