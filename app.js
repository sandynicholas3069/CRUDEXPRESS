const express = require("express");
const bodyParser = require("body-parser");
const employeeRoutes = require("./routes/employeeRoutes");

const app = express();
app.set("view engine", "ejs");
app.user(bodyParser.urlencoded({ extended: false }));
app.user(employeeRoutes);
app.get("/", (req, res) => res.redirect("/employees"));

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});