let clientWeb = null;

const clientId = "Esp32" + Math.floor(Math.random() * 900) + 100;
clientWeb = new Paho.MQTT.Client("broker.hivemq.com", 8884, clientId);

clientWeb.connect({
    useSSL: true,
    onSuccess: function (){
        alert("Conectado com sucesso!")
    },
    onFailure: function (){
        alert("A conexão falhou!")
    }
});

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