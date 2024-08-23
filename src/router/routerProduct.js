const { Router } = require("express");
const ProductController = require("../controller/ProductController");
const { validateProduct, validateProductId } = require("../middleware/ValidateProduct");

const router = Router();

router.post("/", validateProduct, (req, res) => {
  ProductController.create(req, res);
});

router.get("/", (req, res) => {
  ProductController.getAll(req, res);
});

router.get("/:id", validateProductId ,(req, res) => {
  ProductController.getOne(req, res);
});

router.put("/:id",validateProductId, validateProduct, (req, res) => {
  ProductController.update(req, res);
});

router.delete("/:id", validateProductId, (req, res) => {
  ProductController.delete(req, res);
});
module.exports = router;