const candidatos = []

const inCandidato = document.getElementById("inCandidato")
const inAcertos = document.getElementById("inAcertos")

const btnAdicionar = document.getElementById("btnAdicionar")
const btnListar = document.getElementById("btnListar")
const btnAprovados = document.getElementById("btnAprovados")

const outLista = document.getElementById("outLista")

const adicionarCandidatos = () => {
    const candidato = inCandidato.value;
    const acertos = Number(inAcertos.value);

    if (candidato === "" || acertos === 0 || isNaN(acertos)){
        alert('Digite valores válidos');
        return
    }
    candidatos.push({nome: candidato, nota: acertos})

    let lista =''
    candidatos.forEach((candidatos)=>{
        return lista +=`${candidato.nome} - ${candidato.nota} Nota\n`
    })
    outLista.textContent = lista
};
btnAdicionar.addEventListener("click", adicionarCandidatos);

const listaCandidatos = () => {
    if(candidatos.length === 0){
        alert("Não candidatos cadastrados")
        return
    }
    let lista =''
    candidatos.forEach((candidato)=>{
        return lista +=`${candidato.nome} - ${candidato.nota} Nota\n`
    })
    outLista.textContent = lista
};
btnListar.addEventListener("click", listaCandidatos)

const aprovadosSengudaEtapa = () => {
    const notaMinima = Number(prompt('Digite a nota para a 2º aprovação'))
    if(notaMinima == 0 || isNaN(notaMinima)){
        alert('Nota inválida')
        return
    }

    const filtrarCandidatos = candidatos.filter((candidato)=>{
        return candidato.nota >= notaMinima
    })

    const candidatosEmOrdem = filtrarCandidatos.sort((a,b)=>{
        return b.nota - a.nota
    })

    let lista = ''
    candidatosEmOrdem.forEach((candidato) =>{
        return lista +=`${candidato.nome} - ${candidato.nota}`
    })
};
btnAprovados.addEventListener("click", aprovadosSengudaEtapa)

