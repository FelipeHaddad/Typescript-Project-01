import { NegociacaoController } from "./controllers/negociacao-controller.js"; // PRESTA ATENÇÃO PARA COLOCAR O .JS NO FINAL DA IMPORTAÇÃO
const controller = new NegociacaoController();
const form = document.querySelector('.form'); // Passa a classe no HTML do form
// Aqui será adicionado as informações no form ao se apertar o botão 'submit', chamando o método do controller de adiciona()
form.addEventListener('submit', event => {
    event.preventDefault(); // Cancela o evento da página de recarregamento após apertar submit
    controller.adiciona();
});
