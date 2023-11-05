function carregar(){
    var msg = document.getElementById("msg")
    var imagem = document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minutos} horas`

    if(hora > 0 && hora < 12){
        //BOM DIA
        imagem.src = "manha2.jpg"
        document.body.style.background = "#7fd6ff"
    }else if(hora >= 12 && hora <18){
        //BOA TARDE
        imagem.src = "Tarde.jpg"
        document.body.style.background = "#f1842b"
    }else{
        //BOA NOITE
        imagem.src = "Noite.jpg"
        document.body.style.background = "#262b63"
    }
}