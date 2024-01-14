class tipoHeroi{
    constructor(nomeHeroi, tipoAtaque){
        this.nomeHeroi= nomeHeroi
        this.tipoAtaque = tipoAtaque
    }
    
    atacar(){
        console.log(`O ${this.nomeHeroi} atacou usando ${this.tipoAtaque}!`)

    }  
}
  
 let mago = new tipoHeroi("Mago Gandalf", " magia")
 let guerreiro = new tipoHeroi( "Guerreiro Inuyasha", "espada")
 let monge = new tipoHeroi("Monge Mirok", "artes marciais")
 let ninja = new tipoHeroi("Ninja Naruto", "shuriken")
  
monge.atacar()

 

