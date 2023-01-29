const { Router } = require("express")
const {createNewContact}= require('../controllers/contacts.controllers')
const router=Router()
router.get('/form', createNewContact)
module.exports=router