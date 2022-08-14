import { Alterar } from "./Alterar";
import { Cadastrar } from "./Cadastrar";
import { Consultar } from "./Consultar";
import { Excluir } from "./Excluir";

export class RepoProduto implements Cadastrar, Alterar, Excluir, Consultar {
    cadastrar(): void {
        throw new Error("Method not implemented.");
    }
    alterarDados(): void {
        throw new Error("Method not implemented.");
    }
    excluirPeloId(id: number): void {
        throw new Error("Method not implemented.");
    }
    consultarPorId(id: number) {
        throw new Error("Method not implemented.");
    }
    recuperarTodos() {
        throw new Error("Method not implemented.");
    }

}