const {faculty} = require('../models');

exports.createFaculty = async (req,res) => {
    try {

        const {facultyName, dean, facultyCode} = req.body;

        const formatFaculty = facultyName.charAt(0).toUpperCase() + facultyName.charAt(2).toUpperCase() + facultyName.charAt(3).toUpperCase()


        const newFaculty = await faculty.create({
            facultyName,
            dean,
            facultyCode: formatFaculty
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