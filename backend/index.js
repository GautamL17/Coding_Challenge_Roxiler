require('dotenv').config()
const express = require('express')
const app = express()
const PORT = 3000
const cors = require('cors')
const router = require('./routes/data.routes')


app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'
}));

app.use('/', router)

app.get('/', (req, res) => {
    res.json('api running')
})

app.listen(PORT, () => console.log('api is working'))