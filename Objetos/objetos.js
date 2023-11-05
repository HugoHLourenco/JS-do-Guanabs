let pessoa = {nome: "José", 
            idade: 22, 
            sexo: "M", 
            peso: 80.5,
            cpf: "417129399-23",
            engordar(p = 0){
                this.peso += p
                return console.log(`Ele engordou ${p} Kg e está com ${this.peso}`)
            }}

console.log(`${pessoa.nome} tem ${pessoa.idade} anos de idade e ${pessoa.peso} Kg`)
console.log(pessoa.engordar(2))