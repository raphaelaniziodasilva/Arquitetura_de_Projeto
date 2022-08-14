import { Alterar } from "./Alterar";
import { Cadastrar } from "./Cadastrar";
import { Consultar } from "./Consultar";

export class RepoCliente implements Cadastrar, Alterar, Consultar {
    cadastrar(): void {
        throw new Error("Method not implemented.");
    }
    alterarDados(): void {
        throw new Error("Method not implemented.");
    }
    consultarPorId(id: number) {
        throw new Error("Method not implemented.");
    }
    recuperarTodos() {
        throw new Error("Method not implemented.");
    }

}