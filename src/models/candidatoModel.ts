import { model, Schema } from "mongoose";
import { Candidato } from "../types/candidato";

const candidatoSchema = new Schema<Candidato>(
    {
        id:{type:String, required:true, unique:true},
        nome:{type:String, required:true},
        partido:{type:String, required:true},
        numero:{type:Number, required:true},
        tipoCandidato:{type:String, required:true},
    }
);

export const candidatoModel = model<Candidato>('candidato',candidatoSchema )