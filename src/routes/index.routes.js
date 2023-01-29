const {indexRender}= require('../controllers/index.controllers')
const {Router}= require('express')
const router=Router()
router.get('/', indexRender)
module.exports=router