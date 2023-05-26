// FUNÇÃO RECURSIVA
// é quando ua função chama ela mesma;

function fatorial(n) {
    if (n == 1) {
        return 1 
    } else {
        return n * fatorial(n-1)   //a chamada para a função está dentro dela mesma;
    }
}

/*
5! = 5 x 4 x 3 x 2 x 1 = 120
5! = 5 * 4!
Baseado no conceito acima:
n! = n * (n-1)!
Exceto:
1! = 1
*/