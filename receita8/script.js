let botao = document.getElementById("botaoCarregar")
botao.addEventListener("click", () => loadAdvice() )   

const carregarDiv = advice => {
    const div = document.getElementById("adviceDiv")
    div.innerHTML = `<div><strong>Advice:</strong> ${advice}</div>`
    botao.innerHTML = "Load advice..."
}

async function loadAdvice(){
    botao.innerHTML = "Loading advice..."

    fetch("https://api.adviceslip.com/advice").then(
        res => res.json()
    ).then(
        json => carregarDiv(json["slip"]["advice"])
    ).catch(
        err => document.getElementById("adviceDiv").innerHTML = `Fudeu... ${err}`
    )
}              
