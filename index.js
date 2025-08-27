const express=require('express')
const cors=require('cors')
const dotenv=require('dotenv')
const dbcon=require('./DBCon/dbcon')
const authRouter=require('./Routes/auth.routes')
const shipmentRouter=require('./Routes/shipment.routes')
const driverRouter=require('./Routes/driver.routes')

const app=express()

dotenv.config()

app.use(express.json())
app.use(cors())

dbcon('mongodb+srv://manikanta:manikanta@cluster0.5uoum.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')


app.use('/authentication',authRouter)
app.use('/shipments',shipmentRouter)
app.use('/driver',driverRouter)



app.listen(3000,() =>{
    console.log('server started')
})