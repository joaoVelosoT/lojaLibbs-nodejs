const Product = require("../models/Product");

const ProductController = {
  create: async (req, res) => {
    try {
      const { nome, preco, quantidade, descricao, categoria } = req.body;
      const product = await Product.create({
        nome: nome,
        preco: preco,
        quantidade: quantidade,
        categoria: categoria,
        descricao: descricao,
      });

      res.status(200).json({
        msg: "Produto Criado com Sucesso",
        produto: product,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        msg: "Acione o Suporte",
      });
    }
  },
  getAll: async (req, res) => {
    try {
      const produtos = await Product.findAll();
      res.status(200).json({
        msg: "Produtos Encontrados !",
        produtos: produtos,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        msg: "Acione o Suporte",
      });
    }
  },
  getOne: async (req, res) => {
    try {
      const { id } = req.params;

      const produto = await Product.findByPk(id);

      res.status(200).json({
        msg: "Produto Encontrado",
        produto,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        msg: "Acione o Suporte",
      });
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { nome, preco, quantidade, categoria, descricao } = req.body;
      if (!(await Product.findByPk(id))) {
        res.status(500).json({
          msg: "Produto não encontrado",
        });
      } else {
        Product.update(
          {
            nome: nome,
            preco: preco,
            quantidade: quantidade,
            categoria: categoria,
            descricao: descricao,
          },
          {
            where: { id: id },
          }
        );
        res.status(200).json({
          msg: "Produto atualizado",
        });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({
        msg: "Acione o Suporte",
      });
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;

      const produto = await Product.findByPk(id);
      if (!produto) {
        res.status(500).json({
          msg: "Produto não encontrado",
        });
      } else {
        produto.destroy();
        res.status(200).json({
          msg: "Produto Deletado",
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

module.exports = ProductController;