import { Router } from "express";
import { listarTodosCanditados, listarCandidatoPorId, alterarCandidato, criarNovoCandidato, excluirCandidato } from "../controllers/canditdatosController";

export const rota = Router();

rota.get("/", listarTodosCanditados)
rota.get("/buscar-por-id/:id", listarCandidatoPorId)
rota.put("/atualizar-candidato", alterarCandidato)
rota.post("/criar-candidato", criarNovoCandidato)
rota.delete("/excluirCandidato/:id",excluirCandidato )