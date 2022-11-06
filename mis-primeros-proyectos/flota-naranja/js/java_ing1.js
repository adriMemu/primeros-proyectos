
var recupero= document.createElement('a');
recupero.setAttribute('href', '#');
recupero.setAttribute('id','enviar_clave');
var contenido = document.createTextNode("Recuperar Contraseña");
recupero.appendChild(contenido);

var lista= document.querySelector('#ubicar_a');
lista.insertAdjacentElement('afterend', recupero);


function solicitud(){
	var envioPass= prompt('Para recuperar tu clave ingresá el e-mail con el que te registraste.\nTe llegará una notificación a tu casilla en los próximos minutos', '');

}
document.getElementById('enviar_clave').onclick= solicitud




