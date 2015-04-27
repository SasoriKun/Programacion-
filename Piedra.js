//Genera un numero aleatorio entre un rango de enteros
function patito()
{
	var numero = Math.floor((Math.random()*3));
	return numero;
}
var Piedra=0;
var Tijera=1;
var Papel=2;
var Resultado=1;
var opcion= ["Piedra","Tijera","Papel"];
while(Resultado==1)
{	


var opcionMaquina= patito(0,2);
var opcionusuario= prompt("Que eliges?\nPiedra=0 \nTijera=1 \nPapel=2", 1);

alert("Elegiste" + opcion[opcionusuario]);
alert("Javascript Eligio" +opcion[opcionMaquina]);

if(opcionusuario==Piedra)
{
	 if(opcionMaquina==Piedra)
	{
		alert("Empate");
		Resultado=1;
	}
     else if(opcionMaquina==Tijera)
    {
    	alert("Ganaste =)");
    	Resultado=2;
    }
     else if(opcionMaquina==Papel)
    {
    	alert("Perdiste :(");
    	Resultado=3;
    }
}

if(opcionusuario==Tijera)
{
	 if(opcionMaquina==Tijera)
	{
		alert("Empate");
		Resultado=1;
	}
     else if(opcionMaquina==Papel)
    {
    	alert("Ganaste =)");
    	Resultado=2;
    }
     else if(opcionMaquina==Piedra)
    {
    	alert("Perdiste :(");
    		Resultado=3;
    }
}

if(opcionusuario==Papel)
{
	 if(opcionMaquina==Papel)
	{
		alert("Empate");
	    Resultado=1;
	}
     else if(opcionMaquina==Piedra)
    {
    	alert("Ganaste =)");
    	Resultado=2;
    }
     else if(opcionMaquina==Tijera)
    {
    	alert("Perdiste :(");
    		Resultado=3;
    }
}
}