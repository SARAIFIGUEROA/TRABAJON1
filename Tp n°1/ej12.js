var precioproducto = parseInt(prompt("ingrese el precio del producto"))
var descuento = (precioproducto * 20 / 100) - precioproducto
var iva = (descuento * 15 / 100) + descuento
alert("el precio a pagar por el producto es: $"+ iva)
