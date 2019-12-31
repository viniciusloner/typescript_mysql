import { createPool, Pool } from 'mysql2/promise'

//coneccao db
export async function connect(): Promise<Pool> {
    const connection = await createPool({
        host: 'localhost',
        user: 'root',
        password: '',
        database: '',
        connectionLimit: 10
    })

    return connection
}