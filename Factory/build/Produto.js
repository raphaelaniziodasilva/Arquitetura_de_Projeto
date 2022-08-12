"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = void 0;
// o produto vai implementar as regras que foram definidas no item generico
class Produto {
    constructor() {
        // atribuindo valores direto
        this.id = 1;
        this.desc = "Computador";
        this.foto = "comput.jpg";
        this.preco = 1000.00;
    }
    // implementando interface ItemGeenerico
    exibir() {
        console.log(`PRODUTO: ${this.id} | ${this.desc} | ${this.foto} | R$: ${this.preco} `);
    }
}
exports.Produto = Produto;
// a classe produto foi criada aqui, agora crie o produto no arquivo index.ts
