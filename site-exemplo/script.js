let conj = []

let numb = document.getElementById('inicio')

function adicionar() {
    if (numb.value == 0) {
        window.alert('ERRO');
    } else {
        if (conj.length > 0) {
            conjunto.innerHTML += ','
        }
        let n = Number(numb.value);
        conj.push(n);
        conjunto.innerHTML += `${n}`;
    }
    numb.value = ''
    numb.focus()
}

function calculo() {

conj.sort(function(a, b) {
    return a - b;
})
let tamanho = conj.length

//MODA 
let repeticoes = 0;
let posicao1 = 0;
while ( posicao1 <= tamanhoAjustado ) {
    var repeticoesModa = 0;
    let posicao2 = 0;
    while ( posicao2 <= tamanhoAjustado ) {
        if ( conj[posicao1] == conj[posicao2] ) {
            repeticoesModa++;
            var numeroModa = conj[posicao1];
        }
        posicao2++;    
    };
    posicao1++;
    if ( numeroModa != numero && repeticoesModa > repeticoes ) {
        moda.innerHTML = `A moda é ${numeroModa} pois apareceu ${repeticoesModa} vezes.`
    } else if ( repeticoesModa == 1 && repeticoesModa >= repeticoes ) {
        moda.innerHTML = `Nenhum número se repete.`
    } else if ( numeroModa != numero && repeticoesModa == repeticoes) {
        moda.innerHTML += `A moda é ${numeroModa} pois apareceu ${repeticoesModa} vezes.`
    } 
    if ( repeticoesModa > repeticoes) {
        repeticoes = repeticoesModa;
    } 
    var numero = numeroModa;
}


//MÉDIA
    let soma = 0
    for (let numero in conj) {
        soma += conj[numero]
    }
    let resMedia = soma/tamanho
    media.innerHTML = `A média dos valores é ${resMedia}.`


//MEDIANA
    if (tamanho%2 == 0) {       // se número for par, tem que somar os dois e dividir
        let valorMediana1 = tamanho/2 
        let valorMediana2 = tamanho/2 -1
        mediana.innerHTML = `O conjunto é par, e a mediana é ${(conj[valorMediana1]+conj[valorMediana2])/2}.`
    } else {                    // se for impar, tem que somente pegar o valor do meio
        let valorMediana = tamanho/2 -.5
        mediana.innerHTML = `O conjunto é ímpar, e a mediana é ${conj[valorMediana]}.`
    }

}

function testeRepeticao(numero) {
    let teste = numeroDaModa.indexOf(numero)
    if (teste == -1) {
        return false;
    } else {
        return true;
    }
}
