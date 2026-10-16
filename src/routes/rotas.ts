import { Router } from "express";
import { listarTodosCandidatos, listarCandidatoPorNumero, alterarCandidato, criarNovoCandidato,excluirCandidato } from "../controller/candidatosController";

export const rota = Router();

rota.get("/", listarTodosCandidatos)
rota.get("/buscar-por-id/:id", listarCandidatoPorNumero)

rota.put("/atualizar-candidato", alterarCandidato)
rota.post("/criar-candidato", criarNovoCandidato)
rota.delete("excluir-candidato/:id", excluirCandidato)