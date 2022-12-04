var fs = require('fs')
var archivo = fs.readFileSync( "input.txt", "utf-8")
var nuevoArchivo = archivo.split("\n")
var contador = 0
nuevoArchivo.forEach(element => {
    var elf1 = element.split(",")[0]
    var elf2 = element.split(",")[1]
    if (typeof elf1[0] != "undefined"){ // por si hay lineas vacías
        var min1 = Number(elf1.split("-")[0]), min2 = Number(elf2.split("-")[0]), max1 = Number(elf1.split("-")[1]), max2 = Number(elf2.split("-")[1])
        if (!(max1 < min2 || max2 < min1)) {
            contador++
        }
    }
});
console.log(contador)