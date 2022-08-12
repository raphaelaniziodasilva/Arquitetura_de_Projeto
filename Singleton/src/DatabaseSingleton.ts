export class DatabaseSingleton {

    // static: único        
    private static instance: DatabaseSingleton

    // métodos para controlar a instância do singleton (que independem de ter ou não o objeto instanciado)

    // o construtor precisa estar indisponível
    private constructor() {
        // coloque a instrução de conexão com o banco de dados
        console.log("CONSTRUTOR - aqui eu crio a conexão com o banco...")
    }

    // o método que efetivamente vai criar o nosso objeto a nossa instancia da base, e esse metodo pode ser declarado como estatico
    // métodos estaticos são métodos que eu posso chama-los ou invoca-los sem precisar de instância de classe
    public static getInstance(): DatabaseSingleton {

        // se eu não tenho esse objeto valido ele tá como undefined?
        if(!DatabaseSingleton.instance) {
            // se sim eu vou criar
            DatabaseSingleton.instance = new DatabaseSingleton()
        }
        return  DatabaseSingleton.instance         
    }

    // métodos de negócio? Aquilo que o meu Database pode fazer

    // o método executarQuery ele não tem static, este método por ele não ter static ele depende de haver uma instancia de objeto o metodo que tem static não depende
    public executarQuery (query: string): void {
        console.log("Db> " + query)
    }
}