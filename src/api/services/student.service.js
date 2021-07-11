const StudentModel = require('../models/student.model');
const GenerateStudentIDHelper = require('../helpers/AutoGenerateId');

GetAll = async ()=>{
    return await StudentModel.find();
}

GetById = async (id)=>{
    return await StudentModel.find({student_Id : id}).exec();
}

Add = async(model)=>{
    const Data = new StudentModel(model);
    Data.student_Id=GenerateStudentIDHelper.autoIncrement();
    await Data.save();
    return Data;
}

Update = async(id,model)=>{
    return await StudentModel.updateOne({student_Id : id}, {name:model.name, email:model.email, password:model.password});
}

Delete = async(id)=>{
    return await StudentModel.deleteOne({student_Id : id});
}

module.exports={
    GetAll,
    GetById,
    Add,
    Update,
    Delete
}