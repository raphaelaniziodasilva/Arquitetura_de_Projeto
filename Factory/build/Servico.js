"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Servico = void 0;
// implementando o item generico
class Servico {
    constructor() {
        // atribuindo valores direto
        this.codigo = 1234;
        this.nome = "Formatação de notebooks";
        this.valor = 354.00;
        this.aliquota = 4;
    }
    exibir() {
        console.log(` SERVIÇO: ${this.codigo} - ${this.nome} R$ ${this.valor} - ${this.aliquota}% `);
    }
}
exports.Servico = Servico;
// esse e o meu serviço que faz alguma coisa desse jeito. Agora eu preciso saber como criar esse cara: crie uma fabrica de serviço FabricaServico.ts
