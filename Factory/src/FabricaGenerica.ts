import { ItemGenerico } from "./ItemGenerico";

export abstract class FabricaGenerica {

    // vou ter uma forma que me obriga a ter um metodo chamado criar um item, que também poderia ser uma interface
    public abstract criarItem(): ItemGenerico
}
// Vamos criar o FabricadeProdutos.ts