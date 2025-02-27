const dotenv = require('dotenv'); 
dotenv.config();
const express = require("express");
const cors = require('cors');   
const aiRoutes = require("./routes/ai.routes");
const app = express();
const cookieParser = require('cookie-parser');
const connectTodb = require('./db/db');
const userRoutes = require("./routes/user.routes");


connectTodb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/ai", aiRoutes);
app.use(cookieParser());

app.get('/',  (req, res) => {
    res.send('Hello World!')
});
app.use("/users", userRoutes);


module.exports = app