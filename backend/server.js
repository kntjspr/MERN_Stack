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


const port = process.env.PORT || 3000; // viewed at http://localhost:3000 or env

// routes
app.use('/api/workouts', workoutRoutes)

app.listen(port, () => console.log(`App listening on port ${port}!`));