var Turno=1;

var Pikachu={

	Vida:100;

	Ataque: 55;

	win: funtion () {
		console.log ("Pikachu ha ganado")
	}
}

var jiglypuff = {

	Vida: 100;

	Ataque: 45;

	win : funtion() {
		console.log ("jiglypuff ha ganado")
	}
}

while (Pikachu.Vida > 0 && jiglypuff.Vida > 0){
	if (Turno==1)
	{
		jiglypuff.Vida=jiglypuff.Vida - Pikachu.Ataque;

		Turno=2;

		console.log("jiglypuff Ahora tiene  " +jiglypuff.Vida+ "Puntos de Vida")
	}
	else {
		Pikachu.Vida=Pikachu.Vida - jiglypuff.Ataque;

		Turno=1;+

		console.log("Pikachu Ahora tiene  " +Pikachu.Vida+  "Puntos de Vida")

	}
    if (Pikachu.Vida >= 0 ) {
    	Pikachu.win();
    }
    else{

    	jiglypuff.win();
    }
}