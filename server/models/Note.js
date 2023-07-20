const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const NotesSchema = new Schema({
    
    Name :{
        type : String,
        required : true
    },
    Gender :{
        type : String,
        required : true,
    },
    Company :{
        type : String,
        required : true,
    },
    Salary:{
        type : String,
        required : true,
    }
})

module.exports = mongoose.model('Placements',NotesSchema);