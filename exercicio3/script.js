const pergunta = prompt("digite aqui a sua nacionalidade").toLowerCase()
const nacionalidade = {
    pais1: "brasileira",
    pais2: "argentina",
    pais3: "uruguaia",
    pais4: "chilena",
    pais5: "colombiana"
}

if(nacionalidade.pais1 === pergunta){
    console.log("nacionalidade encontrada")
}else if (nacionalidade.pais2 === pergunta){
    console.log("nacionalidade encontrada")
}else if (nacionalidade.pais3 === pergunta){
    console.log("nacionalidade encontrada")
}else if (nacionalidade.pais4 === pergunta){
    console.log("nacionalidade encontrada")
}else if (nacionalidade.pais5 === pergunta){
    console.log("nacionalidade encontrada")
}else{
    console.log("nacionalidade não encontrada")
}