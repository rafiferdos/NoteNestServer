import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import notFound from './app/middlewares/notFound'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
//TODO import router from './app/routes'

const app: Application = express()

app.use(express.json())
app.use(cors())

// Application Routes
//TODO app.use('/api', router)
const getController = async (req: Request, res: Response) => {
  res.send("Whats Up Buddy!")
}

app.get('/', getController)
app.use(globalErrorHandler)
app.use(notFound)

export default app