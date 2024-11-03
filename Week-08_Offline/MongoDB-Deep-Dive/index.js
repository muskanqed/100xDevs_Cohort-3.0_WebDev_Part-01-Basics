const express = require("express");
const { adminRouter } = require("./routes/admin");
const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");

const app = express();
app.use(express.json());
app.use('/admin', adminRouter);
app.use('/user', userRouter);
app.use('/course', courseRouter);


const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);

});