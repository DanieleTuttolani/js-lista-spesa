const listProducts = ["pomodori", "mezzo vitello", "arrosticini", "Brumotti", "salsiccie di fegato", "pesche"]

console.log(listProducts.length)
const target = document.getElementById("list-wrapper");

let list = "<ul>"
i = 0 
while( i < listProducts.length){
    list += `<li>${listProducts[i]}</li>`
    i++

    i === listProducts.length
}
list += "</ul>"

target.innerHTML = list;
