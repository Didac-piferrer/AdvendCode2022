//Reading a .txt file
var fs = require('fs')
var archivo = fs.readFileSync( "input.txt", "utf-8")

//separation for evry line break
var newFile = archivo.split("\n")
var dic = new Map()
var count = 0 // number of the elf
dic.set(count,0)

//Saving for each elf the acumulated value
newFile.forEach(element => {
    if (element.length == 0){
        count = count + 1
        dic.set(count,0)
    }
    else{
        dic.set(count,(dic.get(count) + Number(element)))
    }
});

const arr = Array.from(dic.values())
const res = Math.max(...arr)
console.log(res)

// Second part
var arr_sorted = arr.sort((a,b) => b - a)
var top = 3 // set dinamic the number of the top elfs that you want to know the sum
var res_top = 0
for(i = 0; i < top; i++){
    res_top = res_top + arr_sorted[i]
}
console.log(res_top)



