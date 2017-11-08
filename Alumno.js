var Persona = require('./Persona');

class Alumno extends Persona {
  constructor(nombre,sexo,telefono,matricula, password) {
    super(nombre,sexo,telefono);
    this.matricula = matricula;
    this.password = password;
  }
}

module.exports = Alumno;
