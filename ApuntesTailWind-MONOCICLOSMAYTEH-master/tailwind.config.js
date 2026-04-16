/* Este archivo es necesario cuando instalamos Tailwind mediante cdn para que el plugin Tailwind CSS IntelliSense 
linkee el proyecto. Además, al aplicarlo se aplica un "preflight" que quita los estilos por defecto del navegador
(por ejemplo, los puntitos antes de los <li> de una <ul>).  */

/*Tailwind, al igual que Bootstrap, es un FRAMEWORK Y NO UNA LIBRERÍA.
La diferencia entre framework y librería es que una librería se compone de clases sueltas a las que podemos llamar
... 
y un framework da una estructura completa a la hora de trabajar (no sólo condiciona con dar cosas ya hechas
como pueden ser las herramientas sueltas que da cualquier librería de Java), dando un entorno y un sistema con 
orden y estructura y definiendo reglas

Tailwind es un framework para css que nos va a permitir hacer el diseño de interfaces con css de forma
más rápida, se dice que es "Utility First", que significa que a fiferencia de Bootstrap, que utilizaba una forma 
de reutilizar más "a lo gordo" (donde por ejemplo podemos tener un tipo de botones btn-primary, btn-tal..., y ahí ya 
se colocaría por defecto un tipo de botón), en Tailwind no tenemos elementos tan grandes, sino que vamos a características 
más pequeñas, yendo al detalle. Entonces, cada clase Tailwind que utilicemos es una propiedad y no un elemento al completo,
facilitando mucho cosas como el diseño responsive, el desarrollo mediante IA.

Para hacer la instalación, al igual que cualquier otro framework, se puede hacer dentro de nuestro proyecto, o por cdn,
(para aprender vale con cdn, pero en producción es mejor meterlo dentro del propio backend)

A la hora de diseñar, en ocasiones será conveniente usar css directo, en otras ocasiones tailwind o bootstrap,
y otras la combinación de css directo + tailwind/bootstrap. Uno de los aspectos a tener en cuenta aquí es que 
las páginas creadas únicamente con tailwind o bootstrap serán muy pareceidas y no tendrán apenas un diseño 
diferencial corporativo, por otro lado, un diseño con css directo ser más difícil de mantener
debido a su nivel bajo de abstracción (en el que hay que indicarle todo desde cero) y un diseño con tailwind
hace un html muy verboso, y difícil de leer y por lo tanto de mantener. 

Toda la parte de diseño de diseño de tailwind se hace mediante nombres de clase en la hoja html, lo que como puntos en contra
produce un html más verboso y menos legible. Tailwind tiene clases para casi cualquier propiedad y disparador-metaclase css.


En las etiquetas semánticas principales (header, body...) nos vamos a limitar a aplicar estilos NO ESTRUCTURALES. 
*/