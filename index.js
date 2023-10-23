//Criando classe genérica LoL

class heroi {

    constructor (nome, tipo, idade){

        this.nome = nome
        this.tipo = tipo
        this.idade = idade
        
    }

    // criando o método ("função") atacar

    atacar(tipo){

        // declarando uma constante em forma de lista com os tipos de ataque disponiveis


        const tipoAtaque = ["magia", "espada", "shuriken", "artes marciais"]
        
        // estrutura de decisão para definir o tipo de ataque

        if (tipo === "mago"){

            console.log(`O ${this.tipo} atacou usando ${tipoAtaque[0]}`)
        }

            else if (tipo === "ninja"){

            console.log(`O ${this.tipo} atacou usando ${tipoAtaque[2]}`)
            }

                else if (tipo === "guerreiro"){

                console.log(`O ${this.tipo} atacou usando ${tipoAtaque[1]}`)
                }

        else {

            // declarando o tipo como monge pois o programa não permite
            // outro tipo que não seja os pré-definidos até o momento            
            
            const tipo = "monge"
            console.log(`O ${this.tipo} atacou usando ${tipoAtaque[3]}`)
        }
    }
}


const run1 = new heroi ("Droique", "mago", "32")
const run2 = new heroi ("Python", "ninja", "31")
const run3 = new heroi ("Dio", "monge", "25")
const run4 = new heroi ("JavaScript", "guerreiro", "40")

run1.atacar(run1.tipo)
run2.atacar(run2.tipo)
run3.atacar(run3.tipo)
run4.atacar(run4.tipo)