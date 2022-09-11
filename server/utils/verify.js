import jwt from "jsonwebtoken";
import { createError } from "./error.js";
import dotenv from "dotenv";

dotenv.config();

export const verifyToken = (req,res,next) => {   
    const token = req.headers.token;
    if(token) {
        const accessToken = token.split(' ')[1];
        jwt.verify(accessToken, process.env.SK_ACCESS_TOKEN, (err, user) => {
            if(err) {
                res.status(400).json("token is not valid")
            }
            req.user = user
            next();
        });
    } else {
        res.status(401).json("You are not allowed to access this page");
    }

};

export const verifyUser = (req, res, next) => {
    verifyToken(req,res,next, () => {
        if(req.user.id === req.params.id || req.user.isAdmin) {
            next();
        } else {
            return next(createError(403, "You are not authorized!"))
        }
    })
};

export const verifyAdmin = (req, res, next) => {
    verifyToken(req,res, next, () => {
        if(req.user.isAdmin) {
            next();
        } else {
            return next(createError(403, "You are not authorized!"));
         }
    })
};