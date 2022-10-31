let termoDeParada = true
let contador = 0
while(termoDeParada) {
  termoDeParada = contador < 10
  if(contador % 2 === 0){
    console.log('Número par', contador)
  }
  contador += 1
}

do {
  console.log('Passei aqui')
} while(termoDeParada)