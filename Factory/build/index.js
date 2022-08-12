"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// vamos criar a estrutura de produtos, mais antes vamos criar a interface de item generico no arquivo ItemGenerico.ts
const FabricadeProdutos_1 = require("./FabricadeProdutos");
const Produto_1 = require("./Produto");
/* primeira forma, vai funcionar normalmente
    let produto = new Produto()
    produto.exibir()
*/
// segunda forma, o produto vai ser do tipo ItemGenerico
let poduto = new Produto_1.Produto();
poduto.exibir();
// vamos criar a estrutura da fabrica de produtos, mais antes vamos criar a fabrica generico no arquivo FabricaGenerica.ts
// instancio a minha fabrica, que esta criando produtos
let fabrica = new FabricadeProdutos_1.FabricadeProdutos();
// vai criar o produto do tipo ItemGenerico, vai receber da fabrica criarItem
let produto = fabrica.criarItem();
produto.exibir();
