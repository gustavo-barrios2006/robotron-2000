const pecas = {
    "braços": {
        "força": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "força": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "núcleos":{
        "força": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "força": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "força": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}
document.querySelectorAll(".controle-ajuste").forEach(element=>{
    element.addEventListener("click", event=>{        
        manipulaDados(event.target.dataset.controle=='+'?"somar":"subtrair", event.target.parentNode.querySelector("[data-contador]"));
        atualizaEstatistica(event.target.dataset.peca, event.target.dataset.controle=='+'?"somar":"subtrair");
    });
});
function manipulaDados(operacao, campo)
{
    if(operacao=="subtrair")
    {
        campo.value=parseInt(campo.value)-1;
    }
    else
    {
        campo.value=parseInt(campo.value)+1;
    }
}
function atualizaEstatistica(peca, operacao)
{ 
Array.from(document.querySelectorAll("p[data-estatistica]")).forEach(element=>{
    if(operacao=="somar")
    {
element.textContent=parseInt(element.textContent)+pecas[peca][element.dataset.estatistica];
    }
    else{
        element.textContent=parseInt(element.textContent)-pecas[peca][element.dataset.estatistica];
    }
});
}
function trocaImagem(cor)
{
    document.querySelector(".robo").src=`./img/Robotron 2000 - ${cor}.png`;
}