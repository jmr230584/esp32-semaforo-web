

function ligarVermelho(){
    document.getElementById("vermelho").classList.add("verm");
}

function ligarAmarelo(){
    document.getElementById("amarelo").classList.add("amar");
}

function ligarVerde(){
    document.getElementById("verde").classList.add("verd");
}

function ligarAutomatico(){
    alert("Ligando o botão automático!");
}

function desligar(){
    document.getElementById("vermelho").classList.remove("verm");
    document.getElementById("amarelo").classList.remove("amar");
    document.getElementById("verde").classList.remove("verd");
}