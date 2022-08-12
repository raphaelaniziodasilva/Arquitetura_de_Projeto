import { FabricaGenerica } from "./FabricaGenerica";
import { ItemGenerico } from "./ItemGenerico";
import { Servico } from "./Servico";

// a fabrica de serviço vai herdar da fabrica generica
export class FabricaServico extends FabricaGenerica {
    public criarItem(): ItemGenerico {
        return new Servico()
    }
}