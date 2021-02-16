const express = require ('express');
const mongoose = require ('mongoose');
const { MONGO_URI } = require ('./config');
const userRouter = require('./routers/users');


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

//Routes
app.get('/', (req, res) => {
    res.send("hello lady");
});

app.use(express.json()); //without this, it can not read req.body


app.use('/users', userRouter);

//Starting the server
app.listen(PORT, console.log(`listening to the port ${5000}`));


