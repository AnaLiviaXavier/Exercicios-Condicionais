 let condicional1 = true;
let condicional2 = false;

if (condicional1) {

    console.log("Entramos na condição!")
    //true
}


if (condicional1 && condicional2) {
    console.log("Entramos na condição!")
    //false
}

if (condicional1 || condicional2) {
    console.log("Entramos na condição")
    //true
}



n1 = Number(prompt("Digite o primeiro número:"));
n2 = Number(prompt("digite o segundo numero:"));


let compara = function (num1,num2) {

    resultado = "";

    if (num1 == num2) {
        resultado = "Números Iguais"
    }
    
    else if (num1 > num2) {
        resultado = "Primeiro número é MAIOR que o segundo"
    }

    else {
        resultado = "Primeiro número é MENOR que o segundo"
    }

        return resultado;
}

igualMaiorMenor = compara(n1,n2);
console.log(igualMaiorMenor);



let anoNasc = Number(prompt("Ano de nascimento?"))

function calcularIdade(ano){
    let anoAtual = 2023;
    let idade = anoAtual - ano;
    let resposta = "";

    if (idade<16) {

        resposta = "Você não pode votar";
    } 

    else if (idade >=16 && idade <= 18 || idade>=70) {

        resposta = "Voto facultativo";
    } 
    
    else {
        resposta = "Você é obrigado a votar";
    }

    return resposta

}

console.log(calcularIdade(anoNasc))


//exercicio 5

let ensinoM = prompt("Concluiu o ensino médio?")
let idade = parseInt(prompt("Qual sua idade?"))
let outraFaculdade = prompt("Está cursando outra faculdade?")


function podeEstudar(ensinoM, idade, outraFaculdade){

    resposta ='';

    if (ensinoM.toLowerCase() == 'sim' && idade >=18 && outraFaculdade.toLowerCase() == 'não'){
        resposta = 'PODE cursar esta faculdade!'
    }
    else {
        resposta = 'NÃO PODE cursar esta faculdade!'
    }

    return resposta

    }

    resultado = podeEstudar(ensinoM,idade,outraFaculdade)
    console.log(resultado)
    


//switch

let pais = 'Brasil'

switch (pais) {
    case 'Brasil':
        console.log('Brasileiro');
        break;

    case 'França':
        console.log('Francês');
        break;

    case 'Croacia':
        console.log('Croata');
        break;

    default:
        console.log('Nacionalidade não encontrada');
        break;

}




let alg1 = Number(prompt('Digite o primeiro número'))
let alg2 = Number(prompt('Digite o segundo número'))

let opcao = Number(prompt("Digite uma opção: \n 1: adição \n 2: subtração \n 3: divisão \n 4: multiplicação"))

switch(opcao) {
    case 1:
        adicao = alg1+alg2
        if (adicao>10 && adicao <20){
            console.log("resultado da adicao entre 10 e 20: ")
        }
        console.log(adicao)
        break

    case 2:
        subtracao = alg1-alg2
        console.log(subtracao)
        break

    case 3:
        divisao = alg1/alg2
        console.log(divisao)
        break

    case 4:
        multiplicacao = alg1*alg2
        console.log(multiplicacao)
        break

    default:
        console.log("Opção não encontrada")
}




