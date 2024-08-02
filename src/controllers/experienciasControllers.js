const { Experiencias } = require('../db.js');
//const { Op } = require('sequelize');
//const db = require('./db');
 
async function getProducts(req, res) {
  try {
    const experiecias = await Experiencias.findAll();
    const totalExperiencias = experiecias.length;
    res.json({
      totalExperiencias,
      experiecias: experiecias,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: error.message });
  }
}


async function obtenerExperienciaPorId(req, res) {
  const { id } = req.params;

  try {
    const respuesta = await Experiencias.findByPk(id);
    if (!respuesta) {
      return res.status(404).json({ mensaje: 'Experiecia no encontrada' });
    }

    const {
      nombre,
      nombrein,
      nombrepor,
      imgcard,
      imggaleria,
      imgdetalle,
      texto,
      textoin,
      textopor,
    } = respuesta;

    const experiecias = {
      nombre,
      nombrein,
      nombrepor,
      imgcard,
      imggaleria,
      imgdetalle,
      texto,
      textoin,
      textopor,
    };

    res.json(experiecias);
    console.log(JSON.stringify(respuesta));
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al obtener el experiecias' });
  }
}

const crearProducto = async (req, res) => {
  try {
const { nombre, nombrein, nombrepor, imgcard, imggaleria, imgdetalle, texto, textoin, textopor, presentacion1, presentacion1in, presentacion1por, presentacion2, presentacion2in, presentacion2por, reservaes, reservain, reservapor, textocarruseles, textocarruselin, textocarruselpor } = req.body;

    const newExperiencia = await Experiencias.create({
      nombre,
      nombrein,
      nombrepor,
      imgcard,
      imggaleria,
      imgdetalle,
      texto,
      textoin,
      textopor,
      presentacion1,
      presentacion1in,
      presentacion1por,
      presentacion2,
      presentacion2in,
      presentacion2por,
      reservaes, 
      reservain, 
      reservapor, 
      textocarruseles, 
      textocarruselin, 
      textocarruselpor
    });
    
   console.log(Object.keys(newExperiencia)); 
    res.status(201).json(newExperiencia);
  } catch (error) {
    console.error('Error al crear un nueva experiecias:', error);
    res.status(500).json({ error: 'Error al crear un nueva experiecias:', error});
  }
};

async function traducciones(req, res) {
  try {
    const experiecias = await Experiencias.findAll({
      attributes: ['nombre', 'nombrein', 'nombrepor', 'texto', 'textoin', 'textopor', "presentacion1", "presentacion1in", "presentacion1por", "presentacion2", "presentacion2in", "presentacion2por", "reservaes", "reservain", "reservapor", "textocarruseles", "textocarruselin", "textocarruselpor"], 
    });
    res.json(experiecias);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ mensaje: 'Error al obtener los campos especificos' });
  }
}

async function actualizarExperienciaPorId(req, res) {
  const { id } = req.params;
 
  try {
     // Check if the experience exists
     const experiecia = await Experiencias.findByPk(id);
     if (!experiecia) {
       return res.status(404).json({ mensaje: 'Experiecia no encontrada' });
     }
 
     // Extract the fields to update from the request body
     const {
       nombre,
       nombrein,
       nombrepor,
       imgcard,
       imggaleria,
       imgdetalle,
       texto,
       textoin,
       textopor,
       presentacion1,
       presentacion1in,
       presentacion1por,
       presentacion2,
       presentacion2in,
       presentacion2por,
       reservaes, 
       reservain, 
       reservapor, 
       textocarruseles, 
       textocarruselin, 
       textocarruselpor
     } = req.body;
 
     // Update the experience
     const updatedExperiencia = await Experiencias.update({
       nombre,
       nombrein,
       nombrepor,
       imgcard,
       imggaleria,
       imgdetalle,
       texto,
       textoin,
       textopor,
       presentacion1,
       presentacion1in,
       presentacion1por,
       presentacion2,
       presentacion2in,
       presentacion2por,
       reservaes,
       reservain,
       reservapor,
       textocarruseles,
       textocarruselin, 
       textocarruselpor
     }, {
       where: { id }
     });
 
     if (updatedExperiencia[0] === 0) {
       // No rows were updated, likely because no experience with the given ID exists
       return res.status(404).json({ mensaje: 'Experiecia no encontrada' });
     }
 
     // Return success response
     res.status(200).json({ mensaje: 'Experiecia actualizada exitosamente' });
  } catch (error) {
     console.error(error);
     res.status(500).json({ mensaje: 'Error al actualizar la experiecia' });
  }
 }



module.exports = {getProducts, obtenerExperienciaPorId , crearProducto, traducciones, actualizarExperienciaPorId}