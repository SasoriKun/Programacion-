
var perro={
Fuerza: 100,
Agilidad: 65,
Edad: 2,
Peso: 18,
Tipo: "Aventurero",
Higiene: false,
Amor: true,
Salud: "Vacunado",
Nombre:"Teo",
}

var gato={

	Fuerza: 40,
    Agilidad: 100,
    Edad: 0,
    Peso: 4,
    Tipo: "Casero",
    Higiene: true,
    Amor: false,
    Salud: "Inmune",
    Nombre:"Katty",

}

var mascota = perro;
var puntos = 0;

if(mascota.fuerza>90)
{
	puntos ++;
}

if(mascota.Agilidad>=70)
{
	puntos=puntos ++;
}

if(mascota.Higiene==true  && mascota.Tipo=="Aventurero")
{
	puntos= puntos +10;
}

else if(mascota.Salud=="Vacunado" && mascota.Tipo=="Aventurero")
{
	puntos=puntos + 5;
}

else if(mascota.Agilidad<= 80 && mascota.Salud=="Vacunado")
{
	puntos=puntos + 5;
}
else
{
	puntos=puntos + 2;
}
alert("Tu mascota " +mascota.Nombre+ " Tiene  " + puntos+ " puntos");