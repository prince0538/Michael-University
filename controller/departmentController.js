const department = require('../models')

exports.createDep = async(req, res)=>{
    try {
        const {depName,depCode,Hod}=req.body

        formatDepName = depName.charAt(0).toUpperCase()+depName.slice(1)

        const newDep = await department.create({
            depName,
            depCode,
            Hod
        })
        res.status(201).json({
            message:"student department is created",
            data:newDep
        })
    } catch (error) {
        res.staus(500).json({
            message:"something went wrong"
        })


    }
}