function calcular(vitoria, derrota)
{
    let xpDoHeroi = vitoria - derrota;
    let nivelDoHeroi;
    switch (true) {
        case xpDoHeroi < 10:
          nivelDoHeroi = "Ferro";
          break;
        case xpDoHeroi >= 11 && xpDoHeroi <= 20:
          nivelDoHeroi = "Bronze";
          break;
        case xpDoHeroi >= 21 && xpDoHeroi <= 50:
          nivelDoHeroi = "Prata";
          break;
        case xpDoHeroi >= 51 && xpDoHeroi <= 80:
          nivelDoHeroi = "Ouro";
          break;
        case xpDoHeroi >= 81 && xpDoHeroi <= 90:
          nivelDoHeroi = "Diamante";
          break;
        case xpDoHeroi >= 91 && xpDoHeroi <= 100:
          nivelDoHeroi = "Lendário";
          break;
        case xpDoHeroi >= 101:
          nivelDoHeroi = "Imortal";
          break;
        default:
          break;
      }
      console.log("O Herói tem de saldo de " + xpDoHeroi + " está no nível de " + nivelDoHeroi);
      return (xpDoHeroi);
      
}
