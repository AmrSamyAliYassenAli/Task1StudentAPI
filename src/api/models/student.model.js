const Mongoose = require("mongoose");
const validator  = require("validator");

const Student = Mongoose.model('Student',{
    student_Id:{
        type:Number,
        unique:true,
        require:[true,'Must have Id']
    },
    name:{
        type:String,
        trim:true,
        lowercase:true,
        required:true,
        minLength:3,
        maxLength:12
    },
	email:{
        type:String,
        required:true,
        lowercase:true,
        unique:true,
        required:true,
        minLength:10,
        maxLength:50,
        validate(value){
            if(!validator.isEmail(value)) throw new Error("Invalid Email")
        }
    },
	password:{
        type:String,
        trim:true,
        required:true
    }
});

module.exports=Student;