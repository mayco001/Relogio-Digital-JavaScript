function relogion(){

    let data = new Date();
    let horas = data.getHours();
    let minutos = data.getMinutes();
    let segundos = data.getSeconds();

    if(horas < 10){
        horas = "0" + horas;
    }
    if(minutos < 10){
        minutos = "0" + minutos;
    }
    if(segundos < 10){
        segundos = "0" + segundos;
    }

    let horaFormadata = horas + ":" + minutos + ":" + segundos;

    document.getElementById("rel").value = horaFormadata;

}

//color font


function mudarParaOVermelho(){
    document.getElementById("rel").style.color = "red";
}
function mudarParaOVerde(){
    document.getElementById("rel").style.color = "green";
}
function mudarParaOAzul(){
    document.getElementById("rel").style.color = "blue";
}
function mudarParaOPreto(){
    document.getElementById("rel").style.color = "black";
}

//Fontes

function mudarParaOFonteSansSerif(){
    document.getElementById("rel").style.fontFamily = "sans-serif";
}
function mudarParaOFonteVerdana(){
    document.getElementById("rel").style.fontFamily = "Verdana";
}
function mudarParaOFonteFranklinGothicMedium(){
    document.getElementById("rel").style.fontFamily = 'Franklin Gothic Medium';
}
function mudarParaOFonteCourierNew(){
    document.getElementById("rel").style.fontFamily = 'Courier New';
}

//Backgroup color

function mudarParaOVermelhoBackgroup(){
        document.getElementById("rel").style.backgroundColor = "red";
    
}
function mudarParaOVerdeBackgroup(){
    document.getElementById("rel").style.backgroundColor = "green";
}
function mudarParaOAzulBackgroup(){
    document.getElementById("rel").style.backgroundColor = "blue";
}
function mudarParaOPretoBaclgroup(){
    document.getElementById("rel").style.backgroundColor = "black";
}

let tempo = setInterval(relogion, 1000);