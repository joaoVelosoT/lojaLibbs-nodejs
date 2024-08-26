const {Router} = require("express")
const ClienteController = require("../controller/ClienteController")
const validateCliente = require("../middleware/ValidateCliente")
const validateId = require("../middleware/ValidateId")
const router = Router()

router.post("/", validateCliente, (req,res)=> {
    ClienteController.create(req,res);
})

router.get("/", (req,res)=> {
    ClienteController.getAll(req,res);
})

router.get("/:id", validateId, (req,res)=> {
    ClienteController.getOne(req,res);
})


router.put("/:id", validateId,validateCliente, (req,res)=> {
    ClienteController.update(req,res)
})


router.delete("/:id", validateId, (req,res)=> {
    ClienteController.delete(req,res)
})


module.exports = router;