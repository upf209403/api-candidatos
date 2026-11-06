import mongoose from "mongoose";
import {app} from "./app"
import { conectarBanco } from "./configurations/banco";

async function iniciarServidor() {
    await conectarBanco();
    app.listen(3000, ()=>{
        console.log("iniciando o servidor em http://localhost:3000")
    })
}

iniciarServidor().catch(async (erro)=>{
    console.error("um poco de droga e um pouco de salada", erro)
    await mongoose.disconnect()
    process.exitCode = 1
})


