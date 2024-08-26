const { Router } = require("express");
const jwt = require("jsonwebtoken");
const UserController = require("../controller/UserController");
const { log } = require("console");
const User = require("../models/User");
const { validateUser} = require("../middleware/ValidateUser");
const validateId = require("../middleware/ValidateId");

const router = Router();
const SECRET = "joaov";

router.post("/", validateUser, (req, res) => {
  UserController.create(req, res);
});

router.get("/", (req, res) => {
  UserController.getAll(req, res);
});

router.get("/:id", validateId, (req, res) => {
  UserController.getOne(req, res);
});

router.put("/:id", validateId, validateUser, (req, res) => {
  UserController.update(req, res);
});

router.delete("/:id", validateId, (req, res) => {
  UserController.delete(req, res);
});

router.post("/login", (req, res) => {
  UserController.login(req, res);
  // try {
  //   const { email, senha } = req.body;
  //   console.log(email, senha);
  //   if (email === "admin" && senha === "admin") {
  //     const token = jwt.sign({ userId: 1 }, SECRET, { expiresIn: 300 });
  //     console.log(token);
  //     return res.status(200).json({
  //       token: token,
  //     });
  //   } else {
  //     return res.status(200).json({
  //       msg: "senha errada",
  //     });
  //   }
  // } catch (error) {
  //   console.log(error);
  //   res.status(500).json({
  //     msg: "erro",
  //   });
  // }
});

router.post("/comprar", verifyJWT, (req, res) => {
  UserController.comprar(req, res);
});

module.exports = router;

function verifyJWT(req, res, next) {
  console.log(req.headers.authorization);

  const token = req.headers.authorization;
  console.log("token", token);

  jwt.verify(token, "joao12", (err, decoded) => {
    if (err) return res.status(401).end();

    req.userId = decoded.userId;
    next();
  });
}
