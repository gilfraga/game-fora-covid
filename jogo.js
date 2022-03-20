var altura = 0
var largura = 0
var vidas = 1
var tempo = 15

var criaCovidTempo = 1500

var risco = window.location.search
risco = risco.replace('?', '')

if(risco === 'moderado') {
    //1500
    criaCovidTempo = 1500
} else if (risco === 'alto') {
    //1000
    criaCovidTempo = 1000
} else if  (risco === 'altissimo') {
    //750
    criaCovidTempo = 750
}

function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight 
    largura = window.innerWidth

    console.log(largura, altura) 
}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function() {

    tempo -= 1

    if(tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criaCovid)
        window.location.href = "vitoria.html"
   
    } else {
        document.getElementById('cronometro').innerHTML = tempo
    }

}, 1000)

function posicaoRandomica () {

    //remover covid anterior (caso exista)
    if (document.getElementById('covid')) {
          document.getElementById('covid').remove()
          
          //console.log('v' + vidas)
          if (vidas > 3) {
              window.location.href = "fim_de_jogo.html"
          } else { 
          document.getElementById('v' + vidas).src="imagens/coracao_vazio.png" // perde vida

          vidas++ // incremento
        }
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
    covid.onclick = function () {
        this.remove()
    }

    document.body.appendChild(covid)

}

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
