// VARIAVEIS ---------------------------------------------------------------------------------------------------------------------------
var outh3 = document.getElementById("outh3")
var outSelect = document.getElementById("outSelect")
var nums = []

// Função que analisa se o número pode entrar no array, e caso possivel, adiciona-lo-----------------------------------------------------
function analisar() {
    var entrada = Number(document.getElementById("entrada").value)

    if (entrada > 0 && entrada < 101) {
        if (!nums.includes(entrada)) {
            outSelect.textContent = ""
            nums.push(entrada)

            for (var i = 0; i < nums.length; i++) {
                var option = document.createElement("option")
                option.value = entrada
                option.text = `Valor ${nums[i]} foi adicionado.`
                outSelect.appendChild(option)
            }

            document.getElementById("entrada").value = ""
            document.getElementById("entrada").focus()
            return
        } else {
            alert("NÚMERO JÁ DIGITADO!!!")

            document.getElementById("entrada").value = ""
            document.getElementById("entrada").focus()
            return
        }
    } else {
        alert("DIGITE UM NÚMERO VÁLIDO!!!")
        document.getElementById("entrada").focus()
        return
    }
}

// Função que limpa os resultados----------------------------------------------------------------------------------------------------------------------
function limpar() {
    document.getElementById("entrada").value = ""
    nums = []
    outSelect.textContent = nums
    outh3.textContent = ""
    outh3.style.border = "0px double darkcyan"
    document.getElementById("entrada").focus()
    return
}

// Função que verifica os resultados e printa na tela as informações fornecidas ------------------------------------------------------------------------
function verificar() {
    if (nums.length == 0) {
        alert("DIGITE UM VALOR!!!")
        document.getElementById("entrada").focus()
        return
    } else {
        outh3.innerHTML = `<br>O tamanho do vetor é de: ${nums.length} <br><br>
                            O maior elemento foi: ${maior(nums)} <br><br>
                            O menor elemento foi: ${menor(nums)} <br><br>
                            A soma dos elementos é: ${soma(nums)} <br><br>
                            A média dos elementos é: ${media(nums)}`
        outh3.style.border = "10px double darkcyan"
    }
}

// Funções adicionais para a verificar() -------------------------------------------------------------------------------------------------------------
function maior(n) {
    let maiorNumero = n[0]
    for (let i = 1; i < n.length; i++) {
        if (n[i] > maiorNumero) {
            maiorNumero = n[i]
        }
    }
    return maiorNumero
}

function menor(n) {
    let menorNumero = n[0]
    for (i = 1; i < n.length; i++) {
        if (n[i] < menorNumero) {
            menorNumero = n[i]
        }
    }
    return menorNumero
}

function soma(n) {
    let soma = n[0]
    for (let i = 1; i < n.length; i++) {
        soma += n[i]
    }
    return soma
}

function media(n) {
    let media = n[0]
    for (let i = 0; i <= n.length; i++) {
        media = soma(nums) / i
    }
    return media.toFixed(2)
}

// Funções para o CSS ficar bonitinho ------------------------------------------------------------------------------------------------------------------
var btAnalisar = document.getElementById("btAnalisar")
btAnalisar.addEventListener("mouseenter", entrou1)
btAnalisar.addEventListener("mouseout", saiu1)

var btLimpar = document.getElementById("btLimpar")
btLimpar.addEventListener("mouseenter", entrou2)
btLimpar.addEventListener("mouseout", saiu2)

var btverificar = document.getElementById("btVerificar")
btverificar.addEventListener("mouseenter", entrou3)
btverificar.addEventListener("mouseout", saiu3)

function entrou1() {
    btAnalisar.style.background = "darkslategray"
}
function saiu1() {
    btAnalisar.style.background = "darkcyan"
}
function entrou2() {
    btLimpar.style.background = "darkslategray"
}
function saiu2() {
    btLimpar.style.background = "darkcyan"
}
function entrou3() {
    btverificar.style.background = "darkslategray"
}
function saiu3() {
    btverificar.style.background = "darkcyan"
}