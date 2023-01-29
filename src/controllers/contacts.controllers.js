const Contact= require('../models/Contact')
const contactControllers={
    createNewContact:  (req,res)=>{
        res.render('form')
    }
}
module.exports=contactControllers