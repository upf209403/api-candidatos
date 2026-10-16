import { Candidato } from "../types/Candidato";
import { salvar, atualizar, deletar, buscarPorId, buscarTodos } from "../repository/candidatoRepository";

export function salvarCandidato(candidato: Candidato){
    return salvar(candidato)
}

export function atualizarCandidato(candidato: Candidato){
    return atualizar(candidato)

}

export function deletarCandidato(id:string){
    return deletar(id)
}

export function buscarTodosCandidatos(){
    return buscarTodos()
}

export function buscarPorCandidatoPorId(id: string){
    return buscarPorId(id)
}