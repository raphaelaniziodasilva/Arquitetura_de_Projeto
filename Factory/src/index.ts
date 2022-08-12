// vamos criar a estrutura de produtos, mais antes vamos criar a interface de item generico no arquivo ItemGenerico.ts
import { FabricadeProdutos } from "./FabricadeProdutos";
import { FabricaGenerica } from "./FabricaGenerica";
import { FabricaServico } from "./FabricaServico";
import { ItemGenerico } from "./ItemGenerico";
import { Produto } from "./Produto";


/* criando o produto da forma tradicional
    primeira forma, vai funcionar normalmente
    let produto = new Produto()
    produto.exibir()
*/

// criando o produto da forma tradicional, segunda forma o produto vai ser do tipo ItemGenerico
let poduto: ItemGenerico  = new Produto()
poduto.exibir()

/* criando o produto da forma terceirizada ou seja terceirizano o trabalho da criação

 vamos criar a estrutura da fabrica de produtos, mais antes vamos criar a fabrica generico no arquivo FabricaGenerica.ts
*/

// instancio a minha fabrica, que esta criando produtos
let fabrica: FabricaGenerica = new FabricadeProdutos()

// vai criar o produto do tipo ItemGenerico, vai receber da fabrica criarItem
let produto: ItemGenerico = fabrica.criarItem()
produto.exibir()


/* surgiu a nescessidade do nosso sistema criar um novo produto, agora vendemos serviços juntos

 uma vez que a estrutura ja esta montada eu vou precisar ter alguém que implemente o item generico e alguem que saiba como fabricar esse item generico. Crie um arquivo chamado Serivo.ts
*/

let fabricaSer: FabricaGenerica = new FabricaServico()

let servico: ItemGenerico = fabricaSer.criarItem()
servico.exibir()



