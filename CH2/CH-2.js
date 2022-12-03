var tabla = new Map()

tabla.set("A X", 4)
tabla.set("A Y", 8)
tabla.set("A Z", 3)
tabla.set("B X", 1)
tabla.set("B Y", 5)
tabla.set("B Z", 9)
tabla.set("C X", 7)
tabla.set("C Y", 2)
tabla.set("C Z", 6)
tabla.set("",0)
tabla.set(" ",0)

var fs = require('fs')
var archivo = fs.readFileSync( "input.txt", "utf-8")
var nuevoArchivo = archivo.split("\n")
var res = 0

nuevoArchivo.forEach(element => {
   res = res + tabla.get(element)
});

console.log(res)
tabla.set("A X", 3)
tabla.set("A Y", 4)
tabla.set("A Z", 8)
tabla.set("B X", 1)
tabla.set("B Y", 5)
tabla.set("B Z", 9)
tabla.set("C X", 2)
tabla.set("C Y", 6)
tabla.set("C Z", 7)
res = 0
nuevoArchivo.forEach(element => {
   res = res + tabla.get(element)
});
console.log(res)