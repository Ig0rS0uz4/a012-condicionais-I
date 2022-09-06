let idade = prompt("dia sua idade")
let cursouEnsinoMedio = prompt("voce ja completou o ensino medio?")
let CursandoUmaFaculdade = prompt("voce esta cursando uma faculdade?")

if(idade >= 18){
    console.log("voce é maior de idade")
}else{
	console.log("voce é menor de idade")
}
if (cursouEnsinoMedio === "sim"){
    console.log("Ensino médio completo")
}else{
    console.log("Ensino médio incompleto")
}
if(CursandoUmaFaculdade === "sim"){
    console.log("Voce esta cursando uma faculdade")
}else{
    console.log("voce não esta cursando uma faculdade")
}