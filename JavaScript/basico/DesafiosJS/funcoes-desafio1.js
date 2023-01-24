function print (text) {
    console.log(text);
}


function gets (notas) {
    const nota = notas;
    
    const media = mediaNotas(nota);
    
    if (media < 5) {
        return 'Reprovado';
    } else if (media >= 5 && media < 7) {
        return 'Recuperação';
    } else {
        return 'Aprovado';
    }

}


//calcula a média
function mediaNotas(notas) {
    let media = 0;
    for (let i = 0; i < notas.length; i++) {
       media = media + notas[i];
        
    }
   return media / notas.length
}

module.exports = {gets, print};