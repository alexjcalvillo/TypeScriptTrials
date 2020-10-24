import express = require('express');

// app is an express Application type -> will refer
// to methods we call from express
const app: express.Application = express(); 

// const alexsNumber:number = 27; STRONG TYPING with :number syntax

app.get('/', (req: express.Request, res: express.Response) => {
    res.send('Hello World!');
})

app.listen(5000, () => {
    console.log(`Listening on PORT: 5000`);
});