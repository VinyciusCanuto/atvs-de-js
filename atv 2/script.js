const numeros = []

const inNumero = document.getElementById("inNumero")

const btnAdicionar = document.getElementById("btnAdicionar")
const btnVerificaOrdem = document.getElementById("btnVerificaOrdem")

const outNumeros = document.getElementById("outNumeros")
const outResposta = document.getElementById("outResposta")

const adicionarNumero = () => {
    const numeros = Number(inNumero.value)
    if(numero === 0 || isNaN(numero)){
        alert('Número Inválido')
        return
    }

    const numeroIgual = numeros.includes(numero)
    if(!numeroIgual){
        alert('Numero repetido')
        inNumero.value = ''
        return
    }

    numeros.push(numero)

    outNumeros.textContent = `${numeros.join(',')}`
    inNumero.value = ''
};
btnAdicionar.addEventListener("click", adicionarNumero);

const verificaOrdem = () => {
    if(numeros.length === 0){
        alert('Não existe elementos no array de numeros')
        return
    }

    const verificaArray = numeros.every((numero, index)=>{
        if(index === numeros.length - 1){
            return true
        }
        return numero < numeros[index]
    })
    
    if(verificaArray){
        outResposta.textContent = `Ordem Crescente`
    }else{
        outResposta.textContent = `NÃO ESTÃO EM Ordem Crescente`
    }
};
btnVerificaOrdem.addEventListener("click", verificaOrdem);
