import mongoose from "mongoose";

export async function conectarBanco(){
    await mongoose.connect("mongodb://localhost:27017/urna_aula", {
        serverSelectionTimeoutMS:5000
    })
}