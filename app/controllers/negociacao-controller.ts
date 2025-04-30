export class NegociacaoController { // Classe que vai pegar os dados inseridos pelo usuário na página e criar o modelo dos dados
    private inputData;
    private inputQuantidade;
    private inputValor;

    constructor() {
        this.inputData = document.querySelector('#data'); // Vai definir o inputData como o valor do campo com id "data" no html do site. Ele faz isso utilizando o document.querySelector do Javascript
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector("#valor");
    }

    adiciona() {
        console.log(this.inputData);
        console.log(this.inputQuantidade);
        console.log(this.inputValor);
    }

}











