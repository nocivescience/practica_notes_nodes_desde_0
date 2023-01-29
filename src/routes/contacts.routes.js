const { Router } = require("express")
const {createNewContact}= require('../controllers/contacts.controllers')
const router=Router()
router.get('/form',(req,res)=>{
    res.render('form')
})
module.exports=router