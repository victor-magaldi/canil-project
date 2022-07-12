import express from "express"
import dotenv from "dotenv";
import ejs from "ejs";
import path from "path"

dotenv.config()


const app = express()

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"));
app.set("views", path.join(__dirname, "views"));
app.set("views", path.join(__dirname, "views"));


app.get("/", function (req, res) {
  res.render("teste");
});

app.listen(process.env.PORT);
console.log("teste")