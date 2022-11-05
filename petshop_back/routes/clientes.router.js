const express = require("express");
const router = express.Router();
const clientesController = require("../controllers/clientes.controller"); // llama  a empleados controller


router.post("/", clientesController.create); // Metodo de envio de datos
router.get("/", clientesController.find); // Metodo para obtener datos
router.get("/:id", clientesController.findOne); // Metodo para buscar un id
router.put("/:id", clientesController.update); // Metodo para actualizar dato por id
router.delete("/:id", clientesController.remove); // Metodo para remover por id 

module.exports = router;
