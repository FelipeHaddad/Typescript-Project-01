"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NegociacaoController = void 0;
class NegociacaoController {
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
exports.NegociacaoController = NegociacaoController;
