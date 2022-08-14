/* Factory Method
Intenção
Factory Method é um padrão de design criacional que fornece uma interface para criar objetos em uma superclasse, mas permite que subclasses alterem o tipo de objetos que serão criados.

Problema
Imagine que você está criando um aplicativo de gerenciamento de logística. A primeira versão do seu aplicativo só pode lidar com transporte por caminhões, então a maior parte do seu código fica dentro da classe Truck.

Depois de um tempo, seu aplicativo se torna bastante popular. Todos os dias você recebe dezenas de solicitações de empresas de transporte marítimo para incorporar a logística marítima ao aplicativo.

Mas e o código? Atualmente, a maior parte do seu código está acoplada à classe Truck. Adicionar Ships ao aplicativo exigiria alterações em toda a base de código. Além disso, se posteriormente você decidir adicionar outro tipo de transporte ao aplicativo, provavelmente precisará fazer todas essas alterações novamente.

Como resultado, você acabará com um código bastante desagradável, repleto de condicionais que alteram o comportamento do aplicativo dependendo da classe de objetos de transporte.

Solução
O padrão Factory Method sugere que você substitua chamadas diretas de construção de objeto (usando o novo operador) por chamadas para um método de fábrica especial. Não se preocupe: os objetos ainda são criados pelo novo operador, mas estão sendo chamados de dentro do método de fábrica. Objetos retornados por um método de fábrica geralmente são chamados de produtos.

À primeira vista, essa mudança pode parecer inútil: acabamos de mover a chamada do construtor de uma parte do programa para outra. No entanto, considere o seguinte: agora você pode substituir o método fábrica em uma subclasse e alterar a classe de produtos que está sendo criada pelo método.

No entanto, há uma pequena limitação: as subclasses podem retornar diferentes tipos de produtos somente se esses produtos tiverem uma classe base ou interface comum. Além disso, o método fábrica na classe base deve ter seu tipo de retorno declarado como essa interface.

Por exemplo, ambas as classes Truck e Ship devem implementar a interface Transport, que declara um método chamado delivery. Cada classe implementa esse método de forma diferente: caminhões entregam carga por terra, navios entregam carga por mar. O método factory na classe RoadLogistics retorna objetos de caminhão, enquanto o método factory na classe SeaLogistics retorna navios.

O código que usa o método de fábrica (geralmente chamado de código do cliente) não vê diferença entre os produtos reais retornados por várias subclasses. O cliente trata todos os produtos como Transporte abstrato. O cliente sabe que todos os objetos de transporte devem ter o método de entrega, mas exatamente como ele funciona não é importante para o cliente.

Aplicabilidade
Use o Factory Method quando não souber de antemão os tipos e dependências exatos dos objetos com os quais seu código deve trabalhar.

O Factory Method separa o código de construção do produto do código que realmente usa o produto. Portanto, é mais fácil estender o código de construção do produto independentemente do restante do código.

Por exemplo, para adicionar um novo tipo de produto ao aplicativo, você só precisará criar uma nova subclasse de criador e substituir o método de fábrica nela.

Use o Factory Method quando quiser fornecer aos usuários de sua biblioteca ou estrutura uma maneira de estender seus componentes internos.

A herança é provavelmente a maneira mais fácil de estender o comportamento padrão de uma biblioteca ou estrutura. Mas como o framework reconheceria que sua subclasse deveria ser usada em vez de um componente padrão?

A solução é reduzir o código que constrói componentes na estrutura em um único método de fábrica e permitir que qualquer pessoa substitua esse método, além de estender o próprio componente.

Vamos ver como isso funcionaria. Imagine que você escreve um aplicativo usando uma estrutura de interface do usuário de código aberto. Seu aplicativo deve ter botões redondos, mas a estrutura fornece apenas botões quadrados. Você estende a classe Button padrão com uma gloriosa subclasse RoundButton. Mas agora você precisa dizer à classe UIFramework principal para usar a nova subclasse de botão em vez de uma padrão.

Para conseguir isso, você cria uma subclasse UIWithRoundButtons de uma classe de estrutura base e substitui seu método createButton. Enquanto este método retorna objetos Button na classe base, você faz sua subclasse retornar objetos RoundButton. Agora use a classe UIWithRoundButtons em vez de UIFramework. E é sobre isso!

Use o Factory Method quando quiser economizar recursos do sistema reutilizando objetos existentes em vez de reconstruí-los a cada vez.

Você geralmente experimenta essa necessidade ao lidar com objetos grandes e com muitos recursos, como conexões de banco de dados, sistemas de arquivos e recursos de rede.

Vamos pensar no que deve ser feito para reutilizar um objeto existente:

Primeiro, você precisa criar algum armazenamento para acompanhar todos os objetos criados.
Quando alguém solicita um objeto, o programa deve procurar um objeto livre dentro desse pool.
… e depois devolvê-lo ao código do cliente.
Se não houver objetos livres, o programa deve criar um novo (e adicioná-lo ao pool).
É muito código! E tudo deve ser colocado em um único lugar para que você não polua o programa com código duplicado.

Provavelmente o lugar mais óbvio e conveniente onde esse código pode ser colocado é o construtor da classe cujos objetos estamos tentando reutilizar. No entanto, um construtor deve sempre retornar novos objetos por definição. Ele não pode retornar instâncias existentes.

Portanto, você precisa ter um método regular capaz de criar novos objetos, bem como reutilizar os existentes. Isso soa muito como um método de fábrica.

Como implementar
Faça com que todos os produtos sigam a mesma interface. Essa interface deve declarar métodos que façam sentido em cada produto.

Adicione um método de fábrica vazio dentro da classe do criador. O tipo de retorno do método deve corresponder à interface do produto comum.

No código do criador, encontre todas as referências a construtores de produtos. Um por um, substitua-os por chamadas para o método de fábrica, enquanto extrai o código de criação do produto para o método de fábrica.

Pode ser necessário adicionar um parâmetro temporário ao método de fábrica para controlar o tipo de produto devolvido.

Neste ponto, o código do método de fábrica pode parecer muito feio. Ele pode ter uma grande instrução switch que escolhe qual classe de produto instanciar. Mas não se preocupe, vamos corrigi-lo em breve.

Agora, crie um conjunto de subclasses de criador para cada tipo de produto listado no método de fábrica. Substitua o método de fábrica nas subclasses e extraia os bits apropriados do código de construção do método base.

Se houver muitos tipos de produtos e não fizer sentido criar subclasses para todos eles, você pode reutilizar o parâmetro de controle da classe base em subclasses.

Por exemplo, imagine que você tenha a seguinte hierarquia de classes: a classe base Mail com algumas subclasses: AirMail e GroundMail; as classes Transporte são Avião, Caminhão e Trem. Enquanto a classe AirMail usa apenas objetos Plane, GroundMail pode trabalhar com objetos Truck e Train. Você pode criar uma nova subclasse (digamos TrainMail) para lidar com os dois casos, mas há outra opção. O código cliente pode passar um argumento para o método factory da classe GroundMail para controlar qual produto deseja receber.

Se, após todas as extrações, o método de fábrica base ficar vazio, você poderá torná-lo abstrato. Se sobrar algo, você pode torná-lo um comportamento padrão do método.

*/