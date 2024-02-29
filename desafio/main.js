const listaDeTeclas = document.querySelectorAll('input[type=button]');

const caixaDeTexto = document.querySelector('input[type=tel]');

for (let contador = 0 ; contador < listaDeTeclas.length ; contador++) {
    const tecla = listaDeTeclas[contador];

    const valor = tecla.value;
    
    tecla.onclick = function () {
        caixaDeTexto.value+=valor;
    }
    
    tecla.onkeydown = function (evento) {
        if(evento.code === "Enter" || evento.code === "Space") {
        tecla.classList.add('ativa');
        }
      }
      tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
      }
}