const { Router } = require("express");
const jwt = require("jsonwebtoken");
const UserController = require("../controller/UserController");
const { log } = require("console");
const { validateUser, validateUserId } = require("../middleware/ValidateUser");

const router = Router();
<<<<<<< HEAD
const SECRET = "joaov"
router.post("/", validateUser, (req, res) => {
=======

router.post("/", (req, res) => {
>>>>>>> 48ea29f2cdd7532be803a8aadaad96dde552bb08
  UserController.create(req, res);
});

router.get("/", (req, res) => {
  UserController.getAll(req, res);
});

<<<<<<< HEAD
// function verifyJWT(req, res, next){
//   const token = req.headers['x-access-token'];
//   console.log(token);
  
//   jwt.verify(token, SECRET, (err, decoded) => {
//     if(err) return res.status(401).json({
//       msg : "Acesso negado"
//     })

//       req.userId = decoded.userId
//       next()
//   } )
// }

router.get("/:id", validateUserId, (req, res) => {
=======
router.get("/:id", (req, res) => {
>>>>>>> 48ea29f2cdd7532be803a8aadaad96dde552bb08
  UserController.getOne(req, res);
});

router.put("/:id", validateUserId, validateUser,(req, res) => {
  UserController.update(req, res);
});

router.delete("/:id",validateUserId, (req, res) => {
  UserController.delete(req, res);
});

<<<<<<< HEAD
// router.post("/login", (req, res)=> {
//   try {
    
//     const {email, senha} = req.body
//     console.log(email, senha);
    
//     if(email === "admin" && senha === "admin"){
//       const token = jwt.sign({userId : 1}, SECRET, {expiresIn : 300});
//       console.log(token);
      
//       return res.status(200).json({
//         token : token
//       })
//     }else {
//       return res.status(200).json({
//         msg: "senha errada"
//       })
//     }
//   } catch (error) {
//     console.log(error);
    
//     res.status(500).json({
//       msg : "erro"
//     })
//   }
  
// })

module.exports = router;
=======
module.exports = router;
>>>>>>> 48ea29f2cdd7532be803a8aadaad96dde552bb08
