const express = require("express");
const app = express();
const routerUser = require("./router/routerUser");
const routerProduct = require("./router/routerProduct");
const sequelize = require("./config/config");
const jwt = "jsonwebtoken";
const router = require("./router/router")

app.use(express.json());
app.use("/api", router);


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