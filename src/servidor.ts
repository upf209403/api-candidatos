import express from "express";
import { rota } from "./routes/rotas";

const app = express()
const porta = 3000

app.use(express.json())

app.use(rota)

app.listen(porta, () => {
    console.log("Funcionando na porta", porta)
})