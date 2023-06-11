

/*var request = require("request");

request("http://www.google.com", function(error,response, body){
    console.log(body)
})
*/
//Definiendo un módulo


//Utilizando require para incluir el módulo de adición
//var Addition=require('./Addition.js');

//Llamar a la funcion Addnumber en nuestro módulo
//console.log(Addition.Addnumber(40,25))
    
class saludo{

    constructor(name){
        this.name= name;

    }
    saluda(nombre2,edad){
        return `Hola mi nombre es ${nombre2}  mi edad es ${edad}`;
    }
    saludoHolamundo(){
        return `Hola mundo ${this.name}`;
    }


}
module.exports = saludo;
console.log("Hola mundo")

