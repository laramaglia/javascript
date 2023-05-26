let num = [5,8,9,3,1]
num.push(7) //adiciona o 7 na última posição do vetor;
num.sort() //ordena os valores por ordem crescente;
let len = num.length //devolve o número de posições do vetor;
console.log(`O comprimento da array é ${len}`)
console.log(`Nosso vetor é ${num}`)
console.log(`O quinto valor do vetor é ${num[5]}`)
console.log(num.indexOf(7)) //devolve o índice do número 7;
console.log(num.indexOf(2)) //não há número 2 no vetor, então retorna -1;