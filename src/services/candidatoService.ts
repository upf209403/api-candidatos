import { Candidato } from "../types/candidato";
import { salvar,atualizar,buscarPorId,buscarTodos,deletar } from "../repository/candidadoRepository";

export function salvarCandidato(candidato:Candidato) {
    return salvar(candidato)
}

export function atualizarCandidato(candidato:Candidato) {
    return atualizar(candidato)
}

export function deletarCandidato(id:string) {
    return deletar(id)
}

export function buscarTodosCandidatos(){
    return buscarTodos()
}

export function buscarCandidatoPorId(id:string){
    return buscarPorId(id)
}
