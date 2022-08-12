import { ItemGenerico } from "./ItemGenerico";

// implementando o item generico
export class Servico implements ItemGenerico {
    private codigo: number
    private nome: string
    private valor: number
    private aliquota: number

    public constructor() {
        // atribuindo valores direto
        this.codigo = 1234
        this.nome = "Formatação de notebooks"
        this.valor = 354.00
        this.aliquota = 4
    }
    
    exibir(): void {
        console.log(` SERVIÇO: ${this.codigo} - ${this.nome} R$ ${this.valor} - ${this.aliquota}% `)        
    }
    
}
// esse e o meu serviço que faz alguma coisa desse jeito. Agora eu preciso saber como criar esse cara: crie uma fabrica de serviço FabricaServico.ts