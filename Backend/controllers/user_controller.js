import User from '../models/user_model.js';
import bcrypt from "bcryptjs";
import createTokenAndSaveCokkie from './jwt/tokengenration.js';

export const signup = async (req, res) => {
    try {
        const { name, email, password, confirmPassword } = req.body;
        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Passwords do not match" });
        }
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already exists" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            name,
            email,
            password: hashedPassword,
        });
        await newUser.save();
        if (newUser) {
            createTokenAndSaveCokkie(newUser._id, res);
            res.status(201).json({
                message: "User created successfully",
                newUser: {
                    _id: newUser._id,
                    name: newUser.name,
                    email: newUser.email,
                },
            });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return res.status(404).json({ message: "User not found" });
        }
        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: "Invalid email or password" });
        }
        createTokenAndSaveCokkie(existingUser._id, res);
        res.status(200).json({
            message: "Login successful",
            existingUser: {
                _id: existingUser._id,
                name: existingUser.name,
                email: existingUser.email
            }
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const logout = (req, res) => {
    try {
        res.clearCookie('jwt', {
            httpOnly: true,
            secure: false,
            sameSite: 'lax',
            path: '/',
        });
        res.status(200).json({ message: "Logout successful" });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
export const getUsers = async (req, res) => {
    try {
        const loggedInUserId = req.user._id;
        const allUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");
        res.status(200).json({ allUsers });
    } catch (error) {
        console.log("Error in getUsers: ", error);
        res.status(500).json({ message: "Error fetching users" });
    }
};
