function calcular() {
    var inicio = Number(document.getElementById("inicio").value)
    var fim = Number(document.getElementById("fim").value)
    var pulo = Number(document.getElementById("pulo").value)
    var out = document.getElementById("out")

    if (isNaN(inicio) || isNaN(fim)) {
        alert("DIGITE VALORES NOS CAMPOS!!!")
        document.getElementById("inicio").focus()
        return
    } else {
        out.textContent = ""

        if (pulo !== 0 && pulo > 0) {
            for (let i = inicio; i <= fim; i += pulo) {
                out.textContent += `${i}, `
            }
        } else {
            for (i = inicio; i <= fim; i++) {
                out.textContent += `${i}, `
            }
        }

        document.getElementById("inicio").value = ""
        document.getElementById("fim").value = ""
        document.getElementById("pulo").value = ""

        document.getElementById("inicio").focus()
        return
    }
}