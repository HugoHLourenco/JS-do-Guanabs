function fatorial(n) {
    let fat = 1
    for (let i = n; i > 1; i--) {
        fat *= i
    }
    return fat
}
var valor = 20

//console.log(fatorial(valor))

function fatorial2(n) {
    if (n == 1) {
        return 1
    } else {
        n *= fatorial2(n - 1)
    }
    return n
}
console.log(fatorial2(valor))