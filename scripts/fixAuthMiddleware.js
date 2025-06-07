const fs = require("fs");

const content =
`const jwt = require("jsonwebtoken");

module.exports = function(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Access Denied" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(403).json({ error: "Invalid Token" });
  }
};`;

fs.writeFileSync("./middleware/authMiddleware.js", content);
console.log("✅ JWT middleware polished.");
