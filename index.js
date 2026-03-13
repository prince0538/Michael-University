const express = require('express');
const PORT = 4000

const app = express();

const Router = require('./router/facultyRoutes')
app.use(express.json());

app.use(Router)

app.listen(PORT,() => {
    console.log(`Server is running on PORT:${PORT}`)
})