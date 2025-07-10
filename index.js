class Heroi
{
    constructor(nome,idade, tipo)
    {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        
        if (this.tipo !== 'guerreiro' && this.tipo !== 'mago' && this.tipo !== 'monge' && this.tipo !== 'ninja') {
            console.log("Tipo de herói inválido! Escolha entre guerreiro, mago, monge ou ninja.");
            this.tipo = 'desconhecido';
        }
    }
    atacar()
    {
        if (this.tipo === 'guerreiro') {
            console.log(`${this.nome} atacou com espada!`);
        }
        else if (this.tipo === 'mago') {
            console.log(`${this.nome} atacou com magia!`);
        }
        else if (this.tipo === 'monge') {
            console.log(`${this.nome} atacou com socos!`);
        }
        else if (this.tipo === 'ninja') {
            console.log(`${this.nome} atacou com shurikens!`);
        } 
        else 
        {
        console.log(`${this.nome} atacou com uma arma desconhecida!`);
        }
        
       
    }


    
}
const nome = prompt("Digite o nome do herói:");
    const idade = prompt("Digite a idade do herói:");
    const tipo = prompt("Digite o tipo do herói (guerreiro, mago, monge, ninja):");
    const heroi1 = new Heroi(nome, idade, tipo);
    heroi1.atacar();