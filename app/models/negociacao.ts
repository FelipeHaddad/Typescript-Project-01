// Export permite que a classe seja importada para o app.js
export class Negociacao {
    private _data: Date; // Cria atributo private (o que estiver fora da classe não consegue alterar o valor do atributo)
    private _quantidade: number;
    private _valor: number;

    // Construtor responsável por criar uma instância da classe Negociacao
    constructor (data: Date, quantidade: number, valor: number) { 
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    // Os getter a baixo permitem que os atributos da classe Negociacao que são privados não sejam alterados ou que o javascript adicione algum outro atributo para contornar o erro. Assim, a neogociacao consegue não ser modificada depois de criada.
    get data (): Date {
        return this._data;
    }

    get quantidade (): number {
        return this._quantidade
    }

    get valor (): number {
        return this._valor;
    }

    get volume (): number {
        return this._quantidade * this._valor;
    }
}
