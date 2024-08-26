const validateUser = (req, res, next) => {
  const { nome, email, senha } = req.body;
  if (!nome || !email || !senha) {
    return res.status(400).json({
      msg: "Campos invalidos, revise os dados",
    });
  }

  return next();
};



module.exports = { validateUser };
