"use strict";
/* Padrões de projeto Singleton:
    Objetos globais que armazenam informações compartilhadas que me permitem ter elementos uteis a essas informações

    A ideia é que haja um objeto de instância única acessível por quaisquer módulos do seu sistema
    Pense por exemplo num objeto que armazena a conexão com o banco de dados SQL:
    - Vários modulos precisam usar esse objeto

    - Ao precisar enviar um comando para o banco, poderiamos verificar se já existe ou não essa conexão. Se ela não existir, vamos criar. Se ela ja existir, não precisamos recriá-la (uma vez que este processo de conectar é um tanto quanto custoso)

    - Todos os módulos podem compartilhar esta conexão que já esta estabelecida para enviarem seus comandos SQL

    Requisitos:
    - O construtor do objeto que queremos criar não pode ficar disponivel portanto declaramos ele como private

    - A ideia do sigleton é justamente não oferecer a funcionalidade new (para criar novos objetos) e sim recuperar uma instância já existente (ou na ausência desta instância, criá-la)

*/ 
