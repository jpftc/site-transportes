const express = require("express");
const app = express();

const homeController = require("./home/HomeController");
const budgetController = require("./budget/BudgetController");

app.use("/", homeController);
app.use("/", budgetController);

app.set("view engine", "ejs");

app.use(express.static("vendor"));

app.listen(3000, (req, res) => {
    console.log("Server is running...");
});