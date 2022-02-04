const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get("/", logger, (req, res) => {
    // res.json({message: 'Hi'})  // pass json
    res.render('index', {text: 'World'});
})

const userRouter = require('./routes/users')

app.use('/users', userRouter);

function logger(req, res, next){
    console.log(req.originalUrl)
    next()
}

app.listen(3001);