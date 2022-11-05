const Cliente = require("../models/clientes.model"); //Me hace el proceso de guardar los datos del model
let response = {
  msg: "",
  exito: false,
};

exports.create = function (req, res) {
  let cliente = new Cliente({
    nombre: req.body.nombre,
    apellidos: req.body.apellidos,
    telefono: req.body.telefono,
    mail: req.body.mail,
    direccion: req.body.direccion,
  });

  cliente.save(function (err) {
    if (err) {
      (console.log = false),
        (response.exito = false),
        (response.msg = "Error al guardar el usuario");
      res.json(response);
      return;
    }

    (response.exito = true),
      (response.msg = "El cliente se guardó correctamente");
    res.json(response);
  });
};


exports.find = function (req, res) {
  Cliente.find(function (err, clientes) {
    res.json(clientes);
  });
};

exports.findOne = function (req, res) {
  // find one --> es traer unida mente un dato por id
  Cliente.findOne({ _id: req.params.id }, function (err, cliente) {
    res.json(cliente);
  });
};

exports.update = function (req, res) {
  let cliente = {
    nombre: req.body.nombre,
    apellidos: req.body.apellidos,
    telefono: req.body.telefono,
    mail: req.body.mail,
    direccion: req.body.direccion,
  };

  Cliente.findByIdAndUpdate(req.params.id, { $set: cliente }, function (err) {
    if (err) {
      console.error(err),
        (response.exito = false),
        (response.msg = "Error al modificar el usuario");
      response.json(response);
      return;
    }

    (response.exito = true),
      (response.msg = "El usuario se modifico correctamente");
    res.json(response);
  });
};


exports.remove = function (req, res) {
  Cliente.findByIdAndRemove({ _id: req.params.id }, function (err) {
    if (err) {
      console.error(err),
        (response.exito = false),
        (response.msg = "Error al eliminar el usuario");
      response.json(response);
      return;
    }

    (response.exito = true),
      (response.msg = "El usuario fue eliminado correctamente");
    res.json(response);
  });
}; 
