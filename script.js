// Questão 1
function Fibonaccichecknumber(num) {
    if (num < 0) return false;

    let a = 0, b = 1;
    
    if (num === a || num === b) return true;

    while (b < num) {
        let temp = a;
        a = b;
        b = temp + b;
    }

    return b === num;
}

const numero = parseInt(prompt("Informe um número:"));
if (Fibonaccichecknumber(numero)) {
    console.log(`${numero} pertence à sequência Fibonacci.`);
} else {
    console.log(`${numero} não pertence à sequência Fibonacci.`);
}

//Questão 2
let stringUsuario = "A árvore e o abacaxi estão no parque.";

if (stringUsuario.toLowerCase().includes('a')) {
    let contagemA = 0;
    for (let letra of stringUsuario.toLowerCase()) {
        if (letra === 'a') {
            contagemA++;
        }
    }
    console.log(`A letra 'a' (maiúscula ou minúscula) existe na string e ocorre ${contagemA} vezes.`);
} else {
    console.log("A letra 'a' (maiúscula ou minúscula) não existe na string.");
}

//Questão 3
let indice = 12, soma = 0, k = 1;
while (k < indice) {
    k = k + 1;
    soma = soma + k;
}
console.log(soma);
//Soma será igual a 77

/*Questão 4
a) 1, 3, 5, 7, 9
b) 2, 4, 8, 16, 32, 64, 128
c) 0, 1, 4, 9, 16, 25, 36, 49
d) 4, 16, 36, 64, 100
e) 1, 1, 2, 3, 5, 8, 13
f) 2, 10, 12, 16, 17, 18, 19, 20
*/

/* Questão 5
Considerando que as lâmpadas NÃO são de LED. Podemos resolver da seguinte forma.

Ligar o primeiro interruptor e deixa-lo ligado por alguns minutos.
Depois de alguns minutos, desligar o primeiro interruptor e ligar o segundo interruptor.

Ir até a sala 1.

Se a lâmpada está acesa corresponde ao segundo interruptor, que deixamos ligado.
Se a lâmpada está apagada, mas quente, corresponde ao primeiro interruptor, que ligamos por um tempo e depois desligamos.
Se a lâmpada está apagada e fria, corresponde ao terceiro interruptor que nunca ligamos.

Após concluir qual interruptor corresponde à sala 1...

Voltamos para a sala dos interruptores, podemos repetir os passos:
Ligar algum dos dois interruptores restantes e deixa-lo ligado por alguns minutos.
Depois de alguns minutos, desligar o interruptor e ligar o segundo interruptor.

Depois iremos à sala 2 e repetimos a avaliação:
Se a lâmpada está acesa corresponde ao segundo interruptor, que deixamos ligado.
Se a lâmpada está apagada, mas quente, corresponde ao primeiro interruptor, que ligamos por um tempo e depois desligamos.

Concluindo assim qual interruptor está ligado a cada sala/lâmpada. */ 
