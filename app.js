const express = require('express');
const app = express();
var Alumno = require('./Alumno');
var Persona = require('./Persona');
var functions = require('./functions.js');
var port = process.env.PORT || 3000;
app.listen(port);

console.log("Servicio node at "+port);

var multi = (a,b) => a * b;
var desicion = (a,b,c) => {
  if(a==1){
    console.log(b+c);
  }else if(a==2){
    console.log(b-c);
  }
}
console.log(" a + b = " + functions.suma(5,6));
console.log(" a * b = " + multi(2,3));
desicion(1,3,2);
desicion(2,3,2);

var Alumnos = [];
for (let i = 0; i < 5; i++) {
  Alumnos.push(new Alumno("Fernando" + i,"Masculino","9515707142","014230005","gibson123H"));
}
var Alumnox = new Alumno("Angel","Masculino","9515707142","014230005","gibson123H");
Alumnos.push(Alumnox);

var Persona = new Persona("X","X","X");

console.log(Persona);
console.log(Alumnox);
console.log(Alumnos);
console.log(Alumnos[1]);

var numbers = [1,2,3,4,5];
for(let item of numbers) {
console.log(item);
};

var letra = "loli";
for (let prop of letra) {
  console.log(prop);
}

function f() { return "afuera"; }
{
  console.log(f()); // 2
  function f() { return "adentro"; }
  console.log(f()); // 2
}
console.log(f()); // 1
