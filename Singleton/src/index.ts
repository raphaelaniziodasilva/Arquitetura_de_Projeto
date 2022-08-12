import {DatabaseSingleton} from "./DatabaseSingleton"

// a variavel db vai ser do tipo DatabaseSingleton
let db: DatabaseSingleton
db = DatabaseSingleton.getInstance()// aqui seria o lugar do famoso "new" 
db.executarQuery("SELECT FROM tblCliente")

let db2: DatabaseSingleton
db2 = DatabaseSingleton.getInstance()
db2.executarQuery("SELECT FROM tblProduto")