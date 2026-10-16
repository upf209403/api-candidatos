import { Candidato } from "../types/Candidato";

export async function salvar(candidato: Candidato): Promise<Candidato>{

    return Promise.resolve(candidato)
}

export async function atualizar(candidato: Candidato): Promise<Candidato>{
    return Promise.resolve(candidato)
}

export async function deletar(id:string): Promise<boolean>{
    return Promise.resolve(true)
}

export async function buscarTodos(): Promise<Candidato[]>{
   return Promise.resolve([])
}

export async function buscarPorId(id: string): Promise<Candidato | null>{
     return Promise.resolve(null)
}