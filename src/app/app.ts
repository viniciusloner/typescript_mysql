import express, { Application } from 'express'
import morgan from 'morgan'

//Routes
import IndexRoutes from './routes/index.routes'
import ProdutosRoutes from './routes/produtos.routes'

export class App {
    //propriedades
    private app: Application

    //construtor
    constructor(private port?: number | string){
       this.app = express()
       this.setting()
       this.middleware()
       this.routes()
    }

    private setting() {
        //porta que será usada
        this.app.set('port', this.port || process.env.PORT || 8000 || 8003 )
    }

    private middleware() {
        //dependencia de controle de requisições
        this.app.use(morgan('dev'))
        //declarado o uso do REQ.BODY
        this.app.use(express.json())
    }

    //rotas que serão usadas
    private routes(){
        this.app.use(IndexRoutes)
        this.app.use('/produtos', ProdutosRoutes)
    }

    //servidor
    async listen() {
        await this.app.listen(this.app.get('port'), () => {
            console.log(`Server ON in Port ${this.app.get('port')}`)
        })
    }
}