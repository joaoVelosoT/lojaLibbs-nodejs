const validateCliente = (req,res,next) => {
    const {nome, email, senha, cpf, idade} = req.body
    if(!nome || !email || !senha || !cpf || !idade){
        return res.status(400).json({
            msg : "Campos invalidos, revise os dados"
        })
    }
    return next()
}



module.exports = validateCliente