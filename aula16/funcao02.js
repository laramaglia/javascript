function soma(n1, n2) {
    return n1 + n2
}

console.log(soma(2, 7)) //chamada

/* resultado NaN pq a soma da função fica (n1 = 2) + undefined;

function soma(n1, n2) {
    return n1 + n2
}

console.log(soma(2)) //chamada
*/

/* evita o resultado de ficar NaN pois os parâmetros n1 e n2 estão pre-definidos;

function soma(n1=0, n2=0) {
    return n1 + n2
}

console.log(soma(2)) //chamada
*/
