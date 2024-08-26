const validateId = (req, res, next) => {
    const { id } = req.params;
  
    if (!id) {
      return res.status(400).json({
        msg: "Parametro faltando",
      });
    }
  
    return next();
  };


  module.exports = validateId;