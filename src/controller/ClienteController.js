const Cliente = require("../models/Cliente");

const ClienteController = {
    create : async(req, res) => {
        try {

            const {nome, email, senha, idade, cpf} = req.body;

            const user = await Cliente.create({
                nome : nome,
                email : email,
                senha : senha,
                idade : idade,
                cpf : cpf
            })

            res.status(200).json({
                msg : "Criou pai",
                user
            })
        } catch (error) {
            console.log(error);
            res.status(400).json({
                msg : "Erro pai"
            })
            
        }
    },
    getAll : async(req, res) => {
        try {
            const clientes = await Cliente.findAll();
            res.status(200).json({
                msg : "Clientes encontrados",
                clientes
            })
        } catch (error) {
            console.log(error)
            res.status(400).json({
                msg : "Erro pai"
            })
        }
    },

    getId : async(req,res) => {
        try {
            const {id} = req.params;

            const cliente = await Cliente.findByPk(id);
            res.status(200).json({
                msg : "Cliente encontrado",
                cliente
            })
        } catch (error) {
            console.log(error);
            res.status(400).json({
                msg : "Erro pai"
            })
        }
    },
    update : async(req,res) => {
        try {
            const {nome, email, senha, idade, cpf} = req.body;
            const {id} = req.params;

            const cliente = await Cliente.findByPk(id);
            await cliente.update({nome,email,senha,idade,cpf});

            res.status(200).json({
                msg : "Cliente atualizado com sucesso"
            })
        } catch (error) {
            console.log(error);
            res.status(400).json({
                msg : "Erro pai"
            })
            
        }
    },
    delete : async(req,res) => {
        try {
            const {id} = req.params
            const cliente = await Cliente.findByPk(id);
            await cliente.destroy();
            res.status(200).json({
                msg : "Cliente deletado com sucesso"
            })
        } catch (error) {
            console.error(error)
            res.status(200).json({
                msg : "Erro pai"
            })
        }
    }


}

module.exports = ClienteController;