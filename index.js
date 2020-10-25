const express = require("express");
const app = express();

const homeController = require("./home/HomeController");
const budgetController = require("./budget/BudgetController");
const pageController = require("./pages/PagesController");
const linksController = require("./links/LinksController");

app.use("/", homeController);
app.use("/", budgetController);
app.use("/", pageController);
app.use("/", linksController);

app.set("view engine", "ejs");

app.use(express.static("vendor"));

app.listen(3000, (req, res) => {
    console.log("Server is running...");
});