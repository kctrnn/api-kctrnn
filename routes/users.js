const express = require("express");
const router = express.Router();
const verifyToken = require("./verifyToken");
const User = require("../models/User");
const bcrypt = require("bcrypt");

// UPDATE ACCOUNT
router.patch("/:userId", verifyToken, async (req, res) => {
  const { userId } = req.params;
  const { password } = req.body;

  if (password) {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    req.body.password = hashPassword;
  }

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

router.get("/:userId", verifyToken, async (req, res) => {
  const { userId } = req.params;

  const user = await User.findById(userId);

  res.send({
    user: {
      id: user._id,
      email: user.email,
      name: user.name,

      avatarUrl: user.avatarUrl || "",
      phone: user.phone || "",
      bio: user.bio || "",
    },
  });
});

module.exports = router;
