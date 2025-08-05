let clientWeb = null;

const clientId = "ESP8266" + Math.floor(Math.random() * 900) + 100;
clientWeb = new Paho.MQTT.Client("broker.hivemq.com", 8884, clientId);

clientWeb.connect({
    useSSL: true,
    timeout: 5,
    onSuccess: function (){
        alert("Conectado com sucesso!")
    },
    onFailure: function (){
        alert("A conexão falhou!")
    }
});

function ligarVermelho(){
    document.getElementById("vermelho").classList.add("verm");

    //fazendo publish no tópico, (broker)
    const msgVerm = new Paho.MQTT.Message("");
    msgVerm.destinationName = "senai661/led/vermelho/on"
    clientWeb.send(msgVerm);
}

function ligarAmarelo(){
    document.getElementById("amarelo").classList.add("amar");

    //fazendo publish no tópico, (broker)
    const msgAmar = new Paho.MQTT.Message("");
    msgAmar.destinationName = "jmr/led/amarelo/on"
    clientWeb.send(msgAmar)
}

function ligarVerde(){
    document.getElementById("verde").classList.add("verd");

    //fazendo publish no tópico, (broker)
    const msgVerd = new Paho.MQTT.Message("");
    msgVerd.destinationName = "senai661/led/verde/on"
    clientWeb.send(msgVerd)
}

function desligar(){
    document.getElementById("vermelho").classList.remove("verm");
    document.getElementById("amarelo").classList.remove("amar");
    document.getElementById("verde").classList.remove("verd");  
    
    let msg = new Paho.MQTT.Message("");
    msg.destinationName = "senai661/led/vermelho/off";
    clientWeb.send(msg);
    msg.destinationName = "jmr/led/amarelo/off";
    clientWeb.send(msg);
    msg.destinationName = "senai661/led/verde/off";
    clientWeb.send(msg);     
}

function ligarAutomatico(){
    
}