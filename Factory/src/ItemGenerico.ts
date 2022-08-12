// criando a interface para item generico que pode ser tanto produto como serviço
export interface ItemGenerico {
    exibir(): void

    // isso aqui para poder trabalhar com os itens obrigatorios as funcionalidades obrigatorias que o item generico precisa ter
}

// Vamos criar o Produto.ts