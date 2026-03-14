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