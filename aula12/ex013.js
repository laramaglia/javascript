var agora = new Date()
var diaSem = agora.getDay()

/* Para o JS, os dias da semana de getDay são número de 0 a 6
0 sendo domingo e 6 sendo sábado;
*/

switch (diaSem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('[ERRO]!')
}
