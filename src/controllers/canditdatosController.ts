import { Request, Response } from "express";
import { buscarTodosCandidatos, buscarCandidatoPorId,salvarCandidato, deletarCandidato, atualizarCandidato } from "../services/candidatoService";

type parametroId = { id: string }

export async function listarTodosCanditados(request: Request, response: Response) {
    return response.status(200).json(await buscarTodosCandidatos())
}

export async function listarCandidatoPorId(request: Request<parametroId>, response: Response) {

    const candidato = await buscarCandidatoPorId(request.params.id)

    if (candidato) {
        return response.status(200).json(candidato)
    }

    return response.status(404).json()
}

export async function criarNovoCandidato(request: Request, response: Response) {
    await salvarCandidato(request.body)
    return response.status(201).json({mensagem:"Candidato salvo com sucesso"})
}

export async function excluirCandidato(request: Request<parametroId>, response: Response) {
      const candidato = await deletarCandidato(request.params.id)

    if (candidato) {
        return response.status(200).json({mensagem:"Candidato excluido com sucesso"})
    }

    return response.status(404).json({mensagem:"Erro ao excluir candidato"})
}

export async function alterarCandidato(request: Request, response: Response) {
    await atualizarCandidato(request.body)
    return response.status(200).json({mensagem:"Candidato atualizado com sucesso"})
}

