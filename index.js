const express = require('express');
const PORT = 4000

const app = express();
app.use(express.json());

const Router = require('./router/facultyRoutes')
const deptRouter = require('./router/departmentRoutes')

const courseRoutes = require('./router/courseRoutes')
app.use(Router)
app.use(deptRouter)
app.use(courseRoutes)

app.listen(PORT,() => {
    console.log(`Server is running on PORT:${PORT}`)
})