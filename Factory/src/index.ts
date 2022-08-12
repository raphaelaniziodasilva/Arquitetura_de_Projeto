// vamos criar a estrutura de produtos, mais antes vamos criar a interface de item generico no arquivo ItemGenerico.ts
import { FabricadeProdutos } from "./FabricadeProdutos";
import { FabricaGenerica } from "./FabricaGenerica";
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


