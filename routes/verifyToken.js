const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) return res.status(401).send("Access denied");

  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    // console.log(verified);
    // { _id: '60ed3dc306bc332714047669', iat: 1626275518 }

    req.user = verified;

    next();
  } catch (err) {
    res.status(400).send("Invalid token");
  }
};

module.exports = verifyToken;
