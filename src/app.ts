import express from "express";
import { rota } from "./routes/rotas";
import swaggerUi from "swagger-ui-express"
import { docs } from "./document/swagger";

export const app = express()

app.use(express.json())
app.use("/docs", swaggerUi.serve, swaggerUi.setup(docs))
app.use(rota)
