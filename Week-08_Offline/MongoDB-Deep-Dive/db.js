const mongoose = require("mongoose");

mongoose.connect("")

const adminSchema = mongoose.Schema({
    username: String,
    email: { type: String, unique: true },
    password: String
});

const userSchema = mongoose.Schema({
    username: String,
    email: { type: String, unique: true },
    password: String
});

const courseSchema = mongoose.Schema({
    title: String,
    description: String,
    price: Number
})

const adminModel = mongoose.model('admin', adminSchema);
const userModel = mongoose.model('user', userSchema);
const courseModel = mongoose.model('course', courseSchema);

module.exports = {
    adminModel,
    userModel,
    courseModel
}