import express from 'express';
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';
import cors from 'cors';
import db from './config/Database.js';
import router from './routes/router.js';
dotenv.config();
//jangan lupa tambahin constant
const app = express(); 
try {
    await db.authenticate();
    console.log('Database Connnected...');

} 
catch (error) {
    console.error(error);
}
app.use(cors({credentials: true, origin: 'http://localhost:5173'}));
app.use(cookieParser());
app.use(express.json());
app.use(router);
app.post('/users', (req, res) => {
    res.json ({message: 'User created successfully'})
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('Server running on ${PORT}');
});