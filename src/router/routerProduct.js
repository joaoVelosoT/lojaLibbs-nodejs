const { Router } = require("express");
const ProductController = require("../controller/ProductController");

const router = Router();

router.post("/", (req, res) => {
  ProductController.create(req, res);
});

router.get("/", (req, res) => {
  ProductController.getAll(req, res);
});

router.get("/:id", (req, res) => {
  ProductController.getOne(req, res);
});

router.put("/:id", (req, res) => {
  ProductController.update(req, res);
});

router.delete("/:id", (req, res) => {
  ProductController.delete(req, res);
});
module.exports = router;