import { candidatoModel } from "../models/candidatoModel";
import { Candidato } from "../types/candidato";
import { randomUUID} from "node:crypto"

export async function salvar(candidato:Candidato) :Promise<Candidato> {
    candidato.id = randomUUID()
    await candidatoModel.create(candidato)
    return candidato
}

export async function atualizar(candidato:Candidato):Promise<Candidato|null> {
   await candidatoModel.findByIdAndUpdate({id:candidato.id}, candidato).exec()
   return candidato
}

export async function deletar(id:string): Promise<boolean> {
    await candidatoModel.deleteOne({id}).exec()
    return true
}

export async function buscarTodos():Promise<Candidato[]>{
    const teste =await candidatoModel.find().exec()
    
    return teste
}

export async function buscarPorId(id:string):Promise<Candidato|null>{
    const documento = await candidatoModel.findOne({id}).exec()
    if(documento)
         return documento
    return null
}
