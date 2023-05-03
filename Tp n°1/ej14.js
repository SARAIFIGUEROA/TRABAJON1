var dias = parseInt(prompt("ingrese la cantidad de dias que estará"))
        var preciohotel = parseInt(prompt("ingrese el costo del hotel por dia"))
        var preciocomida = parseInt(prompt("ingrese el costo de la comida"))
        var total = (preciocomida + preciohotel + 100) * dias
    alert("El costo del hotel es: $" + preciohotel * dias + "\n El precio de la comida es: $" + preciocomida * dias + "\n" + "pesos extra diarios: $" + 100 * dias + "\n" + "el monto total del cheque es: $" + total)