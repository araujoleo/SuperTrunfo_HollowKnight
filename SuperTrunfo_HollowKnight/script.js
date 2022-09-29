//ADICIONANDO CARTAS
var carta1 = {
    nome: "False Knight",
    imagem: "https://images6.alphacoders.com/866/thumb-1920-866193.jpg",
    atributos: { Ataque: 6, Defesa: 4, Agilidade: 4 }
  };
  
  var carta2 = {
    nome: "Hornet",
    imagem:
      "https://sm.ign.com/t/ign_br/screenshot/default/hollow-knight-silksong-capa_qr3p.h720.jpg",
    atributos: { Ataque: 7, Defesa: 5, Agilidade: 10 }
  };
  
  var carta3 = {
    nome: "Grimm",
    imagem:
      "https://steamuserimages-a.akamaihd.net/ugc/943965392593914591/94DF4CD5139F3AAD046DDE2B4CC03E199120D0DC/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
    atributos: { Ataque: 8, Defesa: 7, Agilidade: 8 }
  };
  
  var carta4 = {
    nome: "The Radiance",
    imagem:
      "https://i0.wp.com/vgkami.com/wp-content/uploads/2022/04/absolute-radiance-hollow-knight.jpg?fit=1200%2C675&ssl=1",
    atributos: { Ataque: 10, Defesa: 8, Agilidade: 2 }
  };
  
  //SORTEANDO CARTAS
  var cartas = [carta1, carta2, carta3, carta4];
  var cartaMaquina = 0;
  var cartaJogador = 0;
  
  function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 3);
    cartaMaquina = cartas[numeroCartaMaquina];
  
    var numeroCartaJogador = parseInt(Math.random() * 3);
    cartaJogador = cartas[numeroCartaJogador];
  
    while (numeroCartaMaquina == numeroCartaJogador) {
      numeroCartaJogador = parseInt(Math.random() * 3);
    }
  
    //desabilitar o botão sortear após as cartas serem sorteadas
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
  
    exibirCartaJogador();
  }
  
  //OBTÉM O ATRIBUTO SELECIONADO
  function obtemAtributoSelecionado() {
    var radioAtributos = document.getElementsByName("atributo");
    for (var i = 0; i < radioAtributos.length; i++) {
      if (radioAtributos[i].checked == true) {
        return radioAtributos[i].value;
      } else if (radioAtributos[i].checked == false) {
        alert("ERRO! SELECIONE UM ATRIBUTO.");
      }
    }
  }
  
  //BOTÃO JOGAR
  function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado();
    var elementoResultado = document.getElementById("resultado");
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];
  
    if (valorCartaJogador > valorCartaMaquina) {
      elementoResultado.innerHTML = "<p class='resultado-final'>Você Venceu!</p>";
    } else if (valorCartaJogador < valorCartaMaquina) {
      elementoResultado.innerHTML = "<p class='resultado-final'>Você Perdeu!</p>";
    } else {
      elementoResultado.innerHTML = "<p class='resultado-final'>Empate!</p>";
    }
  
    //desabilitar o botão de jogar após o resultado
    document.getElementById("btnJogar").disabled = true;
    exibirCartaMaquina();
  }
  
  //EXIBE NA TELA IMAGEM DAS CARTAS DO JOGADOR
  function exibirCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador");
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
  
    var moldura =
      '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style="width: inherit; height: inherit; position: absolute;">';
  
    var tagHTML = "<div id='opcoes' class='carta-status'>";
  
    var opcoesTexto = "";
    for (var atributo in cartaJogador.atributos) {
      opcoesTexto +=
        "<input type='radio' name='atributo' value='" +
        atributo +
        "'>" +
        atributo +
        "" +
        cartaJogador.atributos[atributo] +
        "<br>";
    }
  
    var nome = `<p class="carta-subtitle"> ${cartaJogador.nome} </p>`;
  
    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
  }
  
  //EXIBE NA TELA CARTA DA MAQUINA
  
  function exibirCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina");
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  
    var moldura =
      '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style="width: inherit; height: inherit; position: absolute;">';
  
    var tagHTML = "<div id='opcoes' class='carta-status'>";
  
    var opcoesTexto = "";
    for (var atributo in cartaMaquina.atributos) {
      opcoesTexto +=
        "<p type='text' name='atributo' value='" +
        atributo +
        "'>" +
        atributo +
        "" +
        cartaMaquina.atributos[atributo] +
        "</p>";
    }
  
    var nome = `<p class="carta-subtitle"> ${cartaMaquina.nome} </p>`;
  
    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
  }
  