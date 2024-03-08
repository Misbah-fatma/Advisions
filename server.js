const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { MONGO_URI, SECRET_KEY } = require("./config/keys");
const CourseModel = require("./model/CourseModel");
require('dotenv').config();

// Middleware
app.use("/uploads", express.static("uploads"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use("/auth", require("./routes/authRoute"));
app.use("/", require("./routes/courseRoute"));
app.use("/users", require("./routes/userRoute"));
app.use("/profile", require("./routes/profileRoute"));
app.use("/enroll-course", require("./routes/enrollRoute"));

// Deploy
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
  const path = require('path')
  app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

// Database and server setup
const PORT = process.env.PORT || 5000;

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected...");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(err);
    console.log("Error occurred");
  });

  app.get('/', (req, res) => {
    CourseModel.find({})
    .then(users => res.json(users))
    .catch(err => res.json (err))
}
)
  app.get('/getCourse/:id', (req, res) => { 
    const id = req.params.id;
    CourseModel.findById({_id: id})
    .then( users => res.json(users))
    .catch(err => res.json(err))
 })

app.post("/createCourse", (req, res) =>{
  CourseModel.create(req.body) 
  .then(users => res.json(users))
  .catch(err => res.json(err))
})