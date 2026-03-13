const staff = require('../models')
const faculty = require('../models')

exports.addStaff = async(req, res) =>{
    try{
        const{id} = req.params
        const { StaffName, staffCode, Gender, qualifications } = req.body

        

        const newStaff = await staff.create({
            staffName,
            staffCode,
            Gender,
            qualifications   
        })

    }
    catch(error){
        res.status(500).json({
            message:"Something went wrong"
        })
        console.log(error)

    }
}
