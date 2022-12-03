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
var fs = require('fs')
var archivo = fs.readFileSync( "input.txt", "utf-8")
var nuevoArchivo = archivo.split("\n")
let priority = 0
nuevoArchivo.forEach(element => {
    let firstContainer = []
    let secondContainer = []
    let halfRuck = element.length/2
    var match = false
    for(i = 0; i < element.length; i++){
        if (i < halfRuck) {
            firstContainer.push(element[i])
        }else{
            secondContainer.push(element[i])
        }
    }    
    for(i = 0; i <halfRuck ; i++){
        for(j = 0; j < halfRuck; j++){
            if (secondContainer[j] == firstContainer[i] && match == false){
                priority = priority + getPriority(firstContainer[i].charCodeAt())
                match = true
            }
        }
    }
});
console.log(priority)


