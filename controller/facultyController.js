const {faculty} = require('../models');

exports.createFaculty = async (req,res) => {
    try {

        const {facultyName, dean, facultyCode} = req.body;
        console.log(facultyCode)
        const splitfacultyName = facultyName.split(" ")
        const formatFaculty = splitfacultyName[0].charAt(0).toUpperCase() + splitfacultyName[2].charAt(2).toUpperCase() + splitfacultyName[3].charAt(3).toUpperCase();

        const newFaculty = await faculty.create({
            facultyName,
            dean,
            facultyCode:formatFaculty
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