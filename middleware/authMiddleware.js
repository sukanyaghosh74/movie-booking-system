const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) return res.status(401).json({ error: "Access denied" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json({ error: "Invalid token" });
  }
};
const roleAuth = (role) => (req, res, next) => {
    if (req.user.role !== role) {
      return res.status(403).json({ error: "Access forbidden: Insufficient permissions" });
    }
    next();
  };
  
  module.exports = { auth, roleAuth };  

module.exports = auth;
