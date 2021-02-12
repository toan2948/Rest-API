const express = require ('express');
const mongoose = require ('mongoose');
const { MONGO_URI } = require ('./config');

// create/start the express app
const app = express();

const PORT = process.env.PORT || 5000;



// Connect to a Database
mongoose.connect(MONGO_URI, {
    useNewUrlParser:true,
    useUnifiedTopology: true
})
    .then (()=> console.log('mongodb connected'))
    .catch (err => console.log(err));

//Middleware

//Routes
app.get('/', (req, res) => {
    res.send("hello lady");
});

app.use(express.json()); //without it, it can not read req.body

const userRouter = require('./routers/users');

app.use('/users', userRouter);

//Starting the server
app.listen(PORT, console.log(`listening to the port ${5000}`));


