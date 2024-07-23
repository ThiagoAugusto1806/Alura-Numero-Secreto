function verificaSeChutePossuiValorValido(chute){
    const numero = +chute
    if(chuteForInvalido(numero)){
        elementoChute.innerHTML += '<div>Valor Inválido</div>';
        return
        
    }if(numeroForMaiorOuMenorQuePermitido(numero)){
        elementoChute.innerHTML += `<div>Valor Invalido: Fale um número entre ${menorValor} e ${maiorValor}</div>`
        return
    }if(numero === numeroSecreto){
        document.body.innerHTML =`
        <h2>Você acertou</h2>
        <h3>O numero secreto era ${numeroSecreto}</h3>
        <button id="jogar-novamente" class="btn-Jogar">Jogar Novamente</button>
        `
    }else if(numeroSecretoMaior(numero)){
        elementoChute.innerHTML += `<div>o numero secreto é maior <i class="fa-solid fa-up-long"></i></div>`
    }else if(numeroSecretoMenor(numero)){
        elementoChute.innerHTML += `<div>o numero secreto é menor <i class="fa-solid fa-down-long"></i></div>`
    }
}

function numeroSecretoMaior(numero){
    return numeroSecreto>numero
}
function numeroSecretoMenor(numero){
    return numeroSecreto<numero
}

function chuteForInvalido(numero){
    return Number.isNaN(numero)
}
function numeroForMaiorOuMenorQuePermitido(numero){
    return numero > maiorValor || numero<menorValor
}

document.body.addEventListener('onclck', e =>{
    if(e.target.id == 'jogar-novamente'){
        window.location.reload()
    }
})