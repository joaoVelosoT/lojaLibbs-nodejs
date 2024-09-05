const {Router} = require("express");
const routerUser = require("./routerUser");
const routerProduct = require("./routerProduct");
const routerCliente = require("./routerCliente");
const UserController = require("../controller/UserController");
const routerUpload = require("../router/routerUpload")
const authenticateToken = require('../middleware/authenticateToken');
const router = Router();

router.use("/user", routerUser);
router.use("/product", routerProduct);
router.use("/cliente", routerCliente);
router.use('/image', routerUpload)

router.post("/login", (req,res) => {
    UserController.login(req,res);
})

module.exports = router;