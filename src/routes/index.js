const express = require('express');
const router = express.Router();
const {getProducts, obtenerExperienciaPorId, crearProducto, traducciones } = require("../controllers/experienciasControllers")


router.get("/experiencias/traducciones" , traducciones)
router.get("/experiencias" , getProducts)
router.get("/experiencias/:id" , obtenerExperienciaPorId)
router.post("/experiencias", crearProducto);

module.exports = router;