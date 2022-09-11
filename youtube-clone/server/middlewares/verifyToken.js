import jwt from "jsonwebtoken";
import { createError } from "../error.js";

export const verifyToken = (req, res, next) => {
    const token = req.cookies.acess_token
    if (!token) return next(createError(401, 'Você não está logado.'))

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return next(createError(403, 'Sua sessão expirou, atualize a página!'))
        req.user = user
    })
}