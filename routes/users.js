const express = require("express");
const router = express.Router();
const verifyToken = require("./verifyToken");
const User = require("../models/User");

// UPDATE ACCOUNT
router.patch("/:userId", verifyToken, async (req, res) => {
  const { userId } = req.params;

  const updatedUser = await User.findByIdAndUpdate(userId, req.body, {
    new: true,
  });

  res.send(updatedUser);
});

module.exports = router;
