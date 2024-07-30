const express = require("express");
const errorHandler = require("./midddleware/errorHandler");
const connectDB = require("./config/dbConnection");
const dotenv= require("dotenv").config();

connectDB();

const app = express();

const port= process.env.PORT || 5000;

app.use(express.json());
app.use("/api/contacts", require("./routes/ContactRoutes"));
app.use("/api/users", require("./routes/userRoutes")); // middleware
app.use(errorHandler);

app.listen(port,()=>{
    console.log(`server runnig on port ${port}`);
})