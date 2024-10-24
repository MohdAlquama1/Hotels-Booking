const mongoose = require('mongoose');

const account = new mongoose.Schema({
    name: String,
    lname: String,
    email: String,
    num: String,
    pass: String,
});

const Account=mongoose.model("Account",account);

module.exports = Account;