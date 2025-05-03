import { Negociacao } from "../models/negociacao.js";
export class NegociacaoController {
    constructor() {
        this.inputData = document.querySelector('#data'); // Vai definir o inputData como o valor do campo com id "data" no html do site. Ele faz isso utilizando o document.querySelector do Javascript
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector("#valor");
    }
    adiciona() {
        const negociacao = this.criaNegociacao();
        console.log(negociacao);
        this.limparFormulario();
    }
    criaNegociacao() {
        const exp = /-/g; // Expressão regular. Ela vai encontrar todos os -
        const date = new Date(this.inputData.value.replace(exp, ',')); // Cria uma data, pegando a string do inputData e substituindo todos os valores - (passando o parâmetro exp) por ,
        const quantidade = parseInt(this.inputQuantidade.value); // Transforma string do inputQuantidade para inteiro
        const valor = parseFloat(this.inputValor.value); // Transforma string do inputValor para ponto flutuante
        return new Negociacao(date, quantidade, valor);
    }
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
}
