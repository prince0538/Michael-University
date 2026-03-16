const {course} = require("../models");

exports.createCourse = async(req, res) => {
    try {
        
        const {courseName, departmentId, lecturerId} = req.body;
        const splitcourseName = courseName.spit(" ")
        const formatcourseName = splitcourseName[0].charAt(0).toUpperCase() + splitcourseName[2].charAt(0).toUpperCase() + splitcourseName[3].charAt(0).toUpperCase();

        const newCourse = await course.create({
            courseName,
            departmentId,
            lecturerId
        })
        res.status(201).json({
            message: "Course created successfully",
            data: newCourse
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Something went wrong"
        })
    }
}