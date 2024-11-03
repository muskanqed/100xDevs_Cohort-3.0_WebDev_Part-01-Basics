const mongoose = require("mongoose");
const { string } = require("zod");

mongoose.connect("")

const adminSchema = mongoose.Schema({
    username: String,
    email: { type: String, unique: true },
    password: String
});

const userSchema = mongoose.Schema({
    username: String,
    email: { type: String, unique: true },
    password: String,
    purchasedCourses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'course'
    }]
});

const courseSchema = mongoose.Schema({
    title: String,
    description: String,
    imagelink: string,
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