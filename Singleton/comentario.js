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
/* Singleton
Intenção
Singleton é um padrão de design de criação que permite garantir que uma classe tenha apenas uma instância, enquanto fornece um ponto de acesso global para essa instância.

Problema
O padrão Singleton resolve dois problemas ao mesmo tempo, violando o Princípio da Responsabilidade Única:

Certifique-se de que uma classe tenha apenas uma única instância. Por que alguém iria querer controlar quantas instâncias uma classe tem? O motivo mais comum para isso é controlar o acesso a algum recurso compartilhado, por exemplo, um banco de dados ou um arquivo.

Funciona assim: imagine que você criou um objeto, mas depois de um tempo decidiu criar um novo. Em vez de receber um novo objeto, você receberá o que já criou.

Observe que esse comportamento é impossível de implementar com um construtor regular, pois uma chamada de construtor sempre deve retornar um novo objeto por design.

Forneça um ponto de acesso global para essa instância. Lembra daquelas variáveis ​​globais que você (tudo bem, eu) usava para armazenar alguns objetos essenciais? Embora sejam muito úteis, também são muito inseguros, pois qualquer código pode substituir o conteúdo dessas variáveis ​​e travar o aplicativo.

Assim como uma variável global, o padrão Singleton permite acessar algum objeto de qualquer lugar do programa. No entanto, também protege essa instância de ser substituída por outro código.

Há um outro lado desse problema: você não quer que o código que resolve o problema nº 1 esteja espalhado por todo o seu programa. É muito melhor tê-lo dentro de uma classe, especialmente se o resto do seu código já depende dele.

Hoje em dia, o padrão Singleton tornou-se tão popular que as pessoas podem chamar algo de singleton mesmo que resolva apenas um dos problemas listados.

Solução
Todas as implementações do Singleton têm essas duas etapas em comum:

Torne o construtor padrão privado, para evitar que outros objetos usem o novo operador com a classe Singleton.
Crie um método de criação estático que atue como um construtor. Sob o capô, esse método chama o construtor privado para criar um objeto e o salva em um campo estático. Todas as chamadas a seguir para esse método retornam o objeto armazenado em cache.

Se o seu código tiver acesso à classe Singleton, ele poderá chamar o método estático do Singleton. Portanto, sempre que esse método é chamado, o mesmo objeto é sempre retornado.

Analogia do mundo real
O governo é um excelente exemplo do padrão Singleton. Um país pode ter apenas um governo oficial. Independentemente das identidades pessoais dos indivíduos que formam governos, o título, “O Governo de X”, é um ponto de acesso global que identifica o grupo de responsáveis.

Pseudo-código
Neste exemplo, a classe de conexão de banco de dados atua como um Singleton. Esta classe não tem um construtor público, então a única maneira de obter seu objeto é chamar o método getInstance. Esse método armazena em cache o primeiro objeto criado e o retorna em todas as chamadas subsequentes.

/ A classe Database define o método `getInstance` que permite
// clientes acessam a mesma instância de uma conexão de banco de dados
// ao longo do programa.

class Database is
    
    // O campo para armazenar a instância singleton deve ser
    // declarado estático.

    private static field instance: Database

    // O construtor do singleton deve sempre ser privado para
    // evita chamadas diretas de construção com o `new`
    // operador.

    private constructor Database()

        // é Algum código de inicialização, como o real
        // conexão com um servidor de banco de dados.
        // ...

    // O método estático que controla o acesso ao singleton
    // instância.

    public static method getInstance()
        if (Database.instance == null) 
            acquireThreadLock()

                // Certifique-se de que a instância ainda não foi
                // inicializado por outro thread enquanto este
                // está aguardando a liberação do bloqueio.
                
                if (Database.instance == null) then
                    Database.instance = new Database()
        return Database.instance

    // Finalmente, qualquer singleton deve definir alguma lógica de negócios
    // que pode ser executado em sua instância.

    public method query(sql) 

        // Por exemplo, todas as consultas de banco de dados de um aplicativo vão
        // através deste método. Portanto, você pode colocar
        // limitação ou lógica de cache aqui.
        // ...

class Application is
    method main() is
        Database foo = Database.getInstance()
        foo.query("SELECT ...")
        // ...

        Database bar = Database.getInstance()
        bar.query("SELECT ...")

        // A variável `bar` conterá o mesmo objeto que
        // a variável `foo`.


Aplicabilidade
Use o padrão Singleton quando uma classe em seu programa deve ter apenas uma única instância disponível para todos os clientes; por exemplo, um único objeto de banco de dados compartilhado por diferentes partes do programa.

O padrão Singleton desabilita todos os outros meios de criar objetos de uma classe, exceto o método de criação especial. Este método cria um novo objeto ou retorna um existente se já tiver sido criado.

Use o padrão Singleton quando precisar de controle mais estrito sobre variáveis ​​globais.

Ao contrário das variáveis ​​globais, o padrão Singleton garante que haja apenas uma instância de uma classe. Nada, exceto a própria classe Singleton, pode substituir a instância em cache.

Observe que você sempre pode ajustar essa limitação e permitir a criação de qualquer número de instâncias Singleton. A única parte do código que precisa ser alterada é o corpo do método getInstance.

Como implementar
Adicione um campo estático privado à classe para armazenar a instância singleton.

Declare um método de criação estático público para obter a instância singleton.

Implemente a “inicialização lenta” dentro do método estático. Ele deve criar um novo objeto em sua primeira chamada e colocá-lo no campo estático. O método deve sempre retornar essa instância em todas as chamadas subsequentes.

Torne o construtor da classe privado. O método estático da classe ainda poderá chamar o construtor, mas não os outros objetos.

Revise o código do cliente e substitua todas as chamadas diretas ao construtor do singleton por chamadas ao seu método de criação estático.

*/


