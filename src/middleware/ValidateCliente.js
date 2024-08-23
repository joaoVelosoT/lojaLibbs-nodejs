const validateCliente = (req,res, next) => {
    const {nome, email, senha, idade,cpf} = req.body;

    if(!nome || !email || !senha || !idade || !cpf){
        return res.status(400).json({
            msg : "Campos invalidos, valide os dados"
        })
    }

    return next();
}

const validateClienteId = (req,res,next) => {
    const {id} = req.params;

    if(!id){
        return res.status(400).json({
            msg : "Parametro faltando"
        })
    }

    return next();
}

module.exports = {validateCliente, validateClienteId};