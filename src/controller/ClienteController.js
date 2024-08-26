const Cliente = require("../models/Cliente")
const { update } = require("./UserController")

const ClienteController = {
    create : async (req,res) => {
        try {
            const {nome, email, senha, cpf, idade} = req.body
            const cliente = await Cliente.create({nome, email,senha,cpf,idade})

            res.status(200).json({
                msg : "Cliente criado com sucesso",
                cliente
            })
        } catch (error) {
            console.log(error)
            res.status(400).json({
                msg : "Acione o suporte"
            })
        }
    },
    getAll : async (req,res) => {
        try {
            const clientes = await Cliente.findAll();

            res.status(200).json({
                msg : "Clientes encontrados",
                clientes
            })
        } catch (error) {
            console.log(error)
            res.status(400).json({
                msg : "Acione o suporte"
            })
        }
    },
    getOne : async (req,res) => {
        try {
            const {id} = req.params
            const cliente = await Cliente.findByPk(id)
            if (!cliente) {
                return res.status(500).json({
                  msg: "cliente não encontrado",
                });
              }

            res.status(200).json({
                msg : "Cliente encontrado",
                cliente
            })
        } catch (error) {
            console.log(error)
            res.status(400).json({
                msg : "Acione o suporte"
            })
        }
    },
    update : async (req,res) => {
        try {
            const {nome, email, senha, cpf, idade} = req.body
            const {id} = req.params
            const cliente = await Cliente.findByPk(id)
            if (!cliente) {
                return res.status(500).json({
                  msg: "cliente não encontrado",
                });
              }
            await cliente.update({nome, email, senha, cpf, idade})
            
            res.status(200).json({
                msg : "Cliente atualizado",
                cliente
            })

        } catch (error) {
            console.log(error)
            res.status(400).json({
                msg : "Acione o suporte"
            })
        }
    },
    delete : async (req,res) => {
        try {
            const {id} = req.params
            const cliente = await Cliente.findByPk(id);
            if (!cliente) {
                return res.status(500).json({
                  msg: "cliente não encontrado",
                });
              }
            await cliente.destroy()

            res.status(200).json({
                msg : "Cliente deletado",
                cliente
            })
        } catch (error) {
            console.log(error)
            res.status(400).json({
                msg : "Acione o suporte"
            })
        }
    }
}


module.exports = ClienteController;