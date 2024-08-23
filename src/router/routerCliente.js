const {Router} = require("express");
const router =  Router();
const ClienteController = require("../controller/ClienteController");
const { validateCliente, validateClienteId } = require("../middleware/ValidateCliente");



router.post("/", validateCliente, (req,res) => {
    ClienteController.create(req, res);
    //create
});

router.get("/", (req,res) => {
    ClienteController.getAll(req,res);
    //getAll
});

router.get("/:id", validateClienteId, (req,res) => {
    ClienteController.getId(req, res);
    //getId
});

router.put("/:id", validateClienteId, validateCliente, (req,res) => {
    ClienteController.update(req, res);
    //update
});

router.delete("/:id", validateClienteId, (req,res) => {
    ClienteController.delete(req,res);
});



module.exports = router;