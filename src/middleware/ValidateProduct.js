const validateProduct = (req, res, next) => {
  console.log("teste");
  
  const { nome, preco, quantidade, categoria, descricao } = req.body;
  console.log("teste",nome,preco,quantidade,categoria,descricao);
        
  if(!nome || !preco || !quantidade || !categoria || !descricao){
    return res.status(400).json({
        msg : "Campos invalidos, revise os dados"
    })
  }


  return next();
};


module.exports = validateProduct