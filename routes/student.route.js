const express = require("express")
const router = express.Router()
let {displayIndex, displaySignUp, getAbout, getDashboard, registerStudent, deleteStudent,sendMail} = require("../controllers/student.controller.js")
router.get("/", displayIndex);
router.get("/signup",displaySignUp)
router.get("/about", getAbout);
router.get("/dashboard",getDashboard)
router.get("/sendMail",sendMail)
router.post("/register",registerStudent)
router.post("/deletestudent",deleteStudent)

module.exports = router