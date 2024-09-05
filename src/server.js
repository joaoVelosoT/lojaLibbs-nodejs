require('dotenv').config();

// multer - é um middleware usado para manipular arquivos multipart/form-data, usado para fazer upload de arquivos
// sharp - usado para manipular a imagem  
const express = require("express");
const app = express();
const cors = require('cors')

app.use(cors())
const sequelize = require("./config/config");
const router = require("./router/router");

// npm i jsonwebtoken dotenv bcryptjs
const jwt = "jsonwebtoken";

app.use(express.json());
app.use("/", router);
// app.use("/api/product", routerProduct);
// app.use("/api/cliente", routerCliente);

app.get("/healthcheck", (req, res) => {
  return res.status(200).json({
    msg: "Estamos funcionando",
    alive: true,
  });
});

sequelize
  .authenticate()
  .then(async () => {
    console.log("Conexão estabelecida com sucesso");
    await sequelize.sync();
  })
  .then(async () => {
    app.listen(process.env.PORT == null ? 8080 : process.env.PORT, () => {
      console.log("servidor rodando");
    });
  })
  .catch((error) => {
    console.error("Erro ao conectar com o banco de dados: ", error);
  });