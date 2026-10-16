import { Request, Response } from "express";
import { Candidato } from "../types/Candidato";
import { buscarPorCandidatoPorId, buscarTodosCandidatos, salvarCandidato, deletarCandidato, atualizarCandidato } from "../services/candidatoService";


export function listarTodosCandidatos(req: Request, res: Response){
    return res.status(200).json(
        buscarTodosCandidatos()
    )
}

export async function listarCandidatoPorNumero(req: Request<{id : string}>, res: Response){

    const candidato = await buscarPorCandidatoPorId(req.params.id)

    if(candidato){
        return res.status(200).json(candidato)
    }

    return res.status(404).json()
}

export async function criarNovoCandidato(req: Request, res: Response){
    await salvarCandidato(req.body)

    return res.status(201).json({mensagem: "Candidato criado com sucesso"})
}

export async function excluirCandidato(req: Request<{id : string}>, res: Response){
    const candidato = await deletarCandidato(req.params.id)

    if(candidato){
        return res.status(200).json({mensagem: "Candidato excluído com sucesso"})
    }

    return res.status(404).json({mensagem: "Erro ao excluir candidato"})
}

export async function alterarCandidato(req: Request, res: Response){
    await atualizarCandidato(req.body)

    return res.status(201).json({mensagem: "Candidato atualizado com sucesso"})
}