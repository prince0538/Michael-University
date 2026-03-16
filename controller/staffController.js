const {Staff} = require('../models')
const {Faculty} = require('../models')

// exports.addStaff = async(req, res) =>{
//     try{
//         const{facultyId} = req.params
//         const { staffName, Gender, qualifications } = req.body

//         const staffSplit = staffName.split(" ")

//         const newStaffName = staffSplit[0].charAt(0).toUpperCase() + staffSplit[2].charAt(0).toUpperCase() + staffSplit[3].charAt(0).toUpperCase()
//         console.log(newStaff)

//         console.log("this is a new staffName", newStaffName)
//     // const newCode = await Faculty.findByPk(facultyId)
//     // console.log(newCode)

//     const news = await findByPk({facultyId})
//     console.log(news)
        

//         // const newStaff = await Staff.create({
//         //     staffName,
//         //     Gender,
//         //     qualifications   
//         // })

//     }
//     catch(error){
//         res.status(500).json({
//             message:"Something went wrong"
//         })
//         console.log(error.message)

// }
// }

// exports.addStaff = async(req, res) => 
//     {
//     try {

//         const { facultyId } = req.params
//         const { staffName, Gender, qualifications } = req.body

//         console.log("Faculty ID:", facultyId)
//         console.log("Staff Name:", staffName)
//         console.log("Gender:", Gender)
//         console.log("Qualification:", qualifications)

//         const staffSplit = staffName.split(" ")

//         const newStaffName =
//             staffSplit[0].charAt(0).toUpperCase() +
//             staffSplit[1].charAt(0).toUpperCase()

//         console.log("Generated Staff Code:", newStaffName)

//         res.status(200).json({
//             message: "Postman request successful"
//         })

//     } catch(error) {

//         console.log(error.message)

//         res.status(500).json({
//             message:"Something went wrong"
//         })
//     }
// }

exports.addStaff = async(req, res) =>{
    try{
        const { facultyId } = req.params;
        const {StaffName,Gender,qualifications } = req.body

        const faculty = await Faculty.findByPk(facultyId)
        const falcode = faculty.facultyCode
        const depCode = `${falCode}-${formatDepName}`
        console.log(depCode)
        res.status(200).json({
            message: "this is working",
            data: faculty
        })

    }
    catch(error){
        res.status(500).json({
            message: "there is something wrong",
            data: error.message
        })

    }
}


exports.createStaff = async (req, res) => {
    try {
        const {facultyId} = req.params;
        const { staffName, gender, qualification } = req.body;

        // find facultyCode by parsed id
        const checkFalCode = await facultyTable.findByPk(facultyId)
        const falCode = checkFalCode.facultyCode

        
        console.log(staffCode)

        const newStaff = await staffTable.create({
            staffName,
            gender,
            qualification,
            facultyId,
            staffCode,
            dateJoined
        });

        res.status(201).json({
            message: 'Staff created successfully',
            data: newStaff
        })
    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            mesage: "Something went wrong"
        })
    }
}

exports.getAllStaff = async (req, res) => {
    try {
        const allStaff = await Staff.findAll()

        res.status(200).json({
            message: "Fetched all Staffs successfully",
            data: allStaff
        })
    } catch (error) {
        console.log(error.message),
        res.status(500).json({
            message:"Something went wrong"
        })
    }
}

exports.updateStaff = async (req, res) => {
    try {
        const { staffId } = req.params
        const { staffName, gender, qualification } = req.body
        // console.log(staffId)

        const findStaff = await Staff.findByPk(staffId)
        // console.log(findStaff)

        if (!findStaff) {
            return res.status(404).json({
                message: "Staff with this Id does not exist"
            })
        }

        const updatedStaff = { 
                staffName: staffName || findStaff.staffName ,
                gender: gender || findStaff.gender ,
                qualification: qualification || findStaff.qualification  ,
                facultyId: findStaff.facultyId,
                staffCode: findStaff.staffCode,
                dateJoined: findStaff.dateJoined
        }

        const updatstaff = await staffTable.update(updatedStaff, {
            where: {
                staffId: staffId
            }
        })


        res.status(200).json({
            message: "Staff Info Updated successfully",
            data: updatstaff
        })

    } catch (error) {
        console.log(error.message),
        res.status(500).json({
            message:"Something went wrong"
        })
    }
}

exports.deleteStaff = async (req, res) => {
    try {
        const { staffId } = req.params

        const findStaff = await Staff.findByPk(staffId)

        if (!findStaff) {
            return res.status(404).json({
                message: "Staff with Id not found"
            })
        }

        await staffTable.destroy({
            where:{
                staffId: staffId
            }
        })

        res.status(200).json({
            message:" Staff deleted sucessfully"
        })
    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            message:"Something went wrong"
        })
    }
}
