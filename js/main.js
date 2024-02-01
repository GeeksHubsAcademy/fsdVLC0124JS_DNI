
// const letra = prompt("Estimado usuario, me dice la letra del DNI??")

// const numero = parseInt(prompt("Me puede facilitar ahora el número"))

const dni = prompt("Me puedes decir el DNI?")

const letra = dni.slice(-1).toUpperCase()

const array = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E","T"]

//Algoritmo

const posicion = parseInt((dni).slice(0, -1)) % 23

array[posicion] == letra ? console.log("Valida") : console.log("Inválida")
