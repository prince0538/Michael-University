const {Faculty} = require('../models');

exports.createFaculty = async (req,res) => {
    try {

        const {facultyName, dean, facultyCode, dateCreated} = req.body;
        console.log("faculty code is?", facultyCode)
        const splitfacultyName = facultyName.split(" ")
        const formatFaculty = splitfacultyName[0].charAt(0).toUpperCase() + splitfacultyName[2].charAt(0).toUpperCase() + splitfacultyName[3].charAt(0).toUpperCase();

        const newFaculty = await Faculty.create({
            facultyName,
            dean,
            facultyCode:formatFaculty,
            dateCreated
        });
        res.status(201).json({
            message: 'faculty created successfully',
            data: newFaculty
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Something Went Wrong',
            data: error.message
        })
    }
}

exports.getAllFaculties = async(req, res) => {
    try {

        const faculties = await Faculty.findAll();
        res.status(200).json({
            message: "All faculties retrieved successfully",
            data: faculties
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Something went wrong",
            data: error.message
        })
    }
}

exports.findFacultyById = async(req, res) => {
    try {

        const {id} = req.params
        const faculty = await Faculty.findByPk(id);
        if(!faculty) {
            return res.status(404).json({
                message: "Faculty not found"
            })
        }
        if (faculty) {
            res.status(200).json({
                message: "Faculty retrieved successfully",
                data: faculty
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Something went wrong",
            data: error.message
        })
    }
}