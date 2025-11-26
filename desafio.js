const prompt = require('prompt-sync')();

let nome = prompt ("Digite seu nome: ")
let xp =  parseInt(prompt ("Quantas XP você conseguiu em sua aventura? "),10)
let patente;

if( xp < 1000){
    patente = "Ferro"

}else if( xp >= 1001 && xp <= 2000){
    patente = "Bronze"

}else if( xp >= 2001 && xp <= 5000){
    patente = "Prata"

}else if( xp >= 5001 && xp <= 7000){
    patente = "Ouro"

}else if( xp >= 7001 && xp <= 8000){
    patente = "PLatina"

}else if( xp >= 8001 && xp <= 9000){
    patente = "Ascendente"

}else if( xp >= 9001 && xp <= 10000){
    patente = "Imortal"

}else
   patente = "Radiante"

console.log("\n=== DADDOS DO AVENTUREIRO ===")
console.log("NOME: " + nome)
console.log("XP: " + xp)
console.log("Sua Patente: " + patente)


