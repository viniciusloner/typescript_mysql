import { Router } from 'express'
const router = Router()
//funcoes que serao executadas
import { 
    getProdutos, 
    createPost, 
    getProdutosId, 
    deleteProdutoId, 
    updatedProdutoId 
} from '../controllers/produtos.controller'

//rota primaria > produtos/?

router.route('/')
    .get(getProdutos)
    .post(createPost)

router.route('/:id')
    .get(getProdutosId)
    .delete(deleteProdutoId)
    .put(updatedProdutoId)

export default router