// Visto en: https://www.pensemosweb.com/patrones-de-diseno-en-javascript-singleton-factory/

/*
	En Javascript es muy fácil utilizar este patrón, 
	tan fácil como crear un objeto literal, 
	por ejemplo supongamos que tenemos una configuración 
	para el numero de caracteres y palabras que se muestran 
	en un sitio web optimizado para buscadores.

	Un simple objeto de configuración es un singleton, 
	pues en toda la app se va hacer referencia al objeto config
	y nunca se va a crear un nuevo objeto de configuración. 
	Se puede extender esa configuración añadiendo mas propiedades.
*/

//EJEMPLO COMO UN OBJETO LITERAL
let config = {
  name: 'Pensemosweb',
  site: {
    title: {
      characterLimit: 150,
      wordsLimit: 23
    },
    content: {
      characterLimit: 255,
      wordsLimit: 60
    },
    langs:['es_es','es_cl','en_us','pt_br']
  }
};

/*
	Para utilizar este singleton no necesitamos instanciarlo,
	lo utilizamos tal cual esta creado.
*/
console.log(config.site.title);


/*
	Si intentamos instanciarlo, nos devolverá un error:
*/

var config1 = new config(); //-> Uncaught TypeError: config is not a constructor
