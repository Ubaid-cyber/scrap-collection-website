// 

import jwt from "jsonwebtoken";

const admin = (req, res, next) => {

  try {

    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({
        message: "No token provided"
      });
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.user.role !== "admin") {
      return res.status(403).json({
        message: "Admin access required"
      });
    }

    req.user = decoded.user;
    req.userId = decoded.user.id;

    next();

  } catch (error) {

    res.status(401).json({
      message: "Invalid token"
    });

  }

};

export default admin;