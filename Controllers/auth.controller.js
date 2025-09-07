const User = require("../Models/user.model"); // adjust path if needed
const jwt = require("jsonwebtoken");

// 🔑 Helper to generate JWT
const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, email: user.email, role: user.role },
    process.env.JWT_SECRET || "defaultSecretKey123", // fallback secret
    { expiresIn: "1d" }
  );
};


// ========================= REGISTER =========================
const registerUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body; // ✅ role

    const existingUser = await User.findOne({ email, role: role });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const newUser = new User({ name, email, password, role }); // ✅ role
    await newUser.save();

    const token = generateToken(newUser);

    res.status(201).json({
      message: "Registration successful",
      user: newUser,
      token,
    });
  } catch (error) {
    console.error("Register Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// ========================= LOGIN =========================
const loginUser = async (req, res) => {
  try {
    const { email, password,role } = req.body;

    const user = await User.findOne({ email, role: role });

    if (!user || !user.password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = generateToken(user);

    res.status(200).json({
      message: "Login successful",
      user,
      token,
    });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// ========================= GOOGLE SIGNUP =========================
const googleSignup = async (req, res) => {
  try {
    const { email, name, picture, googleId, role } = req.body; // from frontend

    if (!role) {
      return res.status(400).json({ message: "Role is required" });
    }

    // Check if user already exists with same role
    const existingUser = await User.findOne({ googleId, role });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists. Please login." });
    }

    const newUser = new User({
      name,
      email,
      googleId,
      picture,
      role,
      password: null
    });

    await newUser.save();

    // ❌ Do NOT log them in directly here
    res.status(201).json({ message: "Signup successful. Please login now." });
  } catch (error) {
    console.error("Google Signup Error:", error);
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
};


// ========================= GOOGLE LOGIN =========================
const googleLogin = async (req, res) => {
  try {
    const { email, googleId, role } = req.body;

    const existingUser = await User.findOne({ googleId, role });
    if (!existingUser) {
      return res.status(400).json({ message: "User not found. Please signup first." });
    }

    // ✅ Create JWT token here
    const token = jwt.sign(
      { id: existingUser._id, email: existingUser.email, role: existingUser.role },
      "super_secret_key",  
      { expiresIn: "1h" }
    );

    res.status(200).json({
      message: "Login successful",
      token,
      user: existingUser
    });
  } catch (error) {
    console.error("Google Login Error:", error);
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
};


module.exports = {
  registerUser,
  loginUser,
  googleSignup,
  googleLogin,
};
