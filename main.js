/**
 * Esta função pega o Id da tag Audio e dá play para que seja tocado o som daquele elemento
 * @param {Este parâmentro é o id do elemento <audio>} idElementoAudio 
 */
function tocaSom (idElementoAudio){
    const elemento = document.querySelector(idElementoAudio);
    


    if (elemento === null){
        console.log("Elemento não encontrado ou seletor inválido!");
    }else if(elemento && elemento.localName === 'audio'){
        //Aqui há um delay, pois espera que o audio pecorra toda sua trilha para dar play novamente
        //elemento.play();   
        //Aqui os plays são simultâneos, pois todas as vezes que o evento de click ocorrer ele executa o audio concomitantemente
        //Pois recria o objeto do tipo Audio, fazendo com que o audio inicie do início.
        let musica = new Audio(`./sound/${idElementoAudio.replace('#','')}.wav`);
        //Mover o audio sempre para o início
        musica.currentTime = 0.0;
        if (musica.paused) {
            musica.play();
        } else {
            musica.pause();
        }     
    }
}

// Este constante pega as teclas do pad e coloca em uma lista que futaramente será iterada
const listaDeTeclas = document.querySelectorAll('.tecla');

/**
 * Este for tem por objetivo iterar a listagem de teclas
 * E vincular a um evento do teclado e click do mmouse o 
 * instrumento correto para acontecer o play
 */
for (let contador = 0 ; contador < listaDeTeclas.length ; contador++) {

    //Pega a tecla com o numero do contador da iteração
    const tecla = listaDeTeclas[contador];

    //Pega quais classes estão atribuídas a tecla(tag) e vamos para segunda posiçao no qual tem a classe especifica dela que difere das outras
    const instrumento = tecla.classList[1];
    
    // Relacionamos o nome da classe especifica que identifica o instrumento a ser tocado (const instrumento) e concatena com ID das tag audio, onde está locaziado os sons do instrumentos
    const idAudio = `#som_${instrumento}`; 

    //console.log(idAdudio);
    
    /**
     * Aqui fazemoos a criação de captação de eventos,
     * que neste caso é quando a tecla for clicada, e
     * para isso chamamos uma função anônima que ao invés
     * de colocar via html em cada tag o atributo 'onclick'
     * para chamar o método do javascript 'tocaSom', sendo uma
     * má prática, fazemos dinamicamente, apenas quando for clicado
     * a tag por meio do método onclick que executa o que estiver 
     * definido a função anônima. Pois se colocar uma chamada direta para 
     * a função play a polítca dos navegadores vai bloquear a execução,
     * pois não é permitido a execução de audios automaticamente ao acesso
     * de uma página web. E para evitarmos isso chamos uma função anônima que nos 
     * limitará apenas quando realmente o evento for ocorrer, pois após sua criação inicial, 
     * ela só pode ser acessada por uma ela na qual está armazenada como uma função como um valor.
     * Não sendo acessada fora daqui.
     */
    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    /**
     * Como já explicado anteriormente sobre o uso desse tipo de função, a diferença se encontra quando
     * solta a tecla e é faremos uma ação diferente em que trocamos a cor da tecla, e para sabermos qual
     * a tecla que foi tocada, toda função atrelada a um evento o seu primeiro parâmetro é, neste caso, 
     * um objeto que armazena o os dados de evento do teclado, incluse qual tecla foi clicada. E limitamos
     * que quando e somente quando a telca 'Enter' e 'Space' terá esssa transição guardada na classe 'ativa'
     * quando for clicada.
     */
    tecla.onkeydown = function (evento) {
        console.log(evento);

        if(evento.code === 'Enter' || evento.code === 'Space'){
            tecla.classList.add('ativa')
        }
    }

    /**
     * E aqui faz a remoção da transição/estilização quando soltar o tecla do teclado.
     */
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa')
    }
}