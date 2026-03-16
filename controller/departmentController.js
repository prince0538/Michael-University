const {Department} = require('../models')
const {Faculty} = require('../models')

exports.addDep = async(req, res)=>{
    try {
        const {facultyId} = req.params
        const {depName, Hod, dateCreated}=req.body

        const deptSplit = depName.split(" ")

        const formatDepName = deptSplit[0].charAt(0).toUpperCase()+ deptSplit[2].charAt(0).toUpperCase()

        const newCode = await Faculty.findByPk(facultyId)
        console.log(newCode.facultyCode)
        const falCode = newCode.facultyCode
        const depCode = `${falCode}-${formatDepName}`
        console.log(depCode)

        console.log(await Department.findAll())

        const newDep = await Department.create({
            depName,
            depCode,
            Hod,
            facultyId,
            dateCreated
        })
        res.status(201).json({
            message:"student department is created",
            data:newDep
        })
    } catch (error) {
        res.status(500).json({
            message:"something went wrong",
            data: error.message
        })
        console.log(error)


    }
}
exports.findDep = async(req, res)=>{
    try {
        const findDep = await Department.findAll()

        res.status(201).json({
            message:"all department created succesfully",
            data:findDep
        })

    } catch (error) {
        res.status(500).json({
            message:"Something went wrong"
        })
    }
}