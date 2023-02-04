const mongoose = require('mongoose');

// creating a schema
const registerTemplate = new mongoose.Schema({
    // infomation to collect from users when signed up
    fullname: { type: String, require: true },
    username: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    // date record of when a user signed up
    date: { type: Date, default: Date.now }

})

module.exports = mongoose.model('mytable', registerTemplate);