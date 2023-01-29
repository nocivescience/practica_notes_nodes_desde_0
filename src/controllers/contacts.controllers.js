const Contact= require('../models/Contact')
const contactControllers={
    renderForm:  (req,res)=>{
        res.render('form')
    }
}
module.exports=contactControllers