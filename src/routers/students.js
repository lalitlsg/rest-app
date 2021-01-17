const express = require("express");
const studentRouter = new express.Router();
const Student = require("../models/students");

//create a new student
studentRouter.post("/students", async (req, res) => {
  try {
    const user = new Student(req.body);
    const data = await user.save();
    res.status(201).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
});

//read a student
studentRouter.get("/students", async (req, res) => {
  try {
    const students = await Student.find({});
    res.status(200).send(students);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = studentRouter;
