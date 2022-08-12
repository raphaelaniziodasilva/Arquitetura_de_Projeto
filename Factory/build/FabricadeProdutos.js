"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FabricadeProdutos = void 0;
const FabricaGenerica_1 = require("./FabricaGenerica");
const Produto_1 = require("./Produto");
// FabricadeProdutos esta herdando da FabricaGenerica
class FabricadeProdutos extends FabricaGenerica_1.FabricaGenerica {
    // criando um item, mas eu quero que esse item seja um novo produto
    criarItem() {
        //novo produto
        return new Produto_1.Produto();
    }
}
exports.FabricadeProdutos = FabricadeProdutos;
// a classe FabricadeProdutos foi criada aqui, agora va para o index.ts
