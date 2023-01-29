const mongoose= require('mongoose')
const ContactSchema= new mongoose.Schema(
    {
        nombre: {type: String, required: true},
        apellido: {type: String, required: true},
        direccion: {type: String, required: true},
        correo: {type: String, required: true},
        telefono: {type: String, required: true},
        ciudad: {type: String, required: true},
        pais: {type: String, required: true},
        postal: {type: String, required: true},
        satisfaccion:{type: String, required: true},
        volveras: {type: String, required: true},
    }
)
export default mongoose.model('Contact', ContactSchema)