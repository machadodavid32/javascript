const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])

console.log(valores[4])

valores[4] = 10

console.log(valores)

console.log(valores.length)  // conta quantos objetos tem dentro do array

valores.push({id: 3}, false, null, 'teste') // vc consegue adicionar coisas ao array com push

console.log(valores)

console.log(valores.pop()) // retira o ultimo objeto

delete valores[0] // apaga um elemento no indice selecionado