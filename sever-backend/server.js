//db setup
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const port = 4000;

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

mongoose.connect(
  "mongodb://localhost:27017/logindbs",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Database Connected");
  }
);

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

//Modal
const User = new mongoose.model("User", userSchema);

//Routes
// app.get("/",(req,res)=>{
//     res.send("My data")
// })

app.post("/register", (req, res) => {
  // res.send("My data login")
  const { name, email, password } = req.body;
  User.findOne({ email: email }, (err, user) => {
    if (user) {
      res.send({ message: "User Already Exists" });
    } else {
      const user = new User({
        name,
        email,
        password,
      });
      user.save(
        (err = () => {
          if (err) {
            res.send("error"); 
              } else {
            res.send({ message: "Registered Successfully, Please login" })
          }
        })
      );
    }
  });
});

app.post("/login", (req, res) => {
  //res.send("My data register")
 // console.log(req.body);
 const { email, password } = req.body;
 User.findOne({email:email},(err,user)=>{
     if(user){
         if(password===user.password){
             res.send({message:"user login successfull",user:user})
         }else{
             res.send({message:"password failed to match"})
         }

     }
     else{
         res.send({message:"user not registered yet.Please register"})
     }
 })
});

app.listen(port, () => {
  console.log(`Server at ${port} has been connected`);
});
