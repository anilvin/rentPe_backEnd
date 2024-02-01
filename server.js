require("dotenv").config();
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const passportSetup = require("./passport");
const cookieSession = require("cookie-session")
const authRoute = require("./routes/auth");
// const session = require('express-session');

const app = express();

app.use(cookieSession({
    name: 'session',
    keys: ["cyberwolve"],
    maxAge: 24*60*100, 
  }));

app.use(passport.initialize());
app.use(passport.session());

app.use(cors({
    origin:['http://localhost:3000', 'http://localhost:8080', 'http://localhost:3001'] ,
    methods:"GET,PUT,POST,DELETE",
    credentials:true,
}))

app.use("/auth", authRoute)


const port = process.env.PORT || 8080;

app.listen(port, ()=> console.log(`listening at port ${port}....`))