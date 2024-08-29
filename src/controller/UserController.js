const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")
const UserController = {

  login : async(req,res) => {
    try {
        const {email, senha} = req.body;

        const user = await User.findOne({ where : {email}})

        if (!user){
          return res.status(400).json({
            msg : 'Email ou senha incorretos'
          })
        }

        const isValida = await bcrypt.compare(senha, user.senha)

        if(!isValida){
          return res.status(400).json({
            msg : 'Email ou senha incorretos'
          })
        }

        const token = jwt.sign({
          email : user.email,
          name : user.nome
          }, process.env.SECRET, { expiresIn : "1h"});

          return res.status(200).json({
            msg : 'Login realizado',
            token
          })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
          msg: "Acione o Suporte",
        });
    }
  },
  create: async (req, res) => {
    try {
      const { nome, email, senha } = req.body;
      const hashSenha = await bcrypt.hash(senha, 10);

      const userCriado = await User.create({ nome, senha: hashSenha, email });

      res.status(200).json({
        msg: "User Criado com Sucesso !!",
        user: userCriado,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        msg: "Acione o Suporte",
      });
    }
  },
  getAll: async (req, res) => {
    try {
      const usuarios = await User.findAll();

      res.status(200).json({
        msg: "Usuarios Encontrados !",
        usuarios,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        msg: "Acione o Suporte",
      });
    }
  },
  getOne: async (req, res) => {
    try {
      const { id } = req.params;

      const usuario = await User.findByPk(id);

      if (!usuario) {
        return res.status(500).json({
          msg: "Usuario não encontrado",
        });
      } else {
        res.status(200).json({
          msg: "Usuario Encontrado",
          Usuario: usuario,
        });
      }
    } catch (error) {
      return res.status(500).json({
        msg: "Acione o Suporte",
      });
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { nome, email, senha } = req.body;
      if (!(await User.findByPk(id))) {
        res.status(500).json({
          msg: "Usuario não encontrado",
        });
      } else {
        const user = await User.update(
          {
            nome,
            email,
            senha,
          },
          {
            where: { id: id },
          }
        );
        res.status(200).json({
          msg: "User Atualizado com Sucesso !",
        });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        msg: "Acione o Suporte",
      });
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(500).json({
          msg: "O Usuario não foi encontrado",
        });
      } else {
        user.destroy();
        res.status(200).json({
          msg: "User Deletado com Sucesso !",
        });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({
        msg: "Acione o Suporte",
      });
    }
  },
};
module.exports = UserController;