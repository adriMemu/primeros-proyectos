/*function validarIngreso(){
	var usuario=['^([a-z]{4}\\d[1-9]{2})$', 'Recordá que el usuario se compone de 4 letras minúsculas seguidas por 3 números del 1 al 9. EJ: user123']
	var clave= ['^((?=.*[A-Z])(?=.*[!@#$&*%+-])(?=.*[a-z])(?=.*[0-9])\\S{8,12})$', 'La contraseña debe tener entre 8 y 12 caracteres e incluír al menos una letra mayúscula, una letra minúscula, un símbolo y un número.']

	var valorUsuario= document.getElementById('user')
	var valorClave= document.getElementById('pass')

	var validador1= new RegExp(usuario[valorClave][0])
	
	if (validador1.test(valorClave.value)) {
		valorUsuario.setCustomValidity('')
	} else {
		valorUsuario.setCustomValidity(usuario[valorClave][1])
	}
}

window.onload= function() {
	document.getElementById('pass').oninput= validarIngreso
	document.getElementById('user').oninput= validarIngreso
}
*/