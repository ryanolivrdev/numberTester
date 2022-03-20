//Variables
document.getElementById('enviarButton').addEventListener('click', verificar)
const result = document.getElementById('result')

function verificar() {
  const input = Number(document.getElementById('numero1').value)

  if (input == 5) {
    result.innerText = 'É igual a 5!'
  } else if (input == 200) {
    result.innerText = 'É igual a 200!'
  } else if (input == 400) {
    result.innerText = 'É igual a 400!'
  } else if (input >= 500 && input <= 1000) {
    result.innerText = 'Está no intervalo de 500 e 1000'
  } else {
    result.innerText = 'Numero está fora dos escopos'
  }
}
