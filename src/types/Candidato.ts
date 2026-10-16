export type Candidato = {
    id?: string
    nome: string,
    partido: string,
    numero: number,
    tipoCandidato?: tipoCandidato
}

type tipoCandidato = "PRESIDENTE" | "GOVERNADOR" | "VEREADOR"