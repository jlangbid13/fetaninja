// controllers/userController.js
import bcrypt from 'bcrypt';
import User from '../models/user.js'; // Make sure the path is correct

export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (user && await bcrypt.compare(password, user.password)) {
            res.status(200).json({ message: "Login Successful", user });
        } else {
            res.status(401).json({ message: "Invalid credentials" });
        }
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

export const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            res.status(409).json({ message: "User already exists" });
        } else {
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = new User({ name, email, password: hashedPassword });
            await newUser.save();
            res.status(201).json({ message: "User created", newUser });
        }
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};
