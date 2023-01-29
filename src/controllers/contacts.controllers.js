const Contact= require('../models/Contact')
const contactControllers={
    renderForm:  (req,res)=>{
        res.render('form')
    },
    createNewContact: async (req,res)=>{
        const {
            nombre, 
            apellido, 
            direccion, 
            correo, 
            telefono, 
            ciudad, 
            pais, 
            postal, 
            satisfaccion, 
            volveras
        }= req.body
        const newContact= new Contact({
            nombre,
            apellido,
            direccion,
            correo,
            telefono,
            ciudad,
            pais,
            postal,
            satisfaccion,
            volveras
        })
        await newContact.save()
        res.redirect('/form')
    }
}
module.exports=contactControllers