import express from "express"
import {config} from 'dotenv'
import cors from 'cors'
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import  dbConnection  from "./database/dbConnection.js";
import messageRouter from "./router/messageRouter.js";
import userRouter from "./router/userRouter.js"
import appointmentRouter from "./router/appointmentRouter.js"

import {errorMiddleware} from './middlewares/errorMiddleware.js'
const app = express();
config({path: "./config/config.env"})


app.use(cors({
  origin: ['http://localhost:5173' , 'http://localhost:5173'] ,
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

// app.use(
//   cors({
//     origin: [process.env.FRONTEND_URL_ONE, process.env.FRONTEND_URL_TWO],
//     method: ["GET", "POST", "DELETE", "PUT"],
//     credentials: true,
//   })
// );


 // to get the value of our cookie
 app.use(cookieParser())
 // to convet the json data into the string
 app.use(express.json())
 app.use(express.urlencoded({extended:true}))
 app.use(fileUpload({
    useTempFiles:true,
    tempFileDir:"/temp"
   }))
   
   app.use("/api/v1/message", messageRouter);
   app.use("/api/v1/user",userRouter)
   app.use('/api/v1/appointment', appointmentRouter)
   app.use(errorMiddleware)
 dbConnection()
export default app