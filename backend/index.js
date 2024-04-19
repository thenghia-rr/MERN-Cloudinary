import express from 'express'
import cors from 'cors';

const app = express();

app.use(express.json())

app.get('/', (req, res) => {
    return res.send("Welcome to MERN Cloundinary server")
})

app.get('/api/users', (req, res) => {
    return res.json({message: "This is api for USER"})
})

app.listen(3000, () => {
    console.log("App listening on port 3000")
})