// Import JWT to verify token
import jwt from "jsonwebtoken";

// Middleware to check if user is authenticated
const auth = (req, res, next) => {

  try {

    // Get token from request header
    const authHeader = req.headers.authorization;

    // If token not provided
    if (!authHeader) {
      return res.status(401).json({ message: "No token provided" });
    }

    // Extract token from "Bearer TOKEN"
    const token = authHeader.split(" ")[1];

    // Verify token
    const decoded = jwt.verify(token, "secretkey");

    // Save user id inside request
    req.userId = decoded.id;

    // Continue to next function
    next();

  } catch (error) {

    res.status(401).json({ message: "Invalid token" });

  }

};

export default auth;