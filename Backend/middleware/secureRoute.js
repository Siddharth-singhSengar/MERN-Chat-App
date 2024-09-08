import jwt from "jsonwebtoken";
import User from "../Models/Users.js";

const secureRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(401).json({ error: "No token, authorization denied" });
    }
    const decoded = jwt.verify(token, process.env.JWT_TOKEN);
    if (!decoded) {
      return res.status(401).json({ error: "Invalid Token" });
    }
    const user = await User.findById(decoded.userId).select("-password");
    if (!user) {
      return res.status(401).json({ error: "No User Found " });
    }
    req.user = user;
    next();
  } catch (error) {
    console.log("Error in SecureRoute: ", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
export default secureRoute;
