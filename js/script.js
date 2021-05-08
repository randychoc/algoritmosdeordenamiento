
//pedimos cuantos numeros generar
var cantidadAle = 0;
function cantAle()
{
    cantidadAle = prompt("¿CUÁNTOS NÚMEROS DESEA GENERAR?", "");
    alert("CANTIDAD A GENERAR: " + cantidadAle);
    return cantidadAle;
}

//nuevo ordenamiento, todo desde cero
function nuevoBur()
{    
    document.getElementById("pilas").innerHTML= "";
    //limpiarDiv.textContent = ("");
    //limpiarDiv.style.clear();
    //limpiarDiv.innerHTML = ("");
    incP = 0;
    listaAle = [];   
    
    lista = [];
    listaAle = [];         
    nBur = 0; //cantidad de datos en el arreglo
    auxBur = []; //variable temporal para lista
    contadorDivBur = 1;    
    listaPBur = [];      
    largoauxBur = 0;   
    contaauxBur = 0; 
    aumBur = 0; 
    listaauxBur = 0;     
    listaMaximo = 0;
    listaMinimo = 0;    
    cantidadAle = 0

    var boton = document.getElementById("btnNew");
    boton.disabled = false;
    
    //controles TRUE= deshabilitado FALSE= habilitado
    document.getElementById("btnAle").disabled = false; 
    document.getElementById("btnAle").style.background = "#0f9b0f";

    document.getElementById("btnNew").disabled = true;
    document.getElementById("btnNew").style.background = "#DC2424";    

    document.getElementById("btnSig").disabled = true;
    document.getElementById("btnSig").style.background = "#DC2424";

    document.getElementById("btnQS").disabled = true;
    document.getElementById("btnQS").style.background = "#DC2424";

    document.getElementById("btnINS").disabled = true;
    document.getElementById("btnINS").style.background = "#DC2424";

    document.getElementById("btnMax").disabled = true;
    document.getElementById("btnMax").style.background = "#DC2424";

    document.getElementById("btnMin").disabled = true;
    document.getElementById("btnMin").style.background = "#DC2424";
}
//generar numero aleatorios
var listaMaximo = 0;
var listaMinimo = 0;
var listaAle = [];
function numAle()
{    
    cantAle();
    var aleatorio = 0;        
    var mayor = 0, menor = 0;
    //console.log(listaAle);
    for (i = 0; i < cantidadAle; i++) 
    {
        aleatorio = Math.round(Math.random()*(99-10)+parseInt(10));
        listaAle[i] = aleatorio;               
    }
    alert("Lista Generada: " + listaAle);
    aumentoBur();    
    
    //controles TRUE= deshabilitado FALSE= habilitado
    document.getElementById("btnAle").disabled = true; 
    document.getElementById("btnAle").style.background = "#DC2424";

    document.getElementById("btnNew").disabled = false;
    document.getElementById("btnNew").style.background = "#0f9b0f";    

    document.getElementById("btnSig").disabled = false;
    document.getElementById("btnSig").style.background = "#0f9b0f";

    document.getElementById("btnQS").disabled = false;
    document.getElementById("btnQS").style.background = "#0f9b0f";

    document.getElementById("btnINS").disabled = false;
    document.getElementById("btnINS").style.background = "#0f9b0f";

    document.getElementById("btnMax").disabled = false;
    document.getElementById("btnMax").style.background = "#0f9b0f";

    document.getElementById("btnMin").disabled = false;
    document.getElementById("btnMin").style.background = "#0f9b0f";
}

function listaMax()
{   
    mayor = 0; 
    for (index = 0; index < listaAle.length; index++) 
    {    
        if (listaAle[index] > mayor) {
            mayor = listaAle[index];
        }        
    }    
    alert("NÚMERO MÁXIMO ES: " + mayor);
}

function listaMin()
{    
    menor = 100;
    for (index = 0; index < listaAle.length; index++) 
    {    
        if (listaAle[index] < menor) {
            menor = listaAle[index];
        }        
    }        
    alert("NÚMERO MÍNIMO ES: " + menor);
}
//Ordenamiento Burbuja Dinamico 
var aumBur = 0;
var listaauxBur;
var contaauxBur;
var largoauxBur; //creamos variables para pasar parametros a principal()
function aumentoBur()
{        
    var lista = listaAle;         
    var nBur; //cantidad de datos en el arreglo

    var auxBur; //variable temporal para lista
    var contadorDivBur = 1;    
    var listaPBur = [];
    nBur = lista.length;      
    largoauxBur = nBur;      
    
    // 1. Crear el elemento                    
    var elementoh3 = document.createElement('h3');   
    // 2. Crear un nodo de texto
    var contenidoh3 = document.createTextNode("Lista No Ordenada: " + lista);
    // 3. Añadir el noto de texto al elemento
    elementoh3.appendChild(contenidoh3);
    // 4. Agregar atributos al elemento
    //elemento.setAttribute("style", "background-color:#DC2424");
    elementoh3.style.backgroundColor = "#00bf8f";
    elementoh3.style.padding = "10px";
    elementoh3.style.width = "auto";    
    elementoh3.style.marginBottom = "40px";
    elementoh3.style.textAlign = "center";
    elementoh3.style.overflow = "auto";
    // 5. Agregar el elemento al documento
    document.getElementById("pilas").appendChild(elementoh3);

    // 1. Crear el elemento                    
    var elementoh3 = document.createElement('h3');   
    // 2. Crear un nodo de texto
    var contenidoh3 = document.createTextNode("Ordenamiento Burbúja");
    // 3. Añadir el noto de texto al elemento
    elementoh3.appendChild(contenidoh3);
    // 4. Agregar atributos al elemento
    //elemento.setAttribute("style", "background-color:#DC2424");
    elementoh3.style.backgroundColor = "#e74c3c";
    elementoh3.style.padding = "10px";
    elementoh3.style.width = "auto";    
    elementoh3.style.marginBottom = "40px";
    elementoh3.style.textAlign = "center";
    // 5. Agregar el elemento al documento
    document.getElementById("pilas").appendChild(elementoh3);

    //Creamos los <p> necesarios
    for (j = 1; j < nBur + 1; j++) 
    {        
        // 1. Crear el elemento                    
        var elementoDivP = document.createElement('p');
        elementoDivP.setAttribute("id", "pa" + j + "");    
        // 2. Crear un nodo de texto
        var contenidoDivP = document.createTextNode("Bur #" + j + "");
        // 3. Añadir el noto de texto al elemento
        elementoDivP.appendChild(contenidoDivP);
        // 4. Agregar atributos al elemento
        //elemento.setAttribute("style", "background-color:#DC2424");
        elementoDivP.style.backgroundColor = "#e74c3c";        
        elementoDivP.style.width = "auto";    
        elementoDivP.style.marginBottom = "40px";
        elementoDivP.style.textAlign = "center";
        elementoDivP.style.color = "white";
        // 5. Agregar el elemento al documento
        document.getElementById("pilas").appendChild(elementoDivP);            
    }
    
    // Algoritmo de burbuja 
    for (k = 1; k < nBur; k++) //1er FOR 1-5
    {        
        for (i = 0; i < (nBur-k); i++) //2do FOR 0-(9-1) | 
        {                            
            if (lista[i] > lista[i + 1]) 
            {
                auxBur = lista[i];                                
                lista[i] = lista[i + 1];
                lista[i + 1] = auxBur;                        
            }             
            //console.log("Lista #" + contadorDivBur + ": " + lista + " Y aum: " + aumBur);
            contadorDivBur += 1; 
            listaPBur[aumBur] = lista.join("");               
            aumBur++;     
        }           
    }    
    
    // 1. Crear el elemento                    
    var elementoh3 = document.createElement('h3');
    // 2. Crear un nodo de texto
    var contenidoh3 = document.createTextNode("Lista Ordenada con Burbúja: " + lista);
    // 3. Añadir el noto de texto al elemento
    elementoh3.appendChild(contenidoh3);
    // 4. Agregar atributos al elemento
    //elemento.setAttribute("style", "background-color:#DC2424");
    elementoh3.style.backgroundColor = "#e74c3c";
    elementoh3.style.padding = "10px";
    elementoh3.style.width = "auto";    
    elementoh3.style.marginBottom = "40px";
    elementoh3.style.textAlign = "center";
    elementoh3.style.overflow = "auto";
    // 5. Agregar el elemento al documento
    document.getElementById("pilas").appendChild(elementoh3);
    
    listaauxBur = listaPBur;
    contaauxBur = contadorDivBur - 1;      
}

//aumentoBur();
var incP = 0;
function principalBur()
{          
    //alert("Largo: " + largoauxBur + "  Lista: " + listaauxBur + "  Contador: " + contaauxBur + "  Incremento: " + incP);
    if(incP < contaauxBur)
    {               
        for (k = 1; k < largoauxBur; k++) //1er FOR 1-5
        {        
            for (i = 0; i < (largoauxBur - k); i++) //2do FOR 0-(9-1) | 
            {            
                if (listaauxBur[i] > listaauxBur[i + 1]) 
                {                                 
                    for (j = 0; j < largoauxBur; j++) 
                    {                    
                        var auxi = document.getElementById("pa" + (j+1));
                        auxi.innerHTML = ("" + listaauxBur[incP].substr(0 + j + j, 2) +"");
                        auxi.style.height = "" + ((listaauxBur[incP].substr(0 + j + j, 2))*2) + "px";
                        auxi.style.marginBottom = "40px";
                        auxi.style.width = "auto";   
                    }                                
                }            
            }        
        }
        //console.log("Principal: " + listaauxBur[incP]);
        incP++;        
    }
    else
    {
        alert("Ordenamiento completado! XD");    
        listaauxBur = [];                
        
        //controles TRUE= deshabilitado FALSE= habilitado
        document.getElementById("btnAle").disabled = true; 
        document.getElementById("btnAle").style.background = "#DC2424";

        document.getElementById("btnNew").disabled = false;
        document.getElementById("btnNew").style.background = "#0f9b0f";    

        document.getElementById("btnSig").disabled = true;
        document.getElementById("btnSig").style.background = "#DC2424";

        document.getElementById("btnMax").disabled = false;
        document.getElementById("btnMax").style.background = "#0f9b0f";

        document.getElementById("btnMin").disabled = false;
        document.getElementById("btnMin").style.background = "#0f9b0f";
    }    
}

//ORDENAMIENTO QUICKSORT
function ordenQS()
{
    var arreglo = listaAle;    
    quicksort(0, (arreglo.length - 1));
    //alert("OrdenQS: " + arreglo);

    // 1. Crear el elemento                    
    var elementoh3 = document.createElement('h3');   
    // 2. Crear un nodo de texto
    var contenidoh3 = document.createTextNode("Ordenamiento QuickSort");
    // 3. Añadir el noto de texto al elemento
    elementoh3.appendChild(contenidoh3);
    // 4. Agregar atributos al elemento    
    elementoh3.style.backgroundColor = "#cb2d3e";
    elementoh3.style.padding = "10px";
    elementoh3.style.width = "auto";    
    elementoh3.style.marginBottom = "40px";
    elementoh3.style.textAlign = "center";
    // 5. Agregar el elemento al documento
    document.getElementById("pilas").appendChild(elementoh3);

    //Creamos los <p> necesarios
    for (j = 1; j < arreglo.length + 1; j++) 
    {        
        // 1. Crear el elemento                    
        var elementoDivP = document.createElement('p');
        elementoDivP.setAttribute("id", "qs" + j + "");    
        // 2. Crear un nodo de texto
        var contenidoDivP = document.createTextNode("QS #" + j + "");
        // 3. Añadir el noto de texto al elemento
        elementoDivP.appendChild(contenidoDivP);
        // 4. Agregar atributos al elemento        
        elementoDivP.style.backgroundColor = "#cb2d3e";
        elementoDivP.style.width = "auto";    
        elementoDivP.style.marginBottom = "40px";
        elementoDivP.style.textAlign = "center";
        elementoDivP.style.color = "#fff";
        // 5. Agregar el elemento al documento
        document.getElementById("pilas").appendChild(elementoDivP);            
    }

    //ordenamiento QuickSort
    function quicksort(primero,ultimo)
    {
        //definimos variables indices
        i = primero
        j = ultimo     
        //sacamos el pivote de la mitad del arreglo
        pivote = arreglo[parseInt((i+j)/2)];
        //repetir hasta que i siga siendo menor que j
        do
        {
            //mientras arreglo[i] sea menor a pivote
            while(arreglo[i]<pivote)        i++;        //mientras j sea mayor a pivote         
            while(arreglo[j]>pivote)        j--; 

            //si i es menor o igual a j, los valores ya se cruzaron
            if(i<=j)
            {
                //variable temporal auxiliar para guardar valor de arreglo[j]
                aux=arreglo[j];

                //intercambiamos los valores de arreglo[j] y arreglo[i]
                arreglo[j] = arreglo[i]
                arreglo[i] = aux            
                // incrementamos y decrementamos i y j
                i++;
                j--;
            }            
        }while(i<j);

            //si primero es menor a j llamamos la funcion nuevamente
        if(primero<j)
        {           
            quicksort(primero,j);       
        }       //si ultimo es mayor que i llamamos la funcion nuevamente       
        if(ultimo>i)
        {
            quicksort(i,ultimo);
        }
    }

    for (j = 0; j < arreglo.length; j++) 
    {                    
        var auxi = document.getElementById("qs" + (j+1));
        auxi.innerHTML = ("" + arreglo[j] +"");
        auxi.style.height = "" + (parseInt(arreglo[j])*2) + "px";
        auxi.style.marginBottom = "40px";
        auxi.style.width = "auto";   
    }                                

    // 1. Crear el elemento                    
    var elementoh3 = document.createElement('h3');
    // 2. Crear un nodo de texto
    var contenidoh3 = document.createTextNode("Lista Ordenada con QuickSort: " + arreglo);
    // 3. Añadir el noto de texto al elemento
    elementoh3.appendChild(contenidoh3);
    // 4. Agregar atributos al elemento    
    elementoh3.style.backgroundColor = "#cb2d3e";
    elementoh3.style.padding = "10px";
    elementoh3.style.width = "auto";    
    elementoh3.style.marginBottom = "40px";
    elementoh3.style.textAlign = "center";
    elementoh3.style.overflow = "auto";
    // 5. Agregar el elemento al documento
    document.getElementById("pilas").appendChild(elementoh3);


    document.getElementById("btnSig").disabled = false;
    document.getElementById("btnSig").style.background = "#0f9b0f";

    document.getElementById("btnQS").disabled = true;
    document.getElementById("btnQS").style.background = "#DC2424";
}

//ORDENAMIENTO INS
function ordenINS()
{    
    var arreglo = listaAle;    
    //ordenamiento Inserción
    const insertionSort = arreglo => 
    {
        const l = arreglo.length;
        let j, temp;
      
        for ( let i = 1; i < l; i++ ) 
        {
          j = i;
          temp = arreglo[ i ];
          while ( j > 0 && arreglo[ j - 1 ] > temp ) 
          {
            arreglo[ j ] = arreglo[ j - 1 ];
            j--;
          }
          arreglo[ j ] = temp;
        }      
        return arreglo;
      };

    const result = insertionSort(arreglo);
    //alert("Orden INS: " + result);

    // 1. Crear el elemento                    
    var elementoh3 = document.createElement('h3');   
    // 2. Crear un nodo de texto
    var contenidoh3 = document.createTextNode("Ordenamiento Insertion Sort");
    // 3. Añadir el noto de texto al elemento
    elementoh3.appendChild(contenidoh3);
    // 4. Agregar atributos al elemento    
    elementoh3.style.backgroundColor = "#4A569D";
    elementoh3.style.padding = "10px";
    elementoh3.style.width = "auto";    
    elementoh3.style.marginBottom = "40px";
    elementoh3.style.textAlign = "center";    
    // 5. Agregar el elemento al documento
    document.getElementById("pilas").appendChild(elementoh3);

    //Creamos los <p> necesarios
    for (j = 1; j < arreglo.length + 1; j++) 
    {        
        // 1. Crear el elemento                    
        var elementoDivP = document.createElement('p');
        elementoDivP.setAttribute("id", "ins" + j + "");    
        // 2. Crear un nodo de texto
        var contenidoDivP = document.createTextNode("INS #" + j + "");
        // 3. Añadir el noto de texto al elemento
        elementoDivP.appendChild(contenidoDivP);
        // 4. Agregar atributos al elemento        
        elementoDivP.style.backgroundColor = "#4A569D";
        elementoDivP.style.width = "auto";    
        elementoDivP.style.marginBottom = "40px";
        elementoDivP.style.textAlign = "center";
        elementoDivP.style.color = "white";
        // 5. Agregar el elemento al documento
        document.getElementById("pilas").appendChild(elementoDivP);            
    }
   
    for (j = 0; j < arreglo.length; j++) 
    {                    
        var auxi = document.getElementById("ins" + (j+1));
        auxi.innerHTML = ("" + arreglo[j] +"");
        auxi.style.height = "" + (parseInt(arreglo[j])*2) + "px";
        auxi.style.marginBottom = "40px";
        auxi.style.width = "auto";   
    }                                

    // 1. Crear el elemento                    
    var elementoh3 = document.createElement('h3');
    // 2. Crear un nodo de texto
    var contenidoh3 = document.createTextNode("Lista Ordenada con Insertion Sort: " + arreglo);
    // 3. Añadir el noto de texto al elemento
    elementoh3.appendChild(contenidoh3);
    // 4. Agregar atributos al elemento    
    elementoh3.style.backgroundColor = "#4A569D";
    elementoh3.style.padding = "10px";
    elementoh3.style.width = "auto";    
    elementoh3.style.marginBottom = "40px";
    elementoh3.style.textAlign = "center";
    elementoh3.style.overflow = "auto";
    // 5. Agregar el elemento al documento
    document.getElementById("pilas").appendChild(elementoh3);

    document.getElementById("btnINS").disabled = true;
    document.getElementById("btnINS").style.background = "#DC2424";
}