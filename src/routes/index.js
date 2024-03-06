const express = require('express');
const router = express.Router();
const {getProducts, obtenerExperienciaPorId, crearProducto, traducciones, actualizarExperienciaPorId } = require("../controllers/experienciasControllers")


router.get("/experiencias/traducciones" , traducciones)
router.get("/experiencias" , getProducts)
router.get("/experiencias/:id" , obtenerExperienciaPorId)
router.post("/experiencias", crearProducto);
router.put('/experiencias/:id', actualizarExperienciaPorId)

module.exports = router;