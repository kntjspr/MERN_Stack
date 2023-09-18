require('dotenv').config()

const express = require("express");

//express app
const app = express();
const workoutRoutes = require('./routes/workouts')

//middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})


const port = process.env.PORT || 4000; // viewed at http://localhost:4000 or env

// routes
app.use('/api/workouts', workoutRoutes)

app.listen(port, () => console.log(`App listening on port ${port}!`));
