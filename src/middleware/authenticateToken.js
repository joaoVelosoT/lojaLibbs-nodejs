// Importando a biblioteca jwt
const jwt = require("jsonwebtoken");

// Iniciando uma função
function authenticateToken(req,res,next) {
    // Pegando o token enviado pelos headers
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) {
        return res.status(401).json({
            msg : 'Acesso negado'
        })
    }
    
    jwt.verify(token, process.env.SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({
                msg : "Acesso negado"
            })
        }
        // Armazenar usuario no requisição
        req.user = user;

        next();
    });
}


module.exports = authenticateToken;