var diametroR = parseFloat(prompt("¿Ingrese el diametro de la rueda en CENTIMETROS ?"));

var grosorR = parseFloat(prompt("Ingrese el grosor de la rueda en CENTIMETROS ?"));


if (diametroR > 1.4) {
    
    if (diametroR <= 1.4 && diametroR > 0.8) 
    console.log("la rueda es para un vehiculo mediano")

    else 
    console.log("la rueda es para un vehiculo pequeño")
    

console.log("La rueda es para un vihiculo grande")
}

else if (diametroR > 1.4 && grosorR < 0.4 || diametroR <= 1.4 && diametroR > 0.8 && grosorR < 0.25 ) {
    console.log("el grosor para esta rueda es inferior al recomendado")
}