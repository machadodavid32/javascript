const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) // para saber se o numero é inteiro

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media)
console.log(media.toFixed(2))  // reduzir as casas decimais
console.log(media.toString(2)) // transforma numa string (vira um valor binário com um monte de 1 e 0)
console.log(typeof media)


