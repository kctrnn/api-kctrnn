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

  res.send({
    user: {
      id: updatedUser._id,
      email: updatedUser.email,
      name: updatedUser.name,

      avatarUrl: updatedUser.avatarUrl || "",
      phone: updatedUser.phone || "",
      bio: updatedUser.bio || "",
    },
  });
});

module.exports = router;
