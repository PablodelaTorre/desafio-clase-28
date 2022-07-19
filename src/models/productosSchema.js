import mongoose from "mongoose";


export const schemaProductos = new mongoose.Schema({
    mail: {
        type: String,
        required: true,
    },
    texto: {
        type: String,
        required: true,
    },
    fecha: {
        type: String,
    }
})