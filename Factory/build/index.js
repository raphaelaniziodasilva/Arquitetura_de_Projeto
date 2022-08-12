"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// vamos criar a estrutura de produtos, mais antes vamos criar a interface de item generico no arquivo ItemGenerico.ts
const FabricadeProdutos_1 = require("./FabricadeProdutos");
const FabricaServico_1 = require("./FabricaServico");
const Produto_1 = require("./Produto");
/* criando o produto da forma tradicional
    primeira forma, vai funcionar normalmente
    let produto = new Produto()
    produto.exibir()
*/
// criando o produto da forma tradicional, segunda forma o produto vai ser do tipo ItemGenerico
let poduto = new Produto_1.Produto();
poduto.exibir();
/* criando o produto da forma terceirizada ou seja terceirizano o trabalho da criação

 vamos criar a estrutura da fabrica de produtos, mais antes vamos criar a fabrica generico no arquivo FabricaGenerica.ts
*/
// instancio a minha fabrica, que esta criando produtos
let fabrica = new FabricadeProdutos_1.FabricadeProdutos();
// vai criar o produto do tipo ItemGenerico, vai receber da fabrica criarItem
let produto = fabrica.criarItem();
produto.exibir();
/* surgiu a nescessidade do nosso sistema criar um novo produto, agora vendemos serviços juntos

 uma vez que a estrutura ja esta montada eu vou precisar ter alguém que implemente o item generico e alguem que saiba como fabricar esse item generico. Crie um arquivo chamado Serivo.ts
*/
let fabricaSer = new FabricaServico_1.FabricaServico();
let servico = fabricaSer.criarItem();
servico.exibir();
