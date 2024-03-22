const clubes = []

const inNome = document.getElementById("inNome")

const btnAdicionar = document.getElementById("btnAdicionar")
const btnListar = document.getElementById("btnListar")
const btnTabela = document.getElementById("btnTabela")

const outLista = document.getElementById("outLista")


const adicionarClubes = () =>{
    const nome = inNome.value

    if(nome === ''){
        alert('Informe os dados corretamente')
        inNome.focus();
        return;
    }

    clubes.push(nome);
    inNome.value = '';
    inNome.focus();
};
btnAdicionar.addEventListener('click', adicionarClubes);

const listarClubes = () =>{
    if(clubes.length === 0){
        alert('Não possui nenhum clube registrado')
        inNome.focus();
        return;
    }

    let lista = ''
    clube.forEach((clubes, index) => {
        return( lisa +=`${index+1}. ${clubes} \n`)
    });

    outLista.textContent = lista
};
btnListar.addEventListener('click' , listarClubes);

const montarJogos = () =>{
    if(clubes.length % 2 != 0|| clubes.length === 0){
        alert('Não é possiel fazer a tabelo com eesse número de clubes');
        return;
    }


    const metadeInício = clubes.slice(0, clubes.length/2)
    const metadeFim = clubes.slice(clubes.length/2, clubes.length).reverse()
    
    let lista = ''

    for(let i = 0; i < metadeInício.length; i++){
        lista += `${i+1}. ${metadeInício[i]} x ${metadeFim[i]} \n`
    }
    outLista.textContent = lista
};
btnTabela.addEventListener('click', montarJogos)