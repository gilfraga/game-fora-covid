/* 1) Definindo as dimensões do palco do jogo */

var altura = 0
var largura = 0

function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight 
    largura = window.innerWidth

    console.log(largura, altura) 
}

ajustaTamanhoPalcoJogo()

/* 2) Criando posições randômicas */

function posicaoRandomica () {

    //remover covid anterior caso exista
    if (document.getElementById('covid')) {
          document.getElementById('covid').remove()
    }

    var posicaoX = Math.floor(Math.random() * largura) - 90 
    var posicaoY = Math.floor(Math.random() * altura) - 90
    // valores subtraídos para a imagem caber na dimensão do palco do jogo sem que haja "estouro" na tela (barra de rolagem apareça)

    posicaoX = posicaoX < 0 ? 0 : posicaoX // evitando erros
    posicaoY = posicaoX < 0 ? 0 : posicaoY // evitando erros

    console.log(posicaoX, posicaoY)

    // criar o elemento html
    var covid = document.createElement('img')
    covid.src = 'imagens/covid.png'
    covid.className = tamanhoAleatorio()
    covid.style.left = posicaoX + 'px'
    covid.style.top = posicaoY + 'px'
    covid.style.position = 'absolute'
    covid.id = 'covid'

    document.body.appendChild(covid)

}

/* 3) Criando tamanhos randômicos */

function tamanhoAleatorio () {
    var classe = Math.floor(Math.random() * 3)
    
    switch(classe) { // não usar o break
        case 0:
            return 'covid1'

        case 1:
            return 'covid2'

        case 2: 
            return 'covid3'
    }
}

/*4) Criando e removendo imagens de covid a cada ciclo de tempo
     -> setInterval e remover covid anterior caso exista
*/
