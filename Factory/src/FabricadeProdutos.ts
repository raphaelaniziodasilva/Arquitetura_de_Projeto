import { FabricaGenerica } from "./FabricaGenerica";
import { Produto } from "./Produto";

// FabricadeProdutos esta herdando da FabricaGenerica
export class FabricadeProdutos extends FabricaGenerica {

    // criando um item, mas eu quero que esse item seja um novo produto
    public criarItem(): Produto {
        //novo produto
        return new Produto()   
    }
}
// a classe FabricadeProdutos foi criada aqui, agora va para o index.ts