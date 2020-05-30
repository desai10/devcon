const express = require('express')
const connectDb = require('./config/db')

const app = express()

connectDb()

app.get('/', (req, res) => res.send('running'))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`server started on port ${PORT}`))