const { Router } = require("express");
const ProductController = require("../controller/ProductController");
const  validateProduct  = require("../middleware/ValidateProduct");
const validateId = require("../middleware/ValidateId");

const router = Router();

router.post("/", validateProduct,  (req, res) => {
  ProductController.create(req, res);
});

router.get("/", (req, res) => {
  ProductController.getAll(req, res);
});

router.get("/:id", validateId, (req, res) => {
  ProductController.getOne(req, res);
});

router.put("/:id", validateId, validateProduct,(req, res) => {
  ProductController.update(req, res);
});

router.delete("/:id", validateId, (req, res) => {
  ProductController.delete(req, res);
});
module.exports = router;