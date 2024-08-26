const {Router} = require("express")
const routerUser = require("./routerUser");
const routerProduct = require("./routerProduct");
const routerCliente = require("./routerCliente");
const router = Router();

router.use("/user", routerUser);
router.use("/product", routerProduct);
router.use("/cliente", routerCliente);
module.exports = router