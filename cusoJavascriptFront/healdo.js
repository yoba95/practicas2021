alert ("Tenemos los siguientes toppins: oreo, kitkat, brownie, lacasitos")

var toping = prompt("Selecccione el topping deceado").toLocaleLowerCase()
//toLocalLowerCase() se usa para que no afecte el uso de las mayusculas
var precio = 1.90

if (toping === "oreo") {
    precio += 1
}else if(toping === "kitkat"){
     precio += 1.50
}
else if(toping === "brownie"){
     precio += 0.75  
}
else if(toping === "lacasitos"){
     precio += 0.95
}
else{
    console.log("Usted no ingreso ningun toping ")
}
console.log("El precio a pagar por su helado es : $"+ precio.toFixed(2))

//toFixed se usa para usar decimales que muestre y sea mas exacto el resultado  