const validateProduct = (req, res, next)=> {
    const {nome, preco, descricao, quantidade, categoria} = req.body;

    if(!nome || !preco || !descricao || !quantidade || !categoria){
        return res.status(400).json({
            msg : "Campos invalidos, revise os dados"
        })
    }

    return next();
};

const validateProductId = (req, res , next) => {
    const {id} = req.params;

    if(!id) {
        return res.status(409).json({
            msg : "Parametro faltando",
        })
    }

    return next();
};

module.exports = {validateProduct, validateProductId};