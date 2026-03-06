// // Import Express framework to create the server
// import express from "express";

// // Import mongoose to connect with MongoDB
// import mongoose from "mongoose";

// // Import CORS to allow frontend requests
// import cors from "cors";

// // Import dotenv for environment variables
// import dotenv from "dotenv";

// // Import bcrypt for password hashing
// import bcrypt from "bcrypt";

// // Import JWT for authentication tokens
// import jwt from "jsonwebtoken";

// // middleware
// import auth from "./middleware/auth.js";

// // Import User model
// import User from "./models/User.js";
// //import model user pickup

// import Pickup from "./models/Pickup.js";

// // import admin 
// import admin from "./middleware/admin.js";



// dotenv.config();


// const app = express();



// // ---------- MIDDLEWARE ----------

// // Enable CORS
// app.use(cors());

// // Parse JSON body data
// app.use(express.json());


// // ---------- DATABASE CONNECTION ----------

// // Connect to MongoDB
// mongoose.connect("mongodb://127.0.0.1:27017/modernfaq")
// .then(() => console.log("MongoDB Connected"))
// .catch(err => console.log(err));


// // ---------- FAQ SCHEMA ----------

// const faqSchema = new mongoose.Schema({
//   question: String,
//   answer: String
// });

// const FAQ = mongoose.model("FAQ", faqSchema);


// // ---------- FAQ ROUTES ----------


// // Get all FAQs
// app.get("/api/faqs", async (req, res) => {

//   try {

//     const faqs = await FAQ.find();
//     res.json(faqs);

//   } catch (err) {

//     res.status(500).json({ message: err.message });

//   }

// });


// // Seed FAQ data
// app.get("/api/seed", async (req, res) => {

//   const sampleData = [
//     {
//       question: "What is the MERN stack?",
//       answer: "MERN stands for MongoDB, Express, React, and Node.js."
//     },
//     {
//       question: "How do I update my profile?",
//       answer: "Go to settings and edit profile."
//     },
//     {
//       question: "Is this service free?",
//       answer: "We offer free and premium plans."
//     },
//     {
//       question: "Can I cancel anytime?",
//       answer: "Yes you can cancel anytime."
//     }
//   ];

//   // Remove old FAQ data
//   await FAQ.deleteMany({});

//   // Insert new sample data
//   await FAQ.insertMany(sampleData);

//   res.json({ message: "Database seeded with sample data!" });

// });


// // ---------- SIGNUP ROUTE ----------

// // Register a new user
// app.post("/api/signup", async (req, res) => {

//   try {

//     const { name, email, password } = req.body;

//     // Hash the password before saving
//     const hashedPassword = await bcrypt.hash(password, 10);

//     const user = new User({
//       name,
//       email,
//       password: hashedPassword
//     });

//     // Save user in database
//     await user.save();

//     res.json({ message: "User registered successfully" });

//   } catch (err) {

//     res.status(500).json({ error: err.message });

//   }

// });


// // ---------- LOGIN ROUTE ----------

// // Authenticate user and generate JWT token
// app.post("/api/login", async (req, res) => {

//   try {

//     const { email, password } = req.body;

//     // Find user in database
//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.status(400).json({ message: "User not found" });
//     }

//     // Compare password with hashed password
//     const match = await bcrypt.compare(password, user.password);

//     if (!match) {
//       return res.status(400).json({ message: "Invalid password" });
//     }

//     // Generate JWT token (Payload updated to include user object with role)
//     const token = jwt.sign(
//       { user: { id: user._id, role: user.role } },
//       "secretkey",
//       { expiresIn: "1d" }
//     );

//     // Send login response
//     res.json({
//       message: "Login successful",
//       token: token,
//       user: {
//         id: user._id,
//         name: user.name,
//         email: user.email,
//         role: user.role
//       }
//     });

//   } catch (err) {

//     res.status(500).json({ error: err.message });

//   }

// });
// // Protected route example
// app.get("/api/profile", auth, async (req, res) => {

//   try {

//     const user = await User.findById(req.userId).select("-password");

//     res.json(user);

//   } catch (err) {

//     res.status(500).json({ error: err.message });

//   }

// });

// // Create pickup request
// app.post("/api/pickup", auth, async (req, res) => {

//   try {

//     const { scrapType, weight, address, pickupDate } = req.body;

//     const pickup = new Pickup({
//       userId: req.userId,
//       scrapType,
//       weight,
//       address,
//       pickupDate
//     });

//     await pickup.save();

//     res.json({
//       message: "Pickup request created",
//       pickup
//     });

//   } catch (err) {

//     res.status(500).json({ error: err.message });

//   }

// }); 

// // Get my pickup requests
// app.get("/api/my-requests", auth, async (req, res) => {

//   try {

//     const requests = await Pickup.find({ userId: req.userId });

//     res.json(requests);

//   } catch (err) {

//     res.status(500).json({ error: err.message });

//   }

// });

// // Admin get all pickup requests
// app.get("/api/all-requests", auth, admin, async (req, res) => {

//   try {

//     const requests = await Pickup.find().populate("userId", "name email");

//     res.json(requests);

//   } catch (err) {

//     res.status(500).json({ error: err.message });

//   }

// });

// // Admin update pickup status
// app.put("/api/update-status/:id", auth, admin, async (req, res) => {

//   try {

//     const { status } = req.body;

//     const request = await Pickup.findByIdAndUpdate(
//       req.params.id,
//       { status },
//       { new: true }
//     );

//     res.json(request);

//   } catch (err) {

//     res.status(500).json({ error: err.message });

//   }

// });

// // ---------- START SERVER ----------

// // Start Express server
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });



// Import Express framework
import express from "express";

// Import mongoose to connect MongoDB
import mongoose from "mongoose";

// Import CORS
import cors from "cors";

// Import dotenv
import dotenv from "dotenv";

// Import bcrypt
import bcrypt from "bcrypt";

// Import JWT
import jwt from "jsonwebtoken";

// Import middleware
import auth from "./middleware/auth.js";
import admin from "./middleware/admin.js";

// Import models
import User from "./models/User.js";
import Pickup from "./models/Pickup.js";

// Load environment variables
dotenv.config();

const app = express();

// ---------- PORT ----------
const PORT = process.env.PORT || 5000;

// ---------- MIDDLEWARE ----------

// Enable CORS
app.use(cors());

// Parse JSON body
app.use(express.json());


// ---------- DATABASE CONNECTION ----------

mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log("MongoDB Connected");
})
.catch((err) => {
  console.error("MongoDB connection error:", err);
});


// ---------- FAQ SCHEMA ----------

const faqSchema = new mongoose.Schema({
  question: String,
  answer: String
});

const FAQ = mongoose.model("FAQ", faqSchema);


// ---------- FAQ ROUTES ----------

// Get all FAQs
app.get("/api/faqs", async (req, res) => {
  try {
    const faqs = await FAQ.find();
    res.json(faqs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// Seed FAQ data
app.get("/api/seed", async (req, res) => {

  const sampleData = [
    {
      question: "What is the MERN stack?",
      answer: "MERN stands for MongoDB, Express, React, and Node.js."
    },
    {
      question: "How do I update my profile?",
      answer: "Go to settings and edit profile."
    },
    {
      question: "Is this service free?",
      answer: "We offer free and premium plans."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes you can cancel anytime."
    }
  ];

  try {

    await FAQ.deleteMany({});
    await FAQ.insertMany(sampleData);

    res.json({ message: "Database seeded successfully" });

  } catch (err) {

    res.status(500).json({ message: err.message });

  }

});


// ---------- SIGNUP ----------

app.post("/api/signup", async (req, res) => {

  try {

    const { name, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      password: hashedPassword
    });

    await user.save();

    res.json({ message: "User registered successfully" });

  } catch (err) {

    res.status(500).json({ error: err.message });

  }

});


// ---------- LOGIN ----------

app.post("/api/login", async (req, res) => {

  try {

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(400).json({ message: "Invalid password" });
    }

    const token = jwt.sign(
      { user: { id: user._id, role: user.role } },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });

  } catch (err) {

    res.status(500).json({ error: err.message });

  }

});


// ---------- PROFILE ----------

app.get("/api/profile", auth, async (req, res) => {

  try {

    const user = await User.findById(req.userId).select("-password");

    res.json(user);

  } catch (err) {

    res.status(500).json({ error: err.message });

  }

});


// ---------- CREATE PICKUP ----------

app.post("/api/pickup", auth, async (req, res) => {

  try {

    const { scrapType, weight, address, pickupDate } = req.body;

    const pickup = new Pickup({
      userId: req.userId,
      scrapType,
      weight,
      address,
      pickupDate
    });

    await pickup.save();

    res.json({
      message: "Pickup request created",
      pickup
    });

  } catch (err) {

    res.status(500).json({ error: err.message });

  }

});


// ---------- USER PICKUP REQUESTS ----------

app.get("/api/my-requests", auth, async (req, res) => {

  try {

    const requests = await Pickup.find({ userId: req.userId });

    res.json(requests);

  } catch (err) {

    res.status(500).json({ error: err.message });

  }

});


// ---------- ADMIN ALL REQUESTS ----------

app.get("/api/all-requests", auth, admin, async (req, res) => {

  try {

    const requests = await Pickup.find().populate("userId", "name email");

    res.json(requests);

  } catch (err) {

    res.status(500).json({ error: err.message });

  }

});


// ---------- ADMIN UPDATE STATUS ----------

app.put("/api/update-status/:id", auth, admin, async (req, res) => {

  try {

    const { status } = req.body;

    const request = await Pickup.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    res.json(request);

  } catch (err) {

    res.status(500).json({ error: err.message });

  }

});


// ---------- START SERVER ----------

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

