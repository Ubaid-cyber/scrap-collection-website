// /** * FILE: server/src/middleware/admin.js
//  * PURPOSE: Verifies admin role using ES Module export.
//  * FIX: Added 'export default' to match your server.js import style.
// **/
// import jwt from 'jsonwebtoken';

// const admin = (req, res, next) => {
//     // 1. Get token from header
//     const token = req.header('x-auth-token');

//     if (!token) {
//         return res.status(401).json({ 
//             message: "Access Denied. No token provided." 
//         });
//     }

//     try {
//         // 2. Verify token (Changed to match "secretkey" used in server.js)
//         const decoded = jwt.verify(token, "secretkey"); 
        
//         // 3. Check role (Checking decoded.user.role as per server.js payload)
//         if (decoded.user.role !== 'admin') {
//             return res.status(403).json({ 
//                 message: "Unauthorized. Admin access required." 
//             });
//         }

//         // Attach user data to request
//         req.user = decoded.user;
//         req.userId = decoded.user.id; 
        
//         next();
//     } catch (err) {
//         res.status(401).json({ 
//             message: "Token is not valid or expired." 
//         });
//     }
// };

// // IMPORTANT: Match this with 'import admin from...' in server.js
// export default admin;

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