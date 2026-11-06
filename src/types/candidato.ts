export type Candidato ={
    id?:string
    nome:string,
    partido:string,
    numero: number,
    tipoCandidato:TipoCandidato
}

export type TipoCandidato = "VEREADOR"|"PRESIDENTE"|"GOVERNADOR"