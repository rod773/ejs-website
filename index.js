import express from "express";
import path from "path";
import { getGlobals } from "common-es";
import fs from "fs";

const { __dirname } = getGlobals(import.meta.url);

const app = express();

app.set("views", path.join(__dirname, "views"));

app.set("view engine", "ejs");

const coursesData = fs.readFileSync("database/courses.json", {
  encoding: "utf8",
  flag: "r",
});

const courses = JSON.parse(coursesData);

console.log(coursesData);

console.log(courses);

app.get("/", (req, res) => {
  res.render("home", {
    description: "Hola Mundo",
    coursesObject: courses,
  });
});

app.listen(8080);

console.log("http://localhost:8080");
