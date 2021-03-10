//-1- Alerta
//alert("Welcome GUEST to My First Blog");

//-2- Variables
var num1, num2;
//string
var nombre = "Randy";
//nombre = prompt("Enter your name:");
//numerico
var age = 20;
//array - arreglo 
var pets = ["Ruso", "Romeo", "Max", "Moly"];
console.log(pets[2]);
//object - objeto
var obj = { color: "White", size: 12 }
//boolean - booleano
var existe = true;
//undefined
var fin;
document.write(fin);
console.log(fin);
//null
var num1 = 20;
var num1 = null;
//NaN - valor invalido
var txt = "Hello";
console.log(txt * 2);

alert("Welcome " + nombre + "!");

//-3- documento.Write()
console.log("Your User is " + nombre + age);
console.log("Status: ONLINE");

//-4- console.log(nombre);
console.log(nombre + " " + age);

//-5- Arreglos
var motos = ["KTM", "Yamaha", "Honda", "Suzuki"];
motos[3] = "Apache";
console.log(motos[3]);
console.log(motos);

//-6- Metodos y propiedades para los Arrays
//propiedad length
console.log("Tienes " + motos.length + " motos");
motos[motos.length] = "Aprilia";
console.log("Tienes " + motos.length + " motos");
//propiedad push - agrega al final
motos.push("Pulsar", "Ducati");
console.log("Tienes " + motos.length + " motos");
//propiedad pop - elimina de ultimo
motos.pop();
console.log("Tienes " + motos.length + " motos");
console.log(motos);
//propiedad concat
var motos2 = ["Ducati", "Kawasaki", "Aprilia"];
var motosaux = motos.concat(motos2);
console.log(motosaux);
//propiedad join
console.log(motos.join(" ; "));
motos2 = motos2.join(" | ");
console.log(motos2);
//metodo ordenamiento 
var ordenarmotos = motosaux.sort();
console.log(ordenarmotos);

//Condiciones: sentencia donde el codigo va poder tomar una decision)
//-7- Ciclo IF 
var mostrar = "comerciales";
//mostrar = prompt("¿Qué marcas de moto quiere ver, comerciales o exclusivas?");
if (mostrar == "comerciales") 
{
    console.log("Exclusivas: " + motos2);
} 
else if (mostrar == "exclusivas")
{
    console.log("Comerciales: " + motos);
}
else
{
    console.log("No has seleccionado ni una. Cargue de nuevo la pagina");
}
//comparacion con el mimso tipo === 
var aux = "3";
if (aux == 3) {
    console.log("True");
}
else
{
    console.log("False");
}

//-8- Ciclo FOR
for (let i = 0; i < (motosaux.length - 5); i++) 
{
    //const element = array[i];
    console.log(motosaux[i] + "!");
}
console.log(motosaux.length);

//-9- Ciclo WHILE
var i = 0;
while (i != 10) 
{    
    document.write(i + "<br>");
    i++;
}

//-10- Ciclo DO WHILE
var suma;
var n1, n2;
do {
    //num1 = prompt("Ingrese primer numero: ");
    //num2 = prompt("Ingrese segundo numero: ");    
    num1 = 7;
    num2 = 8;
    suma = sumatoria(num1, num2);
    document.write("La suma es: " + suma + "<br>");    
    document.write((numMax(num1, num2)) + "<br> <br>");
} while (suma == 10);

//-11- Funciones 
function sumatoria(nu1, nu2)
{
    n1 = parseInt(nu1);
    n2 = parseInt(nu2);    
    console.log("La suma es: " + (n1+n2));    
    return n1+n2;
}
function numMax(n1, n2)
{
    if (n1 > n2)
        return ("El mayor es: " + n1);
    else if (n1 < n2)
        return ("El mayor es: " + n2);
    else 
        return "Son iguales";
}

//-12- Funciones y Formularios
function inputSuma()
{    
    var in1 = document.getElementById("nume1").value;
    var in2 = document.getElementById("nume2").value;
    return parseFloat(in1) + parseFloat(in2);
}

//-13- Scope de JS (ámbito de las variables)
/* (function(){
    //Global - podemos acceder a ellas desde cualquier parte del codigo
    var variableGlobal = "Esta es Global";
    var miFuncion = function()
    {
        var variableLocal = "Esta es Local";
        alert(variableLocal);
        variableGlobal = "Esta es Global, modificada";
        alert(variableGlobal);
    //Local - variables creadas dentro de una funcion, solo pueden 
    //ser accedidas desde su propia funcion o una funcion anidada
        var miFuncionLocal = function()
        {
            //var variableLocal = "Esta es variable local anidada";
            alert(variableLocal);
        }
        miFuncionLocal();
    }
    miFuncion();
    alert(variableGlobal);
    alert(variableLocal);
    alert(miFuncionLocal); 
}())
*/

//-14- Metodos y propiedades para Cadenas de Texto
var texto = "Lamborguini";
//length
var lentxt = texto.length;
console.log(lentxt);
//substring
var lentxt = texto.substring(5);
console.log(lentxt);
//substr
var lentxt = texto.substr(0, 5);
console.log(lentxt);
//indexOf
var lenttxtaux = texto.indexOf("i") + 1;
var lentxt = texto.indexOf("i", lenttxtaux);
console.log(lentxt);
//lastIndexOf
var lentxt = texto.lastIndexOf("a");
console.log(lentxt);
//replace
var lentxt = texto.replace("Lam", "Ferrari");
console.log(lentxt);
//toUpperCase
var lentxt = texto.toUpperCase();
console.log(lentxt);
//toLowerCase
var lentxt = texto.toLocaleLowerCase();
console.log(lentxt);

//-15- Introduccion al DOM (Document Object Model)
//el objetivo es poder acceder a los elementos con JS de forma
//facil. a cualquier elemento y lueo trabajar con el
var elementosP = document.getElementsByTagName("p");
/*
elementosP | elementosP[0] | elementosP[2].innerHTML
elementosP[2].innerHTML = "Just Kidding"
*/
var elementoId = document.getElementById("pruebaP");
//lo mismo que el comentario anterior

//-16- Creando Nodos del DOM 
//crear un elemento h2 y situarlo en algun lugar
// 1. Crear el elemento
var elemento = document.createElement("h2");
// 2. Crear un nodo de texto
var contenido = document.createTextNode("Sistemas DOM");
// 3. Añadir el noto de texto al elemento
elemento.appendChild(contenido);
// 4. Agregar atributos al elemento
elemento.setAttribute("align", "center");
// 5. Agregar el elemento al documento
document.getElementById("carrera").appendChild(elemento);

//-17- Agregando Nodos al DOM 
