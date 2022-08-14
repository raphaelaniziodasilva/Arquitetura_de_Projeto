/* Interface Segregation
- Aumente o fator de granularidade das interfaces para tornar o seu objeto multifacetado

- Ter muitos métodos em uma mesma interface pode "engessar" a sua classe

- Muitas interfaces segregadas pode dar flexibilidade para que a mesma implementação seja aceita por varios módulos

- Imagine um dado (Dado de jogo mesmo), aonde cada face pode se encaixar em um sistema diferente

/* Dependecy Inversion
- Nunca deenda de classes concretas

- Sempre opte por declarar refêrencias a interfaces e instacie, classes concretas que implementam estas interfaces
. Principio do desaclopamento 
. Interface te diz "o que"
. Implementação diz "como", seguindo o "o que" definido na interface

- Uma eventual mudança de implementação, não gera um impacto significativo no sistema, uma vez que o módulo que chama a interface não muda ( você apenas "troca" a peça que executa a função o conector e o mesmo )

*/