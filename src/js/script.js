/* 

- passo 1: Pegar os elementos que representam as abas HTML

- passo2 : Identificar o clique no elemento da aba

- passo 3: Quando o usuário clicar, desmarcar a aba selecionada

- passo 4: Marcar a aba clicada como selecionado

- passo 5: Esconder o conteúdo anterior

- passo 6 : Mostrar o conteúdo da aba selecionada

*/

const abas = document.querySelectorAll('.aba');
// addEventListener só funciona em um elemento. abas é uma lista.


abas.forEach(aba => {
  aba.addEventListener('click', function() {

    if(aba.classList.contains('selecionado')) {
      return;
    }

    selecionarAba(aba)

    mostrarInformacoesDaAba(aba)

  });
});

function selecionarAba(aba) {
  const abaSelecionada = document.querySelector('.aba.selecionado');
    abaSelecionada.classList.remove('selecionado')

    aba.classList.add('selecionado');
}

function mostrarInformacoesDaAba(aba) {
    const informacaoSelecionada = document.querySelector('.informacao.selecionado');
    informacaoSelecionada.classList.remove('selecionado');

    const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`

    const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba)
    informacaoASerMostrada.classList.add('selecionado')
}