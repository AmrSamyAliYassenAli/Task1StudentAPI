const StudentServices = require('../services/student.service');
const ResponseBuilder = require('../Infrastructure/Response/ResponseBuilder');
const StudentValidation = require('../validations/Student.validations');
const ValidationMassages = require('../../config/constants/ValidationMassages');
const StudentModel = require('../models/student.model');

//#region Student CRUD
Get = async(req,res)=>{
    try{
        const id = req.body.id;
        
        if(id<=0){  // GetAll
            const data = await StudentServices.GetAll();
            console.log(`#data ${data}#`);
            if(!data){                
                res.status(404).send(ResponseBuilder.Create(false,ValidationMassages.FaildRetriveData,null));
            }
            else{
                res.status(200).send(ResponseBuilder.Create(true,ValidationMassages.ScessfullyRetrived,data));
            }
        }
        else{ // GetById
            if(StudentValidation.IsValidId(id)){
                res.status(200).send(ResponseBuilder.Create(true,ValidationMassages.ScessfullyRetrived,await StudentServices.GetById(id)));
            }
            else{
                res.status(404).send(ResponseBuilder.Create(false,ValidationMassages.FaildRetriveData+`Student Id:${id} is NotFound`,null));
            }
        }
    }
    catch(error){
        console.log(`###${error}###`);
        res.status(500).send(ResponseBuilder.Create(false,ValidationMassages.FaildLoadingData,error));
    }
}

Manage = async(req,res)=>{
    try{
        console.log(JSON.stringify(req.body));
        if(StudentValidation.IsValidModel(req.body))
        {
            if(req.body.student_Id <= 0){ // Add
                res.status(200).send(ResponseBuilder.Create(true,ValidationMassages.ScessfulyInserted, await StudentServices.Add(req.body)));
            }
            else{ //Update
                res.status(200).send(ResponseBuilder.Create(true,ValidationMassages.ScessfulyUpdated, await StudentServices.Update(req.body.student_Id,req.body)));
                // console.log(`###Update###`);
                // if(await StudentValidation.IsUpdatedModel(req.body)){
                //     res.status(103).send(ResponseBuilder.Create(false,ValidationMassages.IsAlreadyUpdated, req.body));
                // }   
                // else{
                //     res.status(200).send(ResponseBuilder.Create(true,ValidationMassages.ScessfulyUpdated, await StudentServices.Update(req.body.student_Id,req.body)));
                // }                
            }
        }
        else{
            res.status(500).send(ResponseBuilder.Create(false,`Student model ${ValidationMassages.IsNotValidDataModel}`,null));
        }        
    }
    catch(error){
        console.log(`###${error}###`);
        res.status(500).send(ResponseBuilder.Create(false,ValidationMassages.FaildLoadingData,error));
    }
}

Delete = async(req,res)=>{
    try{
        const id = req.body.id;
        if(await StudentValidation.IsValidId(id)){            
            console.log(`#data OK ${await StudentServices.Delete(id)}#`);
            res.status(200).send(ResponseBuilder.Create(true,ValidationMassages.ScessfullyRetrived,await StudentServices.Delete(id)));
        }
        else{
            console.log(`#data Faild#`);
            res.status(404).send(ResponseBuilder.Create(false,ValidationMassages.FaildRetriveData+`Student Id:${id} is NotFound`,null));
        }
    }
    catch(error){
        res.status(500).send(ResponseBuilder.Create(false,ValidationMassages.FaildLoadingData,error));
    }
}

//#endregion


module.exports={
    Get,
    Manage,
    Delete
}