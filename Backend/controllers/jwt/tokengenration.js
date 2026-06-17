import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const createTokenAndSaveCokkie = (userId , res) =>{
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '5d' });
    res.cookie('jwt', token, { httpOnly: true, secure: false, sameSite: 'lax', maxAge: 77700000 });
}

export default createTokenAndSaveCokkie;