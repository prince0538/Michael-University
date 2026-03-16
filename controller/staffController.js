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
        console.log(faculty.facultyId)


        const newCode = await Faculty.findByPk(facultyId)
        console.log(newCode.facultyCode)
        const falCode = newCode.facultyCode
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