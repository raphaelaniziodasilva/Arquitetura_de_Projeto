import { ItemGenerico } from "./ItemGenerico"

// o produto vai implementar as regras que foram definidas no item generico
export class Produto implements ItemGenerico {
    private id: number
    private desc: string
    private foto: string
    private preco: number

    public constructor () {
        // atribuindo valores direto
        this.id = 1
        this.desc = "Computador"
        this.foto = "comput.jpg"
        this.preco = 1000.00
    }
    // implementando interface ItemGeenerico
    exibir(): void {
        console.log(`PRODUTO: ${this.id} | ${this.desc} | ${this.foto} | R$: ${this.preco} `)        
    }
}
// a classe produto foi criada aqui, agora crie o produto no arquivo index.ts