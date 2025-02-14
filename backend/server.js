const server = require("express");
const dotenv = require('dotenv');
const { chats } = require('./data/data.js');

const app = server();

dotenv.config();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send("API is running");
});

app.get('/api/chat', (req, res) => {
    res.send(chats);
});

app.get('/api/chat/:id', (req, res)=>{
    console.log(req.params.id);
    const singleChat = chats.find(c => c._id === req.params.id);
    res.send(singleChat);
});

app.listen(port, console.log(`Server is listening on ${port}`));
