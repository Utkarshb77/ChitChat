import user from '../models/user_model.js';
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
    try {
        const { name, email, password, confirmPassword } = req.body;
        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Passwords do not match" });
        }
        const existingUser = await user.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already exists" });
        }
        const hashedPassword = await bcrypt.hash(password, 17);
        const newUser = new user({
            name,
            email,
            password: hashedPassword,
        });
        await newUser.save();
        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};