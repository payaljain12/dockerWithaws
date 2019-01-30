//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

/* Requires the things that are to be present in the database 
    id is automatically assigned in the database */
var userSchema = new Schema({
    firstName : {
        type : String,
        required : true
    },
    lastName : String
});

let User = mongoose.model('user', userSchema );
module.exports = User;