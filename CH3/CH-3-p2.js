//given the number value of the ascii letter return the priority
function getPriority(letter){
    var priority = 0
    if (letter > 96){ // lower case
        priority = letter - 96
    }
    else{ // uper case
        priority = letter - 38
    }
    return priority
}

function getGlobalPriority(Ruck1,Ruck2,Ruck3){
    let priority = 0
    let match = false
    Ruck1.forEach(element1 => {
        Ruck2.forEach(element2 => {
            Ruck3.forEach(element3 => {
                if (element3 == element1 && element3 == element2 && match == false){
                    priority = getPriority(element3.charCodeAt())
                }
            });
        });
    });
    return priority
}
var fs = require('fs')
var archivo = fs.readFileSync( "input.txt", "utf-8")
var nuevoArchivo = archivo.split("\n")
let count = 1
let Rucks = []
let newPriority = 0
nuevoArchivo.forEach(element => {
    Rucks.push(element)
    if (count%3 == 0) {
        newPriority = newPriority + getGlobalPriority(Rucks[0].split(""),Rucks[1].split(""),Rucks[2].split(""))
        Rucks = []
    }
    count++
});
console.log(newPriority)
