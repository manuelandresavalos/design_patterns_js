// Visto en: https://www.pensemosweb.com/patrones-de-diseno-en-javascript-singleton-factory/

//EJEMPLO COMO UN MODULO
let config = (function() {
  let instance;

  // Crear propiedades y funciones privadas, estos tambien tendran acceso
  // a el objeto instance
  function privada() {
    return `Soy una funcion privada y tengo acceso a instancia gracias a closure. ${instance.nombre}`;
  }
  // al final config sera igual a esta funcion que regresamos
  return function() {
    // si instancia ya existe, solo regresamos su referencia y todo el codigo de mas abajo deja de ejecutarse
    // Esta es la CLAVE del singleton.
    if (typeof instance === 'object') {
      return instance;
    }
    
    // Estas lineas solo se ejecutan una vez cuando la instancia del singleton aun no es creada
    instance = {
        nombre: 'Pensemosweb',
        seo: {
          descripcion: {
            limiteCaracteres: 155,
            limitePalabras: 23
          },
          titulo: {
            limiteCaracteres: 70,
            limitePalabras: 9
          }
        }
    };

    // Agregar propiedades y metodos publicos
    instance.metodoPublico = function() {
			console.log("Soy un metodo publico que llama a un metodo privado");
      console.log(privada());
    };

    return instance;
  };
}());

let confA = new config();
let confB = new config();


confA.metodoPublico();
confB.metodoPublico();
console.log(confA === confB);

/*
	Podemos cambiar propiedades en confA y lo vemos reflejado en confB porque 
	son el mismo objeto, solo que están en dos referencias distintas.
	Eso es un singleton.
*/

console.log(confA.nombre = "mavalos");
console.log(confB.nombre);