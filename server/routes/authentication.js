
const router = require("express").Router();
const bcrypt = require("bcryptjs");
const { body, validationResult } = require("express-validator");
var jwt = require("jsonwebtoken");

require('dotenv').config();

const secretKey = "your_secret_key";

// Dummy user data
const dummyUserData = {
  "email": process.env.EMAIL,
  "password": process.env.PASSWORD
};

// Middleware to verify JWT token
const fetchuser = (req, res, next) => {
  // Get the user from the jwt token and add id to req object
  const token = req.header("authtoken");
  if (!token) {
    res.status(401).send({ error: "Please authenticate using a valid token" });
  }
  try {
    const data = jwt.verify(token, secretKey);
    req.User = data.User;
    next();
  } catch (error) {
    res.status(401).send({ error: "Please authenticate using a valid token" });
  }
};

router.route("/login").post(async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      if (email === dummyUserData.email && password === dummyUserData.password) {
        
        const data = {
          user: {
            id: 1, 
          },
        };

      const authtoken = jwt.sign(data, secretKey);

      success = true;
      res.json({ success, authtoken });
      }else
      {
        return res.status(400).json({
            error: "Invalid email or password",
            });
      }
    } catch (error) {
      res.json({ email, password });
    }
  }
);


module.exports = router;


