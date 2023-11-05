function verificar() {
    var ano = Number(document.getElementById("ano").value)
    var data = new Date()
    var idade = data.getFullYear() - ano
    var foto = document.getElementById("foto")
    var out = document.getElementById("out")

    // <VERIFICAÇÃO DE DADOS>
    if (ano == 0 || ano > 2023) {
        alert("VERIFIQUE OS DADOS!!!")
        document.getElementById("ano").focus()
        return

    } else {
        var fsex = document.getElementsByName("radsex")
        var genero = ""

        if (fsex[0].checked) {
            genero = "Homem"
            if (idade <= 12) {
                //criança
                foto.src = "menino.jpg"
            } else if (idade <= 22) {
                //jovem
                foto.src = "moco.jpg"
            } else if (idade < 60) {
                //Adulto
                foto.src = "homem.jpg"
            } else {
                //idoso
                foto.src = "veio.jpg"
            }
        } else if (fsex[1].checked) {
            genero = "Mulher"
            if (idade <= 12) {
                //criança
                foto.src = "menina.jpg"
            } else if (idade <= 22) {
                //jovem
                foto.src = "moca.jpg"
            } else if (idade < 60) {
                //Adulto
                foto.src = "mulher.jpg"
            } else {
                //idoso
                foto.src = "veia.jpg"
            }
        }
        out.innerHTML = `Detectamos: ${genero} de ${idade} anos.`
    }
    // </VERIFICAÇÃO DE DADOS>
}