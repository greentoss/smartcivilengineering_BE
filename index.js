import express from 'express';
import jwt from 'jsonwebtoken';
import mongoose from "mongoose";

const app = express();
const SERVER_PORT = 6006;
const MONGODB_LINK = 'mongodb+srv://greentoss:1206789t@cluster0.n9s1ipy.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(MONGODB_LINK)
    .then(() => console.log('connected to DB'))
    .catch((err) => console.log('unable to connect to DB', err));

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello 123')
});

app.post('/login', (req, res) => {
    console.log(res.body)

    const token = jwt.sign({
        email: req.body.email,
        name: 'Влад'
    },
    '12345678t'
    )

    res.json({
        success : true,
        token
    });
});

app.listen(SERVER_PORT, (err) => {
    if (err) {
        console.log(err);
    }
    console.log('server stared')
});
