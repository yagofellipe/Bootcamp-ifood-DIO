class carro
{
    constructor(marca, cor)
    {
        this.marca = marca;
        this.cor = cor;
    }

    ligar()
    {
        console.log("ligando")

    }
}

let mercedes = new carro("mercedes", "preto");
mercedes.ligar()