const express = require('express')
const dotenv = require('dotenv').config()

const goalRoutes = require('./routes/goalRoutes')

const { errorHandler } = require('./middleware/errorMiddleware')

const PORT = process.env.PORT || 5001

const app = express()
app.use(express.json())

app.use('/api/goals', goalRoutes)
app.use(errorHandler)



app.listen(PORT, () => console.log('server started on port', PORT))