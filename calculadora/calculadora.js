
//var button= false;


function suma(){
	
	if (document.getElementById('resultado').value=="") {
		
		document.getElementById('resultado')="Enter #s";
		console.log('false');

	}

	else{
		var numero1 = parseFloat(document.getElementById('numero1').value);
		var numero2 = parseFloat(document.getElementById('numero2').value);
		var resultado= document.getElementById('resultado').value;
	
	
		var resultado = numero1+numero2;
 	
 		document.getElementById('resultado').value=resultado;
		console.log(resultado);
	}

	

}

