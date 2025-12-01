const carregarDiv = advice => {
    const div = document.getElementById("adviceDiv")
    div.innerHTML = `<div><strong>Advice:</strong> ${advice}</div>`
}

async function loadAdvice(){
    try{
        const botao = document.getElementById("botaoCarregar")
        botao.innerHTML = "Loading advice..."

        let res = await fetch("https://api.adviceslip.com/advice")
        advice = await res.json()
        carregarDiv(advice["slip"]["advice"])
        
        botao.innerHTML = "Load advice..."
    }catch(err){
        document.getElementById("adviceDiv").innerHTML = "Fudeu..."
    }
}

let botao = document.getElementById("botaoCarregar")
botao.addEventListener("click", () => loadAdvice() )                 
