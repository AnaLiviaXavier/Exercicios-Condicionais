/* let condicional1 = true;
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

*/

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








