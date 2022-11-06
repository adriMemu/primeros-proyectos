var textSize= ['16px', '18px', '20px', '22px']
var textInicial= 0

var boxWidth= ['350px', '400px', '500px', '630px']
var boxInicial= 0

var cajaTexto= document.getElementById('txt_qs')

function upSize(){
	if (textInicial<3) {
		textInicial++
	}
	cajaTexto.style.fontSize= textSize[textInicial]
	if (boxInicial<3) {
		boxInicial++
	}	
	cajaTexto.style.width= boxWidth[boxInicial]	
}

function downSize(){
	if (textInicial>0) {
		textInicial--
	}	
	cajaTexto.style.fontSize= textSize[textInicial]
	if (boxInicial>0) {
		boxInicial--
	}
	cajaTexto.style.width= boxWidth[boxInicial]	
}

	document.getElementById('agrandar').onclick= upSize;
	document.getElementById('achicar').onclick= downSize;
