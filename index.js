const express=require('express')
const cors=require('cors')
const dotenv=require('dotenv')
const dbcon=require('./DBCon/dbcon')
const authRouter=require('./Routes/auth.routes')
const orderRouter=require('./Routes/order.routes')

const app=express()

dotenv.config()

app.use(express.json())
app.use(cors())

dbcon('mongodb+srv://manikanta:manikanta@cluster0.5uoum.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')


app.use('/',authRouter)
app.use('/',orderRouter)


app.listen(3000,() =>{
    console.log('server started')
})