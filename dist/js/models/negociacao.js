"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Negociacao = void 0;
// Export permite que a classe seja importada para o app.js
class Negociacao {
    // Construtor responsável por criar uma instância da classe Negociacao
    constructor(data, quantidade, valor) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }
    // Os getter a baixo permitem que os atributos da classe Negociacao que são privados não sejam alterados ou que o javascript adicione algum outro atributo para contornar o erro. Assim, a neogociacao consegue não ser modificada depois de criada.
    get data() {
        return this._data;
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
    get volume() {
        return this._quantidade * this._valor;
    }
}
exports.Negociacao = Negociacao;
