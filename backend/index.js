import express from 'express';
import { PORT, MONGODBURL } from './config.js';
import mongoose from 'mongoose';
import cors from 'cors';
import { User } from './models/userSchema.js';
import { Chat } from './models/ChatSchema.js';

const app = express();

app.use(express.json())
app.use(cors())

mongoose.connect(MONGODBURL)
        .then(() => {
            console.log('Database connected')
            app.listen(PORT, () => {
                console.log(`Server is running on port ${PORT}`)
            })
        })
        .catch((err) => {
            console.log(err)
        })


app.post('/', async (req,res) => {
    const {name,code} = req.body

    try {
        const check = await User.findOne({name:name})
        if (check) {
            res.json('exist')
        } else {
            res.json("does not exist")
        }
    }
    catch(err) {
        console.log(err)
    }
})

app.post('/chat', async (req,res) => {
    const newMessage = {
        user: req.body.user,
        content: req.body.content
    }

    try {
        const message = await Chat.create(newMessage)
    }
    catch(err) {
        console.log(err)
    }
})


app.get('/chat', async (req,res) => {
    try{
        const messages = await Chat.find()

        return res.json({
            text: messages
        })
    }
    catch(err) {
        console.log(err)
    }
})