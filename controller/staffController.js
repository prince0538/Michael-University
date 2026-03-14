const {Staff} = require('../models')
const {Faculty} = require('../models')

exports.addStaff = async(req, res) =>{
    try{
        const{facultyId} = req.params
        const { staffName, Gender, qualifications } = req.body

        const staffSplit = staffName.split()

const newStaffName = staffSplit[0].charAt(0).toUpperCase() + staffSplit[2].charAt(0).toUpperCase() + staffSplit[3].charAt(0).toUpperCase()

console.log("this is a new staffName", newStaffName)
const newCode = await Faculty.findByPk(facultyId)
        

        const newStaff = await Staff.create({
            staffName,
            Gender,
            qualifications   
        })

    }
    catch(error){
        res.status(500).json({
            message:"Something went wrong"
        })
        console.log(error.message)

    }
}
