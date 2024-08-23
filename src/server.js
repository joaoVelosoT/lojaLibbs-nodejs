const express = require("express");
const app = express();
const routerUser = require("./router/routerUser");
const routerProduct = require("./router/routerProduct");
const routerCliente = require("./router/routerCliente");
const sequelize = require("./config/config");
const router = require("./router/router");
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
    app.listen(8080, () => {
      console.log("servidor rodando");
    });
  })
  .catch((error) => {
    console.error("Erro ao conectar com o banco de dados: ", error);
  });