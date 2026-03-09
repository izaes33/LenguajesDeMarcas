/* Este código Js está diciendo: Busca en el HTML el DOM (document) donde se 
esté cargando este script (que es en el index), y traeme el elemento cuyo id sea year.
getElementById devuelve el primer elemento que coincida con ese id.
Luego accedemos a su propiedad textContent para cambiar el texto interno.
(textContent es la propiedad texto de este elemento (en este caso no hay nada)) */
document.getElementById("year").textContent = new Date().getFullYear();
/* new Date() crea un objeto fecha con la fecha y hora actual.
getFullYear() extrae el año en formato de 4 dígitos (ej: 2026).
Resultado: el elemento con id="year" mostrará automáticamente el año actual. */


/* Traemos el contenedor a Js para enlazarlo creando una constante que 
guarda una referencia*/
const layer = document.querySelector(".capa-estrellita");
/* querySelector busca en el documento el primer elemento que tenga la clase 
"capa-estrellita" y devuelve el primer elemento que coincida con el selector CSS.
Si no encuentra ninguno, devuelve null. */


/* getElementById selecciona elementos exclusivamente por su ID de forma rápida 
y directa, mientras que querySelector es más versátil, permitiendo seleccionar 
elementos usando cualquier selector CSS (clases, etiquetas, atributos). 
getElementById suele ser más rápido en rendimiento, mientras que querySelector 
ofrece flexibilidad para búsquedas complejas. */


/* Verificamos que el elemento exista antes de continuar.
Esto evita errores si el HTML no contiene esa clase. */
if (layer) {

    /* Es importante limitar el nº de generación de partículas por segundo,
    porque si no le estamos diciendo que ocupe toda la capacidad de recursos
    disponible para generarlas. Para ello, vamos a generar un margen de 
    milisegundos desde que se ha generado una partícula hasta que se genera
    la siguiente*/

    /* Variable para guardar el último momento (en milisegundos)
    en que se creó una estrellita. */
    let last = 0;

    /* Añadimos un "event listener" (escuchador) al objeto window.
    Al escuchador le indicamos el evento "pointermove", el cual 
    se dispara cada vez que el puntero se mueve.
    (funciona tanto para mouse como para pantallas táctiles). */
    window.addEventListener("pointermove", (e) => {
    /* Cuando se dispara un evento en Js lo que ocurre es que Js envía información
    de ese evento en forma de variable de entrada que se capta en (e) para después
    de la flecha ejecutar un trozo de código.
    (A esto se le conoce como "programación orientada a eventos"). */


        // A cotinuación indicamos qué debe ocurrir:

        /* performance.now() devuelve el tiempo actual en milisegundos
        (desde que se cargó la página). */
        const now = performance.now();

        /* Control de frecuencia (throttling):
        Si now (tiempo actual) - last (última vez que he medido esos ms),
        es <30, se sale de la función */
        if (now - last < 30) return;

        // Actualizamos now al tiempo del último evento para que hacer de contador.
        last = now;

        // Creamos un nuevo elemento <div> dinámicamente.
        const s = document.createElement("div");

        // Le asignamos la clase "estrellita"
        s.className = "estrellita";

        // Insertamos el emoji de estrella como contenido del div.
        s.textContent = "✨";

        // Añadimos la nueva estrellita como hijo del elemento "layer".
        // Esto hace que aparezca visualmente en la página.
        layer.appendChild(s);

        //El objetivo de gsap es que haya una transición, por eso .set se refiere al 
        // momento inicial y .to en el momento final
        gsap.set(s, { 
            //El primer parámetro es sobre qué queremos aplicar el gsap, 
        // y el segundo es qué queremos que ocurra
            x: e.clientX,
            y: e.clientY,
            // gsap permite añadir algo que queremos que ocurra en coordenadas x e y
            scale: 1,  // podemos añadir efectos en el momento inicial 
            opcacity: 1,
        })

        //gsap.to es lo que queremos que ocurra en el último momento
        gsap.to(s, {
            y: e.clientY - 50 - Math.random()*30, //establece un rango máximo en el que puede 
            // aparecer la estrellita 
            x: e.clientX + (Math.random()*60 - 30),
            rotation: Math.random() * 180 - 90,
            scale: .2,
            opacity:0,
            duration: .8,
            ease: "power2.out",

            onComplete: () => s.remove()
            //esto elimina los elementos una vez dejan de aparecer para no saturar la web
        })
        

    });

}
