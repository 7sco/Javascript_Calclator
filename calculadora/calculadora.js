
//var button= false;


function suma(){
	var numero1 = parseFloat(document.getElementById('numero1').value);
	var numero2 = parseFloat(document.getElementById('numero2').value);
	var resultado= document.getElementById('resultado').value;
	


	if (!numero1 || !numero2) {
		
		console.log("Fill all Fields");
	}

	else{
	
		var resultado = numero1+numero2;
 	
 		document.getElementById('resultado').value=resultado;
		console.log(resultado);
	}

	

}

