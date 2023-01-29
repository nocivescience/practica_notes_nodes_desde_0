const express=require('express')
const path=require('path')
const morgan= require('morgan')
const {engine}= require('express-handlebars')
const app=express()
//settings
app.set('port', process.env.PORT||3000)
app.set('views', path.join(__dirname,'views')) 
app.engine(
    '.hbs',
    engine({
        defaultLayout:'main',
        layoutsDir: path.join(app.get('views'), 'layouts'),
        partialsDir: path.join(app.get('views'), 'partials'),
        extname: '.hbs',
    })
)
app.set('view engine', '.hbs')
//middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended:true}))
app.use(require('./routes/index.routes'))
app.use(require('./routes/notes.routes'))
app.use(express.static(path.join(app.get('views'),'static')))
//listeners
app.listen(app.get('port'),()=>{
    console.log(`la conexion esta en el puerto ${app.get('port')}`)
})