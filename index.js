const express = require('express');
const PORT = 4000

const app = express();
app.use(express.json());

const Router = require('./router/facultyRoutes')
const deptRouter = require('./router/departmentRoutes')
<<<<<<< HEAD
const staffRout = require('./router/staffRouter')
app. use(Router)
app.use(deptRouter)
app.use(staffRout)
=======

const courseRoutes = require('./router/courseRoutes')
app.use(Router)
app.use(deptRouter)
app.use(courseRoutes)
>>>>>>> fa384691ccf5fbbb258bf28f634f106d85d9f66b

app.listen(PORT,() => {
    console.log(`Server is running on PORT:${PORT}`)
})