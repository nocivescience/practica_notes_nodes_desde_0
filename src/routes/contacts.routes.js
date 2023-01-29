const { Router } = require("express")
const {
    renderForm,
    createNewContact,
}= require('../controllers/contacts.controllers')
const router=Router()
router.get('/form', renderForm)
router.post('/nuevo-contacto', createNewContact)
module.exports=router