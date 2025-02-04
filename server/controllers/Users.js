import Users from "../models/userModels.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const getUsers = async(req, res) => {
    try {
        const users = await Users.findAll({
            attributes: ['id', 'name', 'email',]
        });
        res.json(users);
    } catch (error) {
        console.log(error);
    }
}
export const Register = async(req, res) => {
    const {name, email, password, confPassword} = req.body;
    if (password !== confPassword) return req.status(400).json({msg: "Confirm Password is not identical to Password"});
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    try {
        await Users.create( {
            name: name,
            email: email,
            password:  hashPassword,
        })
        res.json({msg: "Welcome Cookie! Your account was successfully registered, let your journey begin!"});
    } catch (error) {
        console.log(error);
        req.status (500).json({msg: "Server Error, failed to load request"})
    }
};
// function login()
export const Login = async(req, res) => {
    try {
        // variabel to search user data depending on email address
        const user = await Users.findAll( {
            where: {
                email: req.body.email
            }
        })
        // variabel to match password that user has entered to password in database
        const match = await bcrypt.compare(req.body.password, user[0].password)
        // js response if user's password is incorrect
        if (!match) return res.status(400).json({ msg: "Your password is incorrect, please write something different." });
        const userId = user[0].id;
        const name = user[0].name;
        const email = user[0].email;
        //variabel for access token
        const accessToken = jwt.sign({ userId: userId, name: name, email: email }, process.env.ACCESS_TOKEN_SECRET, { 
            expiresIn: "30s" 
        })
        const refreshToken = jwt.sign({ userId: userId, name: name, email: email }, process.env.REFRESH_TOKEN_SECRET, { 
            expiresIn: "1d" 
        })
        await Users.update({refresh_token: refreshToken}, {where: {
            id: userId
            }
        });
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            secure: true,
            maxAge: 24*60*60*1000,
            secure: true
        });
        //response to client request
        res.json({ accessToken});
    // js response if user's email not recognized
    } catch (error) {
        res.status(404).json({ msg: "Your written email is not recognized, Please write something different." })
    }
}
//function LOGOUT
export const Logout = async(req, res) => {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return res.sendStatus(204);
    const user = await Users.findAll({
        where: {
            refresh_token: refreshToken
        } 
    });
    if (!user[0]) return res.sendStatus(204);
    const userId = user[0];
    await Users.update({refresh_token: null}, {where: {
        id: userId
        }
    });
    res.clearCookie('refreshToken');
    return res.sendStatus(200);
}