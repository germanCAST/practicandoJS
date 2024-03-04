//Introduccion---------

-Que es JavaScript?
R: Es uno de los lenguajes más populares

Se puede desarrollar:
Front END - Back END, y/o FullStack
Mobile y Apps de Escritorio
Se pueden trabajar sobre microcontroladores
Frameworks: Vue, Angular, React
Frame work entrega herramientas, muchas herramientas
Libreria se entiende como una sola herramienta para resolver

Que es ECMAScript?
Se hizo para que se ejecutara dentro de los navegadores WEBS
NetScape. ECMA, es para contribuir a estandares tecnologicos

Que es refactorizar?
Es cambiar la esctructura interna sin alterar el comportamiento externo de un sitio WEBs

Variables
Son espacios en memoria
let para declara variables
undefined muestra que la variable a sido creada pero no definida

    la variables no se puede definir con un nombre que empiece con numero, tampoco pueden ser nombradas con palabras reservadas

    ------Convenciones-------
        UpperCamelCase, cada palabra empieza con mayuscula
        camelCase, cada palabra empieza con mayuscula excepto la primera
        snake_case, cada palabra se separa con un guión bajo

(JavaScript se CASE SENSITIVE)

Tipos de datos
Primitivos: se almacenan en Stack
[no expandible]
-Number
-String
-Boolean
-Undefined
-Null
De Referencia: se almacenan en Heap
[expandible ó de referencia]
-Array
-Object
-Functions
-Clases

    (null, es explicitamente nulo)

Tipos de lenguajes

Tipado ESTATICO
string nombre = "Hola";
al momento de definir una variable inmediatamente declaramos su valor.

Tipado DINÁMICO
string nombre;  
nombre = "Hola";
no es necesario que definamos el tipo, y se crea el nombre de la variable

typeof es una palabra reservada para ver el tipo de dato de la variable

null es un tipo nulo, la implemenetacion de null define que typeof devuelve un tipo objeto
0x00

Comentarios en JavaScript
se hacen con //comentario
se puede agregar al final de un linea

Tipos de datos de referencia
{} <---- significa que es un objeto
existen dos manera de referenciar propiedades de un objetos
cual es mejor?
#1. personaje[' edad '] = 16;
#2. personaje.edad = 13;

si no se conoce el nombre usar #2

Expresiones y Declaraciones
conceptos comúnes:
Expressions:Expresiones
Declaration:Declaración oral
Statements:Declaración escrita

    Declaration : Se crea algo que se referencia en un futuro
        -let
        -const
        -vars (no es declaration)-
        -function / function *
        -async function / async function*
        -class
        -export/import
    Statements: Esto no se referencia en un futuro
        -it
        -for
        -else
        -switch
    Expression: Porcion de codigo que evalua en un valor;

    suma de dos numeros -4+6 -> 10
    asignacion de variable -x= 4
    refenciar -miFuncion()

    si no se puede hacer un console.log ----> es una declaracion

    si se puede hacer un console.log ----> es una expresion

con Operadores
-> se pueden crear expresiones
-> se pueden crear algoritmos

Operadores
-Aritmeticos
Se utilizan para hacer op. matematicas
-Asignacion
Se utilizan para hacer op. aritmeticas sin la necesidad de declarar otra variable para operar esta misma variable
-Comparacion
Estos funcionan para comprar variables, metodos, etc. >,<,>=,<=,!= ó ===
-Logicos
|| OR , && AND, ! NOT
-Bitwise
