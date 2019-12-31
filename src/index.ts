import { App } from './app/app'

async function main() {
    //instanciado o objeto
    const app = new App()
    //executado o metodo listen
    await app.listen()
}

main()