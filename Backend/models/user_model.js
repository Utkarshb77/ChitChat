import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true
    }
},
    {
        timestamps: true,
    }
);

// Ensure the model uses the existing 'users' collection explicitly
const User = mongoose.model("User", userSchema, "users");
export default User;