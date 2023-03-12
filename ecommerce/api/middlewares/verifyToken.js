import jwt from 'jsonwebtoken'

export const verifyToken = (req, res, next) => {
    const authHeader = req.headers.verifyToken
    if (authHeader) {
        const token = authHeader.split(' ')[1]
        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err) res.status(403).json('Login não validado')
            req.user = user
            next()
        })
    } else {
        res.status(401).json('Você não está autenticado')
    }
}

export const verifyTokenAndAuthorization = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            next()
        } else {
            res.status(403).json('Você não tem autorização para fazer isso')
        }
    })
}

export const verifyTokenAndAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.isAdmin) {
            next()
        } else {
            res.status(403).json('Você não tem autorização para fazer isso')
        }
    })
}