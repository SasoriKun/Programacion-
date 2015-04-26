//Genera un numero aleatorio entre un rango de enteros
function patito()
{
	var numero = Math.floor((Math.random()*3));
	return numero;
}
var Piedra=0;
var Tijera=1;
var Papel=2;

var opcion= ["Piedra","Tijera","Papel"];

var opcionMaquina= patito(0,2);
var opcionusuario= prompt("Que eliges?\nPiedra=0 \nTijera=1 \nPapel=2", 1);

alert("Elegiste" + opcion[opcionusuario]);
alert("Javascript Eligio" +opcion[opcionMaquina]);

if(opcionusuario==Piedra)
{
	 if(opcionMaquina==Piedra)
	{
		alert("Empate");
	}
     if(opcionMaquina==Tijera)
    {
    	alert("Ganaste =)");
    }
     if(opcionMaquina==Papel)
    {
    	alert("Perdiste :(");
    }
}

if(opcionusuario==Tijera)
{
	 if(opcionMaquina==Tijera)
	{
		alert("Empate");
	}
     if(opcionMaquina==Papel)
    {
    	alert("Ganaste =)");
    }
     if(opcionMaquina==Piedra)
    {
    	alert("Perdiste :(");
    }
}

if(opcionusuario==Papel)
{
	 if(opcionMaquina==Papel)
	{
		alert("Empate");
	}
     if(opcionMaquina==Piedra)
    {
    	alert("Ganaste =)");
    }
     if(opcionMaquina==Tijera)
    {
    	alert("Perdiste :(");
    }
}
