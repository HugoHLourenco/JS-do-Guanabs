function tabuada() {
    var valor = Number(document.getElementById("valor").value)
    var out = document.getElementById("out")

    if (valor == "") {
        alert("DIGITE UM NÚMERO!!!")
        document.getElementById('valor').focus()
        return
    } else {
        out.textContent = ""
        for (let i = 0; i <= 10; i++) {
            out.textContent += `${valor} X ${i} = ${i * valor} \n`
        }
    }
    document.getElementById("valor").value = ""
}
