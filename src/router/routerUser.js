const { Router } = require("express");
const jwt = require("jsonwebtoken");
const UserController = require("../controller/UserController");
const { log } = require("console");

const router = Router();

router.post("/", (req, res) => {
  UserController.create(req, res);
});

router.get("/", (req, res) => {
  UserController.getAll(req, res);
});

router.get("/:id", (req, res) => {
  UserController.getOne(req, res);
});

router.put("/:id", (req, res) => {
  UserController.update(req, res);
});

router.delete("/:id", (req, res) => {
  UserController.delete(req, res);
});

module.exports = router;
