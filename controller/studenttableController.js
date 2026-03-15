const studentTable = require('../models')
exports.createstudentTable = async (req, res)=>{
    try {
        const {matricNUmber,studentName,age,Gender}=req.body
        const{departmentId}=req.params

        formatstudentTable = studentName.charAt(0).toUpperCase()+studentName.slice(1)

        const newstudentTable = await studentTable.create({
            matricNUmber,
            studentName,
            age,
            Gender,
            departmentId
        })
        res.status(201).json({
            message:"studentTable created Succesfully",
            data:newstudentTable
        })
    } catch (error) {
        res.status(500).json({
            message:"something went wrong"
            
        })
    }
}