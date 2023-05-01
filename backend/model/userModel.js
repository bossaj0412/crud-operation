const mongoose =require('mongoose')

const newUser= new mongoose.Schema({

    name:{
        type:String,
        require:[true,"name is required"],
        maxLength:[25, ' name must be in 25 characters '],
        trim:true

    },

    email:{
        type:String,
        require:[true, " email is required "],
        unique:true
    }

})

module.exports=mongoose.model('user', newUser)