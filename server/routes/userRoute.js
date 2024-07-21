const express = require("express");
const router = express.Router();
const {getUserProfile,updateUserProfile} = require('../controller/userController');
const authMiddleware = require("../middleware/auth");
const { forgotPassword } = require("../controller/authController");




// update users
router.put("/update-profile",authMiddleware, updateUserProfile);
router.get('/profile', authMiddleware, getUserProfile);



module.exports = router