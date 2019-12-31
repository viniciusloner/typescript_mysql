import { Request, Response } from 'express'
import { connect } from '../database/index'
import { Produto } from '../interfaces/produtos.interface'

//GET
export async function getProdutos(req: Request, res: Response): Promise<Response> {
    try {
        const conn = await connect()
        const produtos = await conn.query('SELECT * FROM PRODUTOS')

        return res.json(produtos[0])
    } catch (err) {
        return res.json({ err })
    }
}

//POST
export async function createPost(req: Request, res: Response): Promise<Response> {
    try {
        const newProduto: Produto = req.body
        const conn = await connect()

        await conn.query(`INSERT INTO PRODUTOS SET ?`, [newProduto])

        return res.json({
            mesage: 'produtos inserido'
        })
    } catch (err) {
        return res.json({ err })
    }
}

//GET:ID
export async function getProdutosId(req: Request, res: Response): Promise<Response> {
    try {
        const id = req.params.id 
        const conn = await connect()

        const produto = await conn.query('SELECT * FROM PRODUTOS WHERE ID = ?', [id] )

        return res.json(produto[0])
    } catch (err) {
        return res.json({ err })
    }
}


//DELETE:ID
export async function deleteProdutoId(req: Request, res: Response): Promise<Response> {
    try {
        const id = req.params.id 
        const conn = await connect()

        await conn.query('DELETE FROM PRODUTOS WHERE ID = ?', [id] )

        return res.json({
            mesage: 'produto deletado'
        })
    } catch (err) {
        return res.json({ err })
    }
}

//UPDATE:ID
export async function updatedProdutoId(req: Request, res: Response): Promise<Response> {
    try {
        const id = req.params.id
        const dataProduto: Produto = req.body 
        const conn = await connect()

        await conn.query('UPDATE PRODUTOS SET ? WHERE ID = ?', [dataProduto, id] )

        return res.json({
            mesage: 'produto editado'
        })
    } catch (err) {
        return res.json({ err })
    }
}


