//Definiendo un módulo

var exports =module.exports={};
    exports.Addnumber=function(a,b){
        return a +b;
    };

const saludo= require ("./javascript.js")

const mi= new saludo('Mi primer saludo');

console.log(mi.saluda("Santiago",26))
console.log(mi.saludoHolamundo())
console.log('----------------')

//
const mmi= new saludo('Mi segundo saludo');
console.log(mmi.saluda("Sago",256))
console.log(mmi.saludoHolamundo())

console.log("Hola mundo")