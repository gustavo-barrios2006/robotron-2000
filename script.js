document.querySelectorAll(".controle-ajuste").forEach(element=>{
    element.addEventListener("click", event=>{
        manipulaDados(event.target.dataset.controle=='+'?"somar":"subtrair", event.target.parentNode.querySelector("[data-contador]"));
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
