# Repaso preguntas L. Mar

## Previo examen visto en clase

**HTML (Estructura y semántica)**

Estas afirmaciones hacen referencia a etiquetas semánticas y atributos de los elementos del documento HTML.

- **main** representa el contenido principal semántico (NO BODY).
- El atributo HTML que indica cómo se envían datos de formulario es **method**. El que define el destino es **action**.

**Flexbox (Módulo de diseño flexible)**

- La propiedad de flexbox que permite que los elementos se reduzcan es **flex-shrink**. La que permite que se hagan más grandes es **flex-grow**.
- La propiedad Flexbox que define el tamaño base inicial es **flex-basis**.
- La propiedad Flexbox que reorganiza visualmente elementos es **order**.

**CSS Grid (Módulo de diseño en cuadrícula)**

- La función Grid que permite tamaños adaptables es **minmax()**.

**Tailwind CSS (Framework de clases utilitarias)**

Afirmaciones que utilizan la sintaxis específica abreviada de este framework.

- En Tailwind, **text-sm** define texto pequeño, **m-4** añade margen. (Clase tailwind margen ext -> **m-algo**).
- padding: **p-algo**.

**Propiedades CSS Estándar (Estilos tradicionales)**

- **Visualización (Display):** display: block (el elemento ocupa la línea completa) y display: inline (el elemento se comporta en línea).
- **border-width** controla el grosor del borde, **border-style** define estilo.
- La prop css que permite cambiar el color del texto es: **color**. La que define el tipo de letra -> **font-family**, y el tamaño fuente -> **font-size**.
- La propiedad CSS que elimina el borde de enfoque de inputs es **outline: none**.
- La pseudo-clase que indica que un enlace está activo es **:active**. La que indica que un enlace fue visitado: **:visited**.
- Propiedad que limita ancho máx de un elem -> **max-width**.
- Prop. controla el ancho -> **width**.
- Prop. que elimina elemento del flujo (ni se ve ni ocupa)-> **display: none**, prop controla visibilidad sin eliminar espacio -> **visibility: hidden**.
- **text-align** centra texto horizontalmente.
- **transform** permite rotaciones.
- Prop CSS añade sombras a cajas y elementos -> **box-shadow**.
- Prop css permite añadir sombras al texto -> **text-shadow**.
- Porp CSS espacio entre caracteres -> **letter-spacing**.
- Prop centra el texto horizontalmente / centra bloque -> **margin: auto** _(Nota: para bloques; para texto en línea se usa text-align)_.
- Prop css define durac de animasao -> **animation-duration**.
- prop define velocidad -> **animation-timing-function**.
- Funcion transform desplaza elementos: horiz -> **translateX()** vertical -> **translateY()**.
- Función CSS escalar elementos -> **scale()**, func hace zoom -> **zoom**.

**Otros (XML / XSD)**

- El componente XSD que restringe valores posibles es **xs:enumeration**

## Test 8

**Tailwind CSS (Conceptos y modificadores del framework)**

- Tailwind es un framework CSS basado en clases utilitarias.
- **hover:bg-blue-500** aplica estilo al pasar el ratón _(el prefijo hover: es propio del motor de Tailwind)_.

**Flexbox (Módulo de diseño flexible)**

- En flex, **justify-center** centra en el eje principal e **items-center** centra en el eje cruzado.

**CSS Grid (Módulo de diseño en cuadrícula)**

- **grid-cols-3** define tres columnas.

**Propiedades CSS Estándar**

Clases de Tailwind que hacen referencia directa a propiedades clásicas de CSS

| **_Clase Tailwind_** | **_Propiedad / Valor en CSS Clásico_**     | **_Lo que hace_**              |
| -------------------- | ------------------------------------------ | ------------------------------ |
| **mt-4**             | **margin-top**                             | Aplica margen superior         |
| **rounded**          | **border-radius**                          | Redondea esquinas              |
| **w-full**           | **width: 100%**                            | Ocupa el ancho completo        |
| **transition**       | **transition**                             | Habilita transiciones          |
| **text-lg**          | **font-size**                              | Define tamaño grande           |
| **font-bold**        | **font-weight**                            | Aplica negrita                 |
| **text-center**      | **text-align**                             | Centra el texto                |
| **overflow-hidden**  | **overflow: hidden**                       | Oculta contenido sobrante      |
| **relative**         | **position: relative**                     | Define posición relativa       |
| **z-10**             | **z-index**                                | Define el orden de apilamiento |
| **max-w-lg**         | **max-width**                              | Limita el ancho máximo         |
| **mx-auto**          | **margin-left: auto + margin-right: auto** | centra horizontalmente         |

## Test 7

Un XML mal formado no puede procesarse correctamente.

El símbolo + indica una o más ocurrencias.

PCDATA representa texto plano dentro de un elemento (sin etiquetas internas).

# REQUIRED indica que el atributo es obligatorio.

El tipo ID asegura unicidad dentro del documento.

IDREF solo se puede usar en atributos en DTD.

EMPTY indica que el elemento no tiene contenido.

ANY permite cualquier tipo de contenido.

? indica que el elemento es opcional.

XSD esquema XML avanzado / lenguaje para definir la estructura de XML.

Un xs:complexType es un elemento con estructura o atributos y permite definir elementos con hijos o atributos.

simpleType define tipos simples sin estructura interna.

@ se usa para seleccionar atributos.

## Test 6

**La propiedad animation aplica una animación definida con @keyframes.**

**animation-name permite indicar el nombre de la animación y vincula el elemento con un bloque @keyframes.**

**animation-direction permite valores como normal, reverse o alternate. alternate reproduce la animación adelante y atrás.**

**animation-fill-mode define cómo se aplican los estilos antes y después.**

**animation-play-state permite valores como running o paused.**

**transform permite aplicar translate, rotate, scale, etc. scale cambia el tamaño del elemento proporcionalmente.**

**transition suaviza cambios entre estados CSS sin @keyframes. transition-duration controla la duración de la transición. transition-property indica qué propiedad cambia.**

**Animate.css es una librería popular de animaciones predefinidas.**

**La** **regla CSS que permite definir una animación es @keyframes (@keyframes define los fotogramas clave de una animación).**

**animation-iteration-count controla el número de repeticiones.**

**animation-timing-function define la curva de velocidad. linear mantiene una velocidad constante**

**La propiedad se usa para rotar un elemento es transform. (ojo).**

**opacity puede cambiar de 0 a 1 para crear fundidos.**

**animation es la propiedad abreviada que combina nombre, duración, delay, etc.**

## Test 5

grid-template-columns define el número y tamaño de las columnas del grid. grid-template-rows define la estructura de filas.

grid-template-areas permite crear layouts declarativos usando nombres de áreas.

**grid-column permite controlar cuántas columnas ocupa un elemento en un grid. grid-row controla la posición o expansión vertical del elemento.**

**minmax() permite establecer un tamaño mínimo y máximo flexible.**

**auto-fit calcula cuántas columnas caben y ajusta las existentes.**

**auto-fill mantiene las columnas del grid aunque no haya suficientes elementos.**

**grid-auto-rows establece el tamaño de las filas generadas automáticamente.**

**place-items es un atajo para justify-items y align-items.**

**align-items controla la alineación vertical de los elementos dentro de las celdas. justify-items controla la alineación horizontal dentro de las celdas.**

**align-content controla la alineación vertical del conjunto del grid.**

**object-fit controla cómo se ajusta la imagen dentro de su contenedor permitiendo que no se deforme. cover llena todo el contenedor recortando la imagen si es necesario.**

**La propiedad :root define variables reutilizables en CSS.  
**

## Test 4

**flex-direction define la dirección del eje principal (row, column, etc.).**

**La propiedad permite que los elementos flex pasen a otra línea si no caben es flex-wrap.**

**La propiedad alinea los elementos en el eje principal es justify-content. align-items controla la alineación de los elementos en el eje transversal.**

flex-grow define cuánto crece un elemento respecto a los demás cuando hay espacio disponible.

flex-shrink define cuánto puede reducirse un elemento cuando no hay suficiente espacio.

**La propiedad que cambia el orden visual de los elementos flex es order. El valor por defecto de order es 0 para todos los elementos.**

**La propiedad añade espacio entre elementos flex sin usar márgenes es gap.**

**La** **propiedad añade una sombra a un elemento es box-shadow.**

La propiedad color define el color del texto en CSS es color.

## Test 3

El selector universal \* se aplica a todos los elementos.

display:block hace que el elemento ocupe toda la línea.

inline-block combina comportamiento en línea con tamaño propio.

text-decoration:none elimina el subrayado.

cursor:pointer cambia el cursor a una mano.

line-height controla el espacio entre líneas.

**height:auto mantiene la proporción permitiendo que una imagen no se deforme.**

**box-sizing:border-box mantiene el tamaño total evitando que el padding aumente el ancho total.**

**outline:none elimina el contorno del navegador.**

**La prop que hace el texto más grueso es: font-weight (controla el grosor del texto).**

## Test 2

**La etiqueta &lt;a&gt; se utiliza para crear enlaces. El atributo href indica la URL del enlace.**

**La etiqueta que se usa para texto en línea sin salto de línea es &lt;span&gt;.**

**&lt;section&gt; agrupa contenido relacionado.**

**&lt;div&gt; agrupa contenido en bloques.**

**&lt;table&gt; define una tabla. &lt;td&gt; define una celda de datos.**

**&lt;form&gt; define un formulario. &lt;label&gt; se usa para describir un campo.**

**El atributo action indica el destino de los datos.**

**&lt;button&gt; crea un botón.**

**&lt;strong&gt; indica importancia semántica. ¡! &lt;em&gt; indica énfasis semántico.**

## Test 1

La propiedad 'color' define el color del texto.

**CSS inline usa el atributo style.**

**CSS interno se escribe dentro de &lt;style&gt;&lt;/style&gt;.**

**La etiqueta que enlaza un archivo CSS externo es &lt;link&gt;, se usa &lt;link rel='stylesheet'&gt;.**

**height:auto conserva la proporción al cambiar el ancho.**

**width:100% expande un input a todo el ancho del contenedor.**

**1rem = font-size del html (relativo al html).**

**El display por defecto de un &lt;p&gt; es block. (¡!ojo)**
