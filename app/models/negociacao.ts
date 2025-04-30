// Export permite que a classe seja importada para o app.js
export class Negociacao {
    private _data; // Cria atributo private (o que estiver fora da classe não consegue alterar o valor do atributo)
    private _quantidade;
    private _valor;

    // Construtor responsável por criar uma instância da classe Negociacao
    constructor (data, quantidade, valor) { 
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    // Os getter a baixo permitem que os atributos da classe Negociacao que são privados não sejam alterados ou que o javascript adicione algum outro atributo para contornar o erro. Assim, a neogociacao consegue não ser modificada depois de criada.
    get data () {
        return this._data;
    }

    get quantidade () {
        return this._quantidade
    }

    get valor () {
        return this._valor;
    }

    get volume () {
        return this._quantidade * this._valor;
    }
}