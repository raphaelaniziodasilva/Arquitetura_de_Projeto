"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FabricaServico = void 0;
const FabricaGenerica_1 = require("./FabricaGenerica");
const Servico_1 = require("./Servico");
// a fabrica de serviço vai herdar da fabrica generica
class FabricaServico extends FabricaGenerica_1.FabricaGenerica {
    criarItem() {
        return new Servico_1.Servico();
    }
}
exports.FabricaServico = FabricaServico;
