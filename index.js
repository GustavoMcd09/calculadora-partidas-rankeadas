function saldoVitorias(vitorias, derrotas){
    const saldo = vitorias - derrotas

    if(vitorias <= 10){
        alert("O Herói tem de saldo de " + saldo + " está no nível de Ferro")
    } else if(vitorias >= 11 && vitorias <= 20){
        alert("O Herói tem de saldo de " + saldo + " está no nível de Bronze")
    } else if(vitorias >= 21 && vitorias <= 50){
        alert("O Herói tem de saldo de " + saldo + " está no nível de Prata")
    } else if(vitorias >= 51 && vitorias <= 80){
        alert("O Herói tem de saldo de " + saldo + " está no nível de Ouro")
    } else if(vitorias >= 81 && vitorias <= 90){
        alert("O Herói tem de saldo de " + saldo + " está no nível de Diamante")
    } else if(vitorias >= 91 && vitorias <= 100){
        alert("O Herói tem de saldo de " + saldo + " está no nível de Lendário")
    } else if(vitorias >= 101){
        alert("O Herói tem de saldo de " + saldo + " está no nível de Imortal")
    }
}

let menu
do{
    menu = prompt("Digite uma opção: \n 1 - Calcular saldo de partidas rankeadas \n 2 - Sair")

switch(menu) {
    case "1":
        const vitorias = prompt("Digite o número de vitórias: ")
        const derrotas = prompt("Digite o número de derrotas: ")
        if(vitorias < 0 || derrotas < 0){
            alert("O número de derrotas ou vitórias é inválido!")
            break
        }
        saldoVitorias(vitorias, derrotas)
        break
    case "2":
        break
    default:
        alert("Opção inválida! Por favor, escolha 1 ou 2.");    
}
}while(menu !== "2")
 
