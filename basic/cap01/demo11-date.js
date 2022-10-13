//meses começam com zero
const dataAninversario = new Date(2020, 0, 20)
console.log(dataAninversario)

const primeiraDataDoJS  = new Date(0)
console.log(primeiraDataDoJS.getTime())

const hoje = new Date()
console.log(hoje.toString())
console.log(hoje.toLocaleDateString())
console.log(hoje.toISOString())

const dia = hoje.getDate()
hoje.setDate(dia + 5)
hoje.setHours(10, 30, 0)
console.log(hoje)

console.log(`
  Dia: ${hoje.getDate()}
  Mes: ${hoje.getMonth()}
  Ano: ${hoje.getFullYear()}
  Hora: ${hoje.getHours()}
  Minute: ${hoje.getMinutes()}
  Seconds: ${hoje.getSeconds()}
`)

console.log(
  new Date(2022, 11, 0) > new Date(2022, 11,1)
)